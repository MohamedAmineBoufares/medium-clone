import Link from "next/link";
import { urlFor } from "../../sanity";

function PostCard({ slug, mainImage, title, description, author }) {
  return (
    <Link href={`/post/${slug.current}`}>
      <div>
        <img src={urlFor(mainImage).url()!} title={title} alt={title} />

        <div className="flex justify-between p-5 bg-white">
          <div>
            <p>{title}</p>
            <p>
              {description} by {author.name}
            </p>
          </div>

          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(author.image).url()}
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
