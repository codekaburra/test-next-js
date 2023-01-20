import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { IPageInfo } from '../components/IPageInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pages: IPageInfo[] = [
    {
      href: "/test-etherjs",
      title: "Test Ether",
      description: "Test for calling EVM chain",
    },
    {
      href: "/test-form",
      title: "Test Form",
      description: "TODO...",
    },
  ];
  const pageCards = pages.map((page) => (
    <Link
      href={page.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        {page.title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
      {page.description}
      </p>
    </Link>
  ));
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By EM@2023
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={styles.grid}>
        {pageCards}
      </div>
    </main>
  )
}
