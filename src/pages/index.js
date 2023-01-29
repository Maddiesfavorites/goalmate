import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '<prefix>/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/pages/form.js"></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by signing up here! 
            <form action="/pages/form.js"
            <button onclick = "window.location.href= 'form.js';">HOME</button>
          </p>
        </div>

        <div className={styles.center}>
          <p>
            Goal Buddy
          </p>
        </div>
        <div className={styles.description}>
            We believe that even the smallest affirmation will help build confidence and 
            reflexion into the minds to support their mental, and physical, health. Down below
            we linked 4 interesting articles to dive deeper into the mind and how setting goals
            and with daily encouragement and affirmations, we hope you can accomplish what you put 
            your mind to!
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.forbes.com/sites/lisabodell/2022/12/19/new-years-resolutions-fail-do-this-instead/?sh=33ba81987c8b"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              New Years Resolutions <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn how about 80% of people stop striving for their
               goals before February.
            </p>
          </a>

          <a
            href="https://www.webmd.com/balance/what-to-know-positive-affirmations"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Health Benefits <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Read about the actual science and affect affirmations have on humans.
            </p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=SB-qEYVdvXA"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Kittens <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Enjoy this adorable video of kittens
            </p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=inpok4MKVLM"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Meditation <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sit down and relax for this 5 minute meditation video.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

