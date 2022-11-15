import type { ReactElement } from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import Link from "next/link";
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
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </main>
    </Layout>
  );
};

export default Page;
