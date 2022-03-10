import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import { RichText } from 'prismic-dom';
import Image from 'next/image';
import { useRouter } from 'next/router';
import getPrismicClient from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

type ContentPost = {
  heading: string;
  body: Array<{ text: string }>;
};

const Post: NextPage<PostProps> = ({ post }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p className={commonStyles.main}>Carregando...</p>;
  }

  function countTimeReadingPost(): number {
    const countHeadingWords: number = post.data.content.reduce(
      (acc, currentValue) => {
        return currentValue.heading.split(/\s+/).length + acc;
      },
      0
    );

    const countBodyWords: number = post.data.content.reduce(
      (acc, currentValue) => {
        return RichText.asText(currentValue.body).split(/\s+/).length + acc;
      },
      0
    );

    const minutesReadingPost: number = Math.ceil(
      (countHeadingWords + countBodyWords) / 200
    );

    return minutesReadingPost;
  }

  return (
    <>
      <Head>
        <title>Adair Juneo | {post.data.title}</title>
      </Head>
      <main>
        <article className={commonStyles.main}>
          <Image
            src={post.data.banner.url}
            width={1440}
            height={600}
            alt="banner"
          />
          <h1 className={styles.titlePost}>{post.data.title}</h1>
          <div className={styles.infoPost}>
            <p>
              <FiCalendar fontSize={18} title="Data de publicação" />
              {post.first_publication_date}
            </p>
            <p>
              <FiUser fontSize={18} title="Autor" />
              {post.data.author}
            </p>
            <p>
              <FiClock fontSize={18} title="Tempo de leitura" />
              {`${countTimeReadingPost()} ${
                countTimeReadingPost() > 1 ? 'Minutos' : 'Minuto'
              }`}
            </p>
          </div>
          <aside className={styles.contentPost}>
            {post.data.content.map(content => (
              <section key={content.heading}>
                <h2>{content.heading}</h2>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(content.body),
                  }}
                />
              </section>
            ))}
          </aside>
        </article>
      </main>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.get({
    pageSize: 2,
  });

  const paths = posts.results.map(slugPost => {
    return {
      params: {
        slug: slugPost.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('posts', String(slug));

  const post: Post = {
    first_publication_date: format(
      new Date(response.first_publication_date),
      'd MMM yyyy',
      {
        locale: ptBR,
      }
    ),
    data: {
      title: RichText.asText(response.data.title),
      banner: {
        url: response.data.banner.url,
      },
      author: RichText.asText(response.data.author),
      content: response.data.content.map((contentPost: ContentPost) => {
        return {
          heading: contentPost.heading,
          body: contentPost.body,
        };
      }),
    },
  };

  return {
    props: { post },
    revalidate: 60 * 60 * 24, // 24 Horas
  };
};
