"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";
import slugify from "slugify";

const HomeServices = ({ Data }: any) => {
  const { Config } = useData();
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  return (
    <div className="py-5 ">
      <h2 className=" text-[30px] font-semibold text-center text-mainColorHover uppercase">
        DỊCH VỤ Taxi Hoa Phượng
      </h2>
      <div className="mt-3 grid p:grid-cols-2 d:grid-cols-4 gap-5 d:w-[1200px] p:w-auto d:mx-auto p:mx-2">
        {Data?.map((item: any, index: number) => {
          const url = slugify(item.title, { lower: true, locale: "vi" });
          return (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-200 duration-300"
              onClick={() => HandleNavigate(`/dich-vu/${url}`)}
            >
              <Image
                src={item.image}
                alt="Picture of the author"
                width={500}
                height={250}
                className="w-full object-cover h-[170px] "
              />
              <div className="text-center font-normal mt-2">{item.title}</div>
              <div className="flex justify-center py-4 ">
                <div
                  className="py-2 px-5 bg-gradient-to-bl hover:bg-gradient-to-br duration-300 from-mainColor to-mainColorHover text-white  text-[13px] font-normal cursor-pointer rounded-lg "
                  onClick={() => HandleNavigate(`tel:${ContactData?.Hotline}`)}
                >
                  Hotline: {ContactData?.Hotline}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServices;
