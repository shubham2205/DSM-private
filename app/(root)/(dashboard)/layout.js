import React from "react";
import PanelSidebar from "../../../Components/MyPanel/PanelSidebar";
import { getUserProfile } from "../../../lib/actions/profile.actions";

const DashboardLayout = async ({ children }) => {
  const userData = await getUserProfile();
  return (
    <div className="grid grid-cols-9 md:gap-8 lg:px-16  w-full  mt-12">
      <aside className="hidden md:block !sticky  top-20 md:col-span-2  ">
        <PanelSidebar data={userData} />
      </aside>
      <main className="col-span-9 md:col-span-7 shadow-sm h-[100vh] overflow-y-scroll no-scrollbar">{children}</main>
    </div>
  );
};

export default DashboardLayout;
