import HomeCar from "@components/client/Home/HomeCar";
import HomePosts from "@components/client/Home/HomePosts";
import HomeServices from "@components/client/Home/HomeServices";
import HomeSlide from "@components/client/Home/HomeSlide";
import PriceList from "@components/client/Home/PriceList";
import Register from "@components/client/Home/Register";
import ShortIntro from "@components/client/Home/ShortIntro";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Dịch Vụ Taxi - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const HomePage = async () => {
  const SlideData = await find("Slides");
  const CarData = await find("Car");
  const Services = await find("Services");
  return (
    <div>
      <HomeSlide Data={SlideData} />
      <ShortIntro />
      <Register Data={CarData} />
      <HomeServices Data={Services} />
      <PriceList Data={CarData} />
      <HomeCar Data={CarData} />
      <HomePosts />
    </div>
  );
};

export default HomePage;
