import PostsDisplay from "@components/client/Posts/PostsDisplay";
import { find } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Tin Tức - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const NewsPage = async () => {
  return (
    <div className="w-[1100px] mx-auto">
      <h2 className="text-mainColorHover font-normal text-[22px] mb-3 uppercase  ">
        Chuyên mục: Tin Tức
      </h2>
      <PostsDisplay Type="tin-tuc" />
    </div>
  );
};

export default NewsPage;
