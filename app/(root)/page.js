import React from "react";
import HeroDropdown from "../../Components/HomeComponents/HeroHoverDropdown/index";
import Banners from "../../Components/HomeComponents/Banners/index";
import SliderWithPName from "../../Components/HomeComponents/SliderWithPName/index";
import FeatureCardSlider from "../../Components/HomeComponents/FeatureCardSlider/index";
import HomeBanner from "../../Components/HomeComponents/HomeBannerSlider/index";
import TodayDealSection from "../../Components/HomeComponents/TodayDealSection/index";
import BestSellerSection from "../../Components/HomeComponents/BestSellerSection/index";
import TopCategories from "../../Components/HomeComponents/Top12CategoriesSection/index";
import TwoBanner from "../../Components/HomeComponents/TwoBanner/index";
import Top12Brands from "../../Components/HomeComponents/Top12Brands/index";
import Confetti from "../../Components/confetti/index";
import { getData } from "../../lib/actions/universel.actions";
import { revalidateTag } from "next/cache";
import { isProductInWishlist } from "../../lib/actions/wishlist.action";
import { cookiesData } from "../../lib/actions/auth.actions";

const Home = async () => {
  const userId = await cookiesData("userId");
  const featuredData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/categories/featured`
  );
  const homeData = await getData(`${process.env.NEXT_PUBLIC_API}/v3/home`);
  const todayDeal = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/products/todays-deal`
  );
  const top12brands = await getData(`${process.env.NEXT_PUBLIC_API}/v3/brands`);
  const topCategories = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/categories`
  );
  const HomeCategories = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/categories/top`
  );
  const tag = revalidateTag("wishlist");

  const checkWishlistItem = userId && (await isProductInWishlist());

  return (
    <main>
      <div>
        <div className="!w-full">
          <Confetti />
        </div>
        <div className="bg-white">
          <HeroDropdown data={HomeCategories} />
          {/* <HeroDropdown data={homeData?.data?.category} /> */}
          <HomeBanner data={homeData?.data?.banners?.data?.slider1_images} />
        </div>
        <SliderWithPName data={featuredData?.data || []} />
        <TodayDealSection
          data={todayDeal?.data || []}
          banner={homeData?.data?.banners?.data?.banner1}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Featured Products"}
          data={homeData?.data?.featured?.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Best Selling"}
          btn={"Top 20"}
          data={homeData?.data?.top_sell?.data}
        />
        <div className="my-6">
          <Banners data={homeData?.data?.banners?.data?.banner2} />
        </div>
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Arduino Board"}
          btn={"Top 20"}
          data={homeData?.data?.category[0].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"E-Bike Part"}
          btn={"Top 20"}
          data={homeData?.data?.category[1].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Arduino"}
          btn={"Top 20"}
          data={homeData?.data?.category[2].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Dc Geared Motors"}
          btn={"Top 20"}
          data={homeData?.data?.category[3].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Resberry pi"}
          btn={"Top 20"}
          data={homeData?.data?.category[4].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Other Components"}
          btn={"Top 20"}
          data={homeData?.data?.category[5].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Sensors"}
          btn={"Top 20"}
          data={homeData?.data?.category[6].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Drone Motors"}
          data={homeData?.data?.category[7].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Jumper Wire"}
          data={homeData?.data?.category[8].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Relay Board"}
          data={homeData?.data?.category[9].products.data}
        />
        <FeatureCardSlider
          userId={userId}
          tag={tag}
          checkWishlistItem={checkWishlistItem}
          title={"Jumper Wire"}
          data={homeData?.data?.category[10].products.data}
        />
        <TwoBanner data={homeData?.data?.banners?.data?.banner3} />
        <BestSellerSection data={homeData?.data?.best_seller} />
        <Top12Brands
          title={"Top 12 Brands"}
          btnName={"View All Brands"}
          data={top12brands?.data}
        />
        <TopCategories
          title={"Top 12 Categories"}
          btnName={"View All Sellers"}
          data={topCategories?.data}
        />
      </div>
    </main>
  );
};

export default Home;
