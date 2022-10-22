import Link from "next/link";
import { urlFor } from "../../sanity";

function PostCard({ slug, mainImage, title, description, author }) {
  return (
    <Link href={`/post/${slug.current}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden">
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src={urlFor(mainImage).url()!}
          title={title}
          alt={title}
        />

        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{title}</p>

            <p className="text-xs">
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
