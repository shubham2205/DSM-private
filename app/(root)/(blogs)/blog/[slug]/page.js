import React from "react";
import OurBlogCardDetail from "../../../../../Components/Cards/OurBlogCardDetail";
import { getData } from "../../../../../lib/actions/universel.actions";

const BlogDetails = async ({ params }) => {
  const blogDetailData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/blog-detail/${params.slug}`
  );

  return (
    <main>
      <OurBlogCardDetail datas={blogDetailData?.data} />
    </main>
  );
};

export default BlogDetails;
