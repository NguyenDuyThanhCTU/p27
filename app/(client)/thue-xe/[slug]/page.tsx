import PostsRecommend from "@components/client/Posts/PostsRecommend";
import { find, findById } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import slugify from "slugify";

interface PostsDetailProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Thuê Xe - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const PostsDetailPage = async ({ searchParams, params }: PostsDetailProps) => {
  const Data = await find("Car");
  const CarData = Data?.find(
    (item: any) =>
      slugify(item.title, { locale: "vi", lower: true }) === params.slug
  );
  const markup = { __html: CarData?.describe };
  return (
    <div className="border-[1px] border-gray-300 rounded-lg bg-white d:w-[1200px] mx-auto p:w-auto ">
      <div className="p-4">
        <h2 className="font-normal text-[20px] text-mainColorHover">
          {CarData?.title}
        </h2>
        <div className="flex gap-2 items-center text-[14px]">
          <CiClock2 />
          <p> {CarData.date}</p>
        </div>
        <div className="mt-3">
          <Image
            src={CarData?.image}
            alt="Picture of the author"
            width={1200}
            height={400}
          />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={markup ? markup : { __html: "" }}
        ></div>
        <PostsRecommend />
      </div>
    </div>
  );
};

export default PostsDetailPage;
