// import type { ReactElement } from "react";
import Layout from "../components/layout";
import NextLink from 'next/link'
import { Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Page!</h1>
        <Link as={NextLink} href="/">
          <a>Back to Home</a>
        </Link>
        <p>
          <Link as={NextLink} href="/about">
            <a>About</a>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Page;
