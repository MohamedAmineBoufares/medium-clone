import { Props } from "../../interfaces";
import PostCard from "./PostCard";

function Posts({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          slug={post.slug}
          mainImage={post.mainImage}
          title={post.title}
          author={post.author}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default Posts;
