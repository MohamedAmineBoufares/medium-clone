import { Post } from "../types";

export interface Props {
  posts: [Post];
}

export interface PostProps {
  post: Post;
}

export interface FormInputs {
  _id: string;
  name: string;
  email: string;
  comment: string;
}
