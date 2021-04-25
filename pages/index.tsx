import { GetStaticProps } from 'next';
import Head from 'next/head';

import { App } from '../src/App';

interface Props {
  lastUpdated: string;
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
  const lastUpdated = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date());

  return {
    props: {
      lastUpdated,
    },
  };
};
