import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import CalendarIcon from '../../public/assets/calendar.svg';
import userIcon from '../../public/assets/user.svg';
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

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const posts = [
    {
      uid: 'ere1232',
      first_publication_date: '15 Mar 2021',
      data: {
        title: 'Como utilizar Funções',
        subtitle: 'Sincronização em vez de ciclos de vida.',
        autor: 'Joseph Oliveira',
      },
    },
    {
      uid: 'ere12ww32',
      first_publication_date: '19 Abr 2021',
      data: {
        title: 'Criando um app CRA do zero',
        subtitle:
          'Tudo sobre como criar a sua primeira aplicação utilizando Create React App',

        autor: 'Danilo Vieira',
      },
    },
    {
      uid: 'ere123de2',
      first_publication_date: '15 Mar 2021',
      data: {
        title: 'Como utilizar Hooks',
        subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
        autor: 'Joseph Oliveira',
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Home | Spacetraveling Blog</title>
      </Head>

      <main className={styles.homeContainer}>
        <article className={styles.homeContent}>
          {posts.map(item => (
            <Link key={item.uid} href={`/posts/${item.uid}`}>
              <a>
                <header>{item?.data?.title}</header>
                <section>{item?.data?.subtitle}</section>
                <footer>
                  <img src="/assets/calendar.svg" alt="Calendar icon" />
                  <time>{item?.first_publication_date}</time>
                  <img src="/assets/user.svg" alt="User icon" />
                  <div>{item?.data?.autor}</div>
                </footer>
              </a>
            </Link>
          ))}
        </article>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
