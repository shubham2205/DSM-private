import { getUserWishlist } from "../../../../lib/actions/wishlist.action";
import WishlistClient from "../../../../Components/WishlistClient/WishlistClient";
import { getData } from "../../../../lib/actions/universel.actions";
import { cookiesData } from "../../../../lib/actions/auth.actions";
import { revalidateTag } from "next/cache";

const WishlistPage = async () => {
  const wishlistData = await getUserWishlist();
  const userId = await cookiesData("userId");
  const tag =  revalidateTag("wishlist"); 

  return <WishlistClient wishlistData={wishlistData}  userId={userId} tag={tag}/>;
};

export default WishlistPage;
