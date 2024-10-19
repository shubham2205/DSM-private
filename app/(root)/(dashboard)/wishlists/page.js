


import { getUserWishlist } from "../../../../lib/actions/wishlist.action";
import WishlistClient from "../../../../Components/WishlistClient/WishlistClient";
import { cookiesData } from "../../../../lib/actions/auth.actions";
import { revalidateTag } from "next/cache";

export const dynamic = 'force-dynamic';

const WishlistPage = async () => {
  const wishlistData = await getUserWishlist();
  const userId = await cookiesData("userId");
  const tag = revalidateTag("wishlist"); 

  return <WishlistClient wishlistData={wishlistData} userId={userId} tag={tag}/>;
};

export default WishlistPage;
