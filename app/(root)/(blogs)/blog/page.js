import React from "react";
import OurBlogCards from "../../../../Components/Cards/OurBlogCards";
import { getData } from "../../../../lib/actions/universel.actions";

const Blog = async () => {
  const blogData = await getData(`${process.env.NEXT_PUBLIC_API}/v3/blogs`);
  return (
    <div className="bg-defaultBg w-full my-5">
      <OurBlogCards datas={blogData?.data} />
    </div>
  );
};

export default Blog;
