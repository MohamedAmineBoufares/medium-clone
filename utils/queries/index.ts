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

export const getSlugsQuery: string = `*[_type == "post"]{
    _id,
   
  slug {current}
  }`;

export const getPostInfosQuery: string = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
    name,
    image
    },
  
  "comments": * [
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true ],
  
   description,
   mainImage,
   slug,
   body
  
  }`;
