import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PizzaLists from "../components/PizzaLists";

export default function Home() {
  return (
    <div className="bg-red-50">
      <Head>
        <title>Food Order Website</title>
        <meta name="description" content="Best Pizza shop in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
      <Featured />
      <PizzaLists />
      <Footer />
    </div>
  );
}
