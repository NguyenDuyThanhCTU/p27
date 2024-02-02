import { ProductTypeItems } from "@assets/item";
import HomePostsDisplay from "@components/client/Home/HomePostsDisplay";
import HomeProductDisplay from "@components/client/Home/HomeProductDisplay";
import HomeSlide from "@components/client/Home/HomeSlide";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Trang Chủ - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const HomePage = async () => {
  const SlideData = await find("Slides");
  return (
    <div className="mb-3">
      <HomeSlide Data={SlideData} />
      <div className="d:w-[1200px] p:w-auto mx-auto flex flex-col gap-4 mt-5">
        <HomePostsDisplay Type="gioi-thieu" Topic="Giới Thiệu" />
        {ProductTypeItems.map((item: any, idx: number) => (
          <div key={idx}>
            <HomeProductDisplay Type={item.value} Topic={item.label} />
          </div>
        ))}
        <HomePostsDisplay Type="video" Topic="Video" />
        <HomePostsDisplay Type="du-an" Topic="Dự Án" />
        <HomePostsDisplay Type="tin-tuc" Topic="Tin Tức" />
      </div>
    </div>
  );
};

export default HomePage;
