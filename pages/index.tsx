import Head from 'next/head'
import { App } from '../src/App'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eric Rabinowitz</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <App />
    </>
  )
}
