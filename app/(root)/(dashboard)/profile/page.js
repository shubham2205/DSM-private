// /dashboard/profile/page.js

import { revalidateTag } from "next/cache";
import ProfileClient from "../../../../Components/ProfileClient/ProfileClient";
import { getUserProfile } from "../../../../lib/actions/profile.actions";
import { getAddress } from "../../../../lib/actions/address.actions";

const Profile = async () => {
  const tag = revalidateTag("profile") || revalidateTag("defaultAddress");
  const data = await getUserProfile();
  const addressData = await getAddress();

  return (
    <>
           {" "}
      <ProfileClient userDets={data} addressData={addressData} tag={tag} />   {" "}
    </>
  );
};

export default Profile;
