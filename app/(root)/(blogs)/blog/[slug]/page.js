"use client";

import { usePathname } from "next/navigation";
import React from "react";
import useSWR from "swr";
import OurBlogCardDetail from "../../../../../Components/Cards/OurBlogCardDetail";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogDetails = () => {
  const { id } = usePathname();

  const {
    data: blogDetailData,
    error: blogError,
    isValidating,
  } = useSWR(`${process.env.NEXT_PUBLIC_API}/v3/blog-detail/${id}`, fetcher);

  if (blogError) return <section>failed to load</section>;
  if (!blogDetailData && !blogError) return <section>loading...</section>;
  // console.log(blogDetailData , "blog D")

  return (
    <main>
      <OurBlogCardDetail datas={blogDetailData?.data} />
    </main>
  );
};

export default BlogDetails;
