import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Header from "../../components/Header/Header";
import { sanityClient, urlFor } from "../../sanity";
import { PostProps } from "../../utils/interfaces";
import { getPostInfosQuery, getSlugsQuery } from "../../utils/queries";
import { Post } from "../../utils/types";
import PortableText from "react-portable-text";

function Post({ post }: PostProps) {
  return (
    <main>
      <Header />

      <img
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()}
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>

        <h2 className="text-xl font-light text-gray-500">{post.description}</h2>

        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()}
          />

          <p className="font-extra-light text-sm">
            Blog post by{" "}
            <span className="text-green-600">{post.author.name}</span> at{" "}
            {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),

              h2: (props: any) => (
                <h2 className="text-xl font-bold my-5" {...props} />
              ),

              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),

              link: ({ children, href }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
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
