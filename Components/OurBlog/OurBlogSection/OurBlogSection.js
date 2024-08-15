"use client";
import React from "react";
import useSWR from "swr";
import OurBlogCards from "../../Cards/OurBlogCards";

const fetcher = (url) => fetch(url).then((res) => res.json());
const OurBlogSection = () => {
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

export default OurBlogSection;
