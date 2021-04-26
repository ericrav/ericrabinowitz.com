import { AppProps } from 'next/app';
import Head from 'next/head';

const typekit = (
  <link
    rel='stylesheet'
    href='https://use.typekit.net/tuk1pra.css'
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/favicon.png'
        />
        <meta
          name='og:site_name'
          content='Eric Rabinowitz'
        />
        <meta
          name='og:description'
          content='Portfolio of creative developer'
        />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          property='og:image'
          content='/share.png'
        />
        <meta
          property='og:image:width'
          content='2132'
        />
        <meta
          property='og:image:height'
          content='990'
        />
        {typekit}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
