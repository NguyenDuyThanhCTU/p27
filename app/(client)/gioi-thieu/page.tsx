import Introduction from "@components/client/Introduction/Introduction";
import { find, findById } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Giới thiệu - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}
const IntroductionPage = async () => {
  const Data = await findById("Posts", "introductory");
  const image = Data?.image;
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-no-repeat bg-cover">
        <Image
          src={image}
          alt="Picture of the author"
          width={1300}
          height={650}
          className="w-full h-full"
        />
      </div>
      <div>
        <div className="flex flex-col w-auto p:mx-2 d:mx-10 py-5">
          <div className="border-b pb-2">
            <div className="uppercase font-bold text-[1.5rem] ">
              <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
                Tại sao chọn Dịch vụ của Taxi Hoa Phượng
              </div>
            </div>
            <div className="text-center">{Data?.shortDescription}</div>
          </div>
          <div className="mt-4">
            <Introduction Data={Data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
