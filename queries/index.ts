export const getPostsQuery: string = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
   },
  description,
  mainImage,
  slug
  }`;
