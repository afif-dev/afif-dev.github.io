import type { ReactElement } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Page!</h1>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </main>
    </Layout>
  );
};

export default Page;
