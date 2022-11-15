import type { ReactElement } from "react";
import Layout from "../components/layout";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="{styles.description} text-3xl font-bold underline">
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/posts/ssg-ssr">
            <a className={styles.card}>
              <h2>ssg-ssr &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/posts/pre-rendering">
            <a className={styles.card}>
              <h2>pre-rendering &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Page;
