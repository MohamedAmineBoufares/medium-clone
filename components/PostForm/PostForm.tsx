import React from "react";
import { FormInputs, PostProps } from "../../utils/interfaces";

import { useForm, SubmitHandler } from "react-hook-form";

function PostForm({ post }: PostProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    fetch("/api/create-comment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below!</h4>

      <hr className="py-3 mt-2" />

      <input {...register("_id")} type="hidden" name="_id" value={post._id} />

      <label className="block mb-5">
        <span className="text-gray-700">Name</span>

        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="John Doe"
          type="text"
          {...register("name", { required: true })}
        />
      </label>

      <label className="block mb-5">
        <span className="text-gray-700">Email</span>

        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="John Doe"
          type="text"
          {...register("email", { required: true })}
        />
      </label>

      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>

        <textarea
          className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Some comment"
          rows={6}
          {...register("comment", { required: true })}
        />
      </label>

      <div className="flex flex-col p-5">
        {errors.name && (
          <span className="text-red-500">- This field is required</span>
        )}

        {errors.email && (
          <span className="text-red-500">- This field is required</span>
        )}

        {errors.comment && (
          <span className="text-red-500">- This field is required</span>
        )}
      </div>

      <input
        className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
      />
    </form>
  );
}

export default PostForm;
