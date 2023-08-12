// import type { ReactElement } from "react";
import Layout from "../components/layout";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Page!</h1>
        <NextLink href="/" passHref>
          <Link color="teal.500" display={"block"}>
            Back to Home
          </Link>
        </NextLink>

        <NextLink href="/about" passHref>
          <Link color="pink.500" display={"block"}>
            About
          </Link>
        </NextLink>

        <NextLink href="/" passHref>
          <Link color="teal.500" display={"block"}>
            Home
          </Link>
        </NextLink>
      </main>
    </Layout>
  );
};

export default Page;
