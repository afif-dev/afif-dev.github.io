import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Page: NextPageWithLayout = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About Page!</h1>

      <p className="{styles.description} text-3xl font-bold underline">
        Get started by editing <code className={styles.code}>pages/index.tsx</code>
      </p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
