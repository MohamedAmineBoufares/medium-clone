import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Header from "../../components/Header/Header";
import { sanityClient, urlFor } from "../../sanity";
import { PostProps } from "../../utils/interfaces";
import { getPostInfosQuery, getSlugsQuery } from "../../utils/queries";
import { Post } from "../../utils/types";

import PostBody from "../../components/PostBody/PostBody";
import PostForm from "../../components/PostForm/PostForm";

function Post({ post }: PostProps) {
  return (
    <main>
      <Header />

      <PostBody post={post} />

      <PostForm post={post} />
    </main>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = getSlugsQuery;

  const slugs = await sanityClient.fetch(query);

  const paths = slugs.map(({ slug }: Post) => ({
    params: {
      slug: slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = getPostInfosQuery;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },

    revalidate: 60,
  };
};
