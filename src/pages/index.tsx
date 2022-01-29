import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig.News</title>
      </Head>

      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.9 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    
    </>
  )
}
