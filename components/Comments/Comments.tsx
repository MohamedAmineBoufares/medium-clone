import React from "react";
import { PostProps, Props } from "../../utils/interfaces";

function Comments({ post }: PostProps) {
  return (
    <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 space-y-2">
      <h3 className="text-4xl">Comments</h3>

      <hr className="pb-2" />

      {post?.comments?.map(({ name, comment, _id }) => (
        <div key={_id}>
          <p>
            <span className="text-yellow-500">{name}:</span> {comment}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
