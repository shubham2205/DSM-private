




import { Suspense } from 'react';
import { getUserWishlist } from "../../../../lib/actions/wishlist.action";
import WishlistClient from "../../../../Components/WishlistClient/WishlistClient";
import { getData } from "../../../../lib/actions/universel.actions";
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const WishlistPage = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  const wishlistData = await getUserWishlist();

  return (
    <Suspense fallback={<div>Loading wishlist...</div>}>
      <WishlistClient wishlistData={wishlistData} userId={userId} />
    </Suspense>
  );
};

export default WishlistPage;