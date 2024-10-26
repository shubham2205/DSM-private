import React from "react";
import ProductDetail from "../../../../../Components/ProductDetail";
import { getData } from "../../../../../lib/actions/universel.actions";
import { cookiesData } from "../../../../../lib/actions/auth.actions";
import { revalidateTag } from "next/cache";
import { isProductInWishlist } from "../../../../../lib/actions/wishlist.action";

const Product = async ({ params }) => {
  const userId = await cookiesData("userId");

  const productDetailData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/products/${params.slug}`
  );

  const topSelling = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/products/best-seller`
  );

  const relatedProduct = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/products/related/${params.slug}`
  );

  const relatedItems = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/products/related_item/${params.slug}`
  );

  const relatedViews = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/recent-products/${params.slug}`
  );
  const Tag = revalidateTag("wishlist");

  const checkWishlistItem =await isProductInWishlist();

  return (
    <main>
      <ProductDetail
        data={productDetailData?.data}
        topSeller={topSelling?.data}
        related={relatedProduct?.data}
        relatedItems={relatedItems?.data}
        relatedViews={relatedViews?.data}
        proId={params.slug}
        userId={userId}
        Tag={Tag}
        checkWishlistItem={checkWishlistItem}
      />
    </main>
  );
};

export default Product;
