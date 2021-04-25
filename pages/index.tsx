import { GetStaticProps } from 'next';
import Head from 'next/head';

import { App } from '../src/App';

interface Props {
  lastUpdated: number;
}

export default function Home({ lastUpdated }: Props) {
  return (
    <>
      <Head>
        <title>Eric Rabinowitz</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <App lastUpdated={lastUpdated} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const lastUpdated = Date.now();

  return {
    props: {
      lastUpdated,
    },
  };
};
