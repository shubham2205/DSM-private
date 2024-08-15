"use client";

import React from "react";
import useSWR from "swr";
import OurBlogCards from "../../../../Components/Cards/OurBlogCards";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Blog = () => {
  const { data: blogData, error: blogError } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/v3/blogs`,
    fetcher
  );

  if (blogError) return <div>failed to load</div>;
  if (!blogData && !blogError) return <div>loading...</div>;

  return (
    <div className="bg-defaultBg w-full my-5">
      <OurBlogCards datas={blogData?.data} />
    </div>
  );
};




export default Blog;
