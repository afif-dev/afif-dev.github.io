// import type { ReactElement } from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data, error } = useSWR("/data.json", fetcher, { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false });

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

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
        <div>
          <h1>My Skills</h1>
          <ul>
            <li>Name: {data.record.name}</li>
            <li>Language: {data.record.language}</li>
            <li>
              Skills
              <ul>
                {data.programming.map((programming: any) => (
                  <li key={programming.name}>{programming.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Page;
