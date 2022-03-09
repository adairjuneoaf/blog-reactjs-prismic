import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

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

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>Criando um app CRA do zero | Adair Juneo</title>
      </Head>
      <main>
        <img src="/banner.png" alt="banner" className={styles.imgBanner} />
        <article className={commonStyles.main}>
          <h1 className={styles.titlePost}>Criando um app CRA do zero</h1>
          <div className={styles.infoPost}>
            <p>
              <FiCalendar fontSize={18} />
              15 Mar 2021
            </p>
            <p>
              <FiUser fontSize={18} />
              Adair Juneo
            </p>
            <p>
              <FiClock fontSize={18} />4 min
            </p>
          </div>
          <aside className={styles.contentPost}>
            <h2>Cras laoreet mi</h2>
            <p>
              Nulla auctor sit amet quam vitae commodo. Sed risus justo,
              vulputate quis neque eget, dictum sodales sem. In eget felis
              finibus, mattis magna a, efficitur ex. Curabitur vitae justo
              consequat sapien gravida auctor a non risus. Sed malesuada mauris
              nec orci congue, interdum efficitur urna dignissim. Vivamus cursus
              elit sem, vel facilisis nulla pretium consectetur. Nunc congue.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam consectetur massa nec
              metus condimentum, sed tincidunt enim tincidunt. Vestibulum
              fringilla risus sit amet massa suscipit eleifend. Duis eget metus
              cursus, suscipit ante ac, iaculis est. Donec accumsan enim sit
              amet lorem placerat, eu dapibus ex porta. Etiam a est in leo
              pulvinar auctor. Praesent sed vestibulum elit, consectetur egestas
              libero. Ut varius quis velit sed cursus. Nunc libero ante,
              hendrerit eget consectetur vel, viverra quis lectus. Sed vulputate
              id quam nec tristique. Etiam lorem purus, imperdiet et porta in,
              placerat non turpis. Cras pharetra nibh eu libero ullamcorper, at
              convallis orci egestas. Fusce ut est tellus. Donec ac consectetur
              magna, nec facilisis enim. Sed vel tortor consectetur, facilisis
              felis non, accumsan risus. Integer vel nibh et turpis. Nam eu
              sollicitudin neque, vel blandit dui. Aliquam luctus aliquet
              ligula, sed: Suspendisse ac facilisis leo. Sed nulla odio, aliquam
              ut lobortis vitae, viverra quis risus. Vivamus pulvinar enim sit
              amet elit porttitor bibendum. Nulla facilisi. Aliquam libero
              libero, porta ac justo vitae, dapibus convallis sapien. Praesent a
              nibh pretium, ultrices urna eget, vulputate felis. Phasellus ac
              sagittis ipsum, a congue lectus. Integer interdum ut velit
              vehicula volutpat. Nulla facilisi. Nulla rhoncus metus lorem, sit
              amet facilisis ipsum faucibus et. Lorem ipsum. Curabitur a rutrum
              ante. Praesent in justo sagittis, dignissim quam facilisis,
              faucibus dolor. Vivamus sapien diam, faucibus sed sodales sed,
              tincidunt quis sem. Donec tempus ipsum massa, ut fermentum ante
              molestie consectetur. In hac habitasse platea dictumst. Sed non
              finibus nibh, vitae dapibus arcu. Sed lorem magna, imperdiet non
              pellentesque et, rhoncus ac enim. Class aptent taciti sociosqu ad
              litora torquent per conubia. Praesent ac sapien eros. Suspendisse
              potenti. Morbi eu ante nibh. Proin dictum, tellus ut molestie
              tincidunt, urna tortor sodales velit, ut tempor lectus ipsum nec
              sapien. Nulla nec purus vitae libero aliquet posuere non et
              sapien. Cras in erat rhoncus, <strong>dignissim ligula</strong>{' '}
              iaculis, faucibus orci. Donec ligula neque, imperdiet vitae mauris
              eget, egestas varius massa. Praesent ornare nisi at dui dapibus,
              ac tristique felis. Phasellus maximus urna lacus, non imperdiet ex
              blandit sit amet. Vivamus et tellus est. Mauris ligula elit,
              placerat non tellus a, dictum porttitor urna. Phasellus mollis
              turpis id suscipit dapibus. In dolor. Sed sit amet euismod sapien,
              non eleifend erat. Vivamus et quam odio. Integer nisi lacus,
              maximus sit amet turpis in, luctus molestie sem. Duis sit amet
              euismod erat. Fusce pulvinar ex neque, egestas cursus nulla
              ullamcorper vel. Pellentesque mollis erat egestas est rhoncus, sit
              amet sodales massa ullamcorper. Etiam auctor ante a neque
              facilisis tristique. Proin ultricies fringilla turpis, eget tempus
              elit imperdiet non. Quisque. Etiam eu tortor placerat, varius orci
              non, ornare nunc. Cras suscipit in ligula ultricies lacinia.
              Pellentesque at tristique sapien, et scelerisque leo. Donec eu
              nisi at magna tristique luctus vel at turpis. Nam vestibulum
              ornare ex cursus vulputate. In elementum tellus at sapien
              bibendum, id maximus mauris convallis. Donec facilisis porta
              lobortis. Vivamus mauris diam, pretium ac dolor. Pellentesque et
              consequat arcu, ac laoreet ante. Nam non.
            </p>

            <ul>
              <li>
                Suspendisse ac facilisis leo. Sed nulla odio, aliquam ut
                lobortis vitae, viverra quis risus. Vivamus pulvinar enim sit
                amet elit porttitor bibendum. Nulla facilisi. Aliquam libero
                libero, porta ac justo vitae, dapibus convallis sapien. Praesent
                a nibh pretium, ultrices urna eget, vulputate felis. Phasellus
                ac sagittis ipsum, a congue lectus. Integer interdum ut velit
                vehicula volutpat. Nulla facilisi. Nulla rhoncus metus lorem,
                sit amet facilisis ipsum faucibus et. Lorem ipsum.
              </li>
              <li>
                Curabitur a rutrum ante. Praesent in justo sagittis, dignissim
                quam facilisis, faucibus dolor. Vivamus sapien diam, faucibus
                sed sodales sed, tincidunt quis sem. Donec tempus ipsum massa,
                ut fermentum ante molestie consectetur. In hac habitasse platea
                dictumst. Sed non finibus nibh, vitae dapibus arcu. Sed lorem
                magna, imperdiet non pellentesque et, rhoncus ac enim. Class
                aptent taciti sociosqu ad litora torquent per conubia.
              </li>
            </ul>
          </aside>
        </article>
      </main>
    </>
  );
};

export default Post;

// export default function Post() {
//   // TODO
// }

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
