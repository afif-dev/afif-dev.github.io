// import type { ReactElement } from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import NextLink from 'next/link'
import { Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>About Page!</h1>
        <div className={styles.exampleContainer}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        </div>
        <p className="{styles.description} text-3xl font-bold underline">
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>
        <Link as={NextLink} href="/">
          <a>Back to Home</a>
        </Link>
        <p>
          <Link as={NextLink} href="/contact">
            <a>Contact</a>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Page;
