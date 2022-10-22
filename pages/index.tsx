import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium clone</title>
      </Head>

      <Header />

      <Banner />
    </div>
  );
}
