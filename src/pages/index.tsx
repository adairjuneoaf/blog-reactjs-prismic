import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-dom';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiUser, FiCalendar } from 'react-icons/fi';

import { useState } from 'react';
import getPrismicClient from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

const Home: NextPage<PostPagination> = ({ next_page, results }) => {
  const [newPosts, setNewPosts] = useState(results);
  const [newPagePosts, setPagePosts] = useState(next_page);

  async function loadMorePosts(): Promise<void> {
    try {
      const responsePosts = await fetch(newPagePosts);
      const resultPosts = await responsePosts.json();

      setPagePosts(resultPosts.next_page);

      const newResultPosts: Array<Post> = resultPosts.results.map(
        (post: Post) => {
          return {
            uid: post.uid,
            first_publication_date: format(
              new Date(post.first_publication_date),
              'd MMM yyyy',
              {
                locale: ptBR,
              }
            ),
            data: {
              title: RichText.asText(post.data.title),
              subtitle: RichText.asText(post.data.subtitle),
              author: RichText.asText(post.data.author),
            },
          };
        }
      );

      setNewPosts([...newPosts, ...newResultPosts]);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Adair Juneo | Blog</title>
      </Head>

      <main className={commonStyles.main}>
        <section className={styles.homePagePosts}>
          {newPosts.map(post => (
            <article key={post.uid}>
              <Link href={`post/${post.uid}`}>
                <a>{post.data.title}</a>
              </Link>
              <p>{post.data.subtitle}</p>
              <div className={styles.footerPost}>
                <p>
                  <FiCalendar />
                  {post.first_publication_date}
                </p>
                <p>
                  <FiUser />
                  {post.data.author}
                </p>
              </div>
            </article>
          ))}
        </section>
        {newPagePosts && (
          <button onClick={loadMorePosts} type="button">
            <a className={styles.loadMore}>Carregar mais</a>
          </button>
        )}
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.get({
    pageSize: 2,
  });

  const { next_page } = postsResponse;

  const results = postsResponse.results.map<Post>(post => {
    return {
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'd MMM yyyy',
        {
          locale: ptBR,
        }
      ),
      data: {
        title: RichText.asText(post.data.title),
        subtitle: RichText.asText(post.data.subtitle),
        author: RichText.asText(post.data.author),
      },
    };
  });

  return {
    props: { results, next_page },
    revalidate: 60 * 60 * 4, // 4 Horas
  };
};
