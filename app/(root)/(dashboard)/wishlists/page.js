import { getUserWishlist } from "../../../../lib/actions/wishlist.action";
import WishlistClient from "../../../../Components/WishlistClient/WishlistClient";
import { cookiesData } from "../../../../lib/actions/auth.actions";
import { revalidateTag } from "next/cache";

export const dynamic = 'force-dynamic';

const WishlistPage = async () => {
  try {
    const wishlistData = await getUserWishlist();
    const userId = await cookiesData("userId");
    const tag = revalidateTag("wishlist");

    return <WishlistClient wishlistData={wishlistData} userId={userId} tag={tag} />;
  } catch (error) {
    return <p>Failed to load wishlist. Please try again later.</p>;
  }
};

export default WishlistPage;
