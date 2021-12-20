import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-red-50">
      <Head>
        <title>Food Order Website</title>
        <meta name="description" content="Best Pizza shop in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
}
