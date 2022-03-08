import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { FiUser } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';

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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adair Juneo | Blog</title>
      </Head>

      <main className={commonStyles.main}>
        <section className={styles.homePagePosts}>
          <article>
            <h1>Como utilizar Hooks</h1>
            <p>Pensando em sincronicação ao invés de ciclos de vida.</p>
            <div className={styles.footerPost}>
              <p>
                <FiCalendar />
                15 Mar 2021
              </p>
              <p>
                <FiUser />
                Adair Juneo
              </p>
            </div>
          </article>

          <article>
            <h1>Criando um app CRA do zero</h1>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>
            <div className={styles.footerPost}>
              <p>
                <FiCalendar />
                15 Mar 2021
              </p>
              <p>
                <FiUser />
                Adair Juneo
              </p>
            </div>
          </article>

          <article>
            <h1>Como utilizar Hooks</h1>
            <p>Pensando em sincronicação ao invés de ciclos de vida.</p>
            <div className={styles.footerPost}>
              <p>
                <FiCalendar />
                15 Mar 2021
              </p>
              <p>
                <FiUser />
                Adair Juneo
              </p>
            </div>
          </article>

          <article>
            <h1>Criando um app CRA do zero</h1>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>
            <div className={styles.footerPost}>
              <p>
                <FiCalendar />
                15 Mar 2021
              </p>
              <p>
                <FiUser />
                Adair Juneo
              </p>
            </div>
          </article>
        </section>
        <a href="/">Carregar mais</a>
      </main>
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
