import PostsRecommend from "@components/client/Posts/PostsRecommend";
import { useData } from "@context/DataProviders";
import { find, findById } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    title: `Dịch Vụ - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const PostsDetailPage = async ({ searchParams, params }: PostsDetailProps) => {
  const Data = await find("Services");
  const ServicesData = Data?.find(
    (item: any) =>
      slugify(item.title, { locale: "vi", lower: true }) === params.slug
  );
  const Config = await find("Config");
  const ContactData = Config?.find((item: any) => item.id === "contact");

  return (
    <div className="p:w-auto d:w-[1200px] p:mx-2 d:mx-auto py-5">
      <h2 className=" font-normal uppercase text-[25px] py-2">
        {ServicesData?.title}
      </h2>
      <div className="grid p:grid-cols-1 d:grid-cols-2 gap-5 items-center">
        <div>
          <div>
            <Image
              src={ServicesData?.image}
              alt="Picture of the author"
              width={700}
              height={350}
            />
          </div>
          <div className="flex justify-center py-4 ">
            <Link
              href={
                ContactData ? `tel:${ContactData?.Hotline}` : `tel:0961268996`
              }
              className="py-2 px-5 bg-gradient-to-bl hover:bg-gradient-to-br duration-300 from-mainColor to-mainColorHover text-white  text-[13px] font-normal cursor-pointer rounded-lg "
            >
              {ContactData ? `Hotline: ${ContactData?.Hotline}` : `0961268996`}
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-red-500 font-normal uppercase text-[25px]">
            {ServicesData?.title}
          </h2>
          <p>Taxi Giá Rẻ – Phục vụ 24/24 giờ</p>
          <div className="mt-4">
            <h3 className="text-mainColorHover font-semibold text-[22px] ">
              {ServicesData?.title}
            </h3>
            <div className="flex flex-col gap-2 ml-3">
              <p>- Gọi là có – phục vụ 24/7</p>
              <p>- Xe đời mới, sang trọng</p>
              <p>- Tài xế nhiều năm kinh nghiệm</p>
              <p>- Giá cả rẻ hơn taxi thông thường</p>
              <p>- Tài xế sẽ đến đón tận nơi sau 5-10 phút, miễn phí</p>
              <p>
                - Hotline hỗ trợ 24/7:{" "}
                {ContactData
                  ? `Hotline: ${ContactData?.Hotline}`
                  : `0961268996`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetailPage;
