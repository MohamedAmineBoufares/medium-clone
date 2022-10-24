import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import { Props } from "../utils/interfaces";
import { getPostsQuery } from "../utils/queries";
import { sanityClient } from "../sanity";
import Comments from "../components/Comments/Comments";

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium clone</title>
      </Head>

      <Header />

      <Banner />

      <Posts posts={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = getPostsQuery;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
