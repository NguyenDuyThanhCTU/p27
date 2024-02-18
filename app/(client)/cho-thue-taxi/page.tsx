import CarDisplay from "@components/client/Car/CarDisplay";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Thuê Xe - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const NewsPage = async () => {
  const CarData = await find("Car");
  return (
    <div className="d:w-[1100px] mx-auto p:w-auto py-5">
      <h2 className="text-mainColorHover font-normal text-[22px] mb-3 uppercase  ">
        Chuyên mục: CHO THUÊ TAXI
      </h2>
      <CarDisplay Data={CarData} />
    </div>
  );
};

export default NewsPage;
