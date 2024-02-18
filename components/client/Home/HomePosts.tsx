"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";

const HomePosts = () => {
  const { Config, Posts } = useData();
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  return (
    <div className="py-5 px-2">
      <h2 className=" text-[30px] font-bold  text-center text-mainColorHover">
        TIN TỨC NỔI BẬT
      </h2>
      <div className="mt-3 grid p:grid-cols-1  d:grid-cols-4 gap-5 p:w-auto d:w-[1200px] d:mx-auto p:mx2">
        {Posts?.slice(0, 3).map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => HandleNavigate(`/bai-viet/${item.url}`)}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt="Picture of the author"
                  width={500}
                  height={250}
                  className="w-full object-cover h-[200px] hover:scale-110 duration-300 "
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-center font-normal mt-2 px-4 text-[17px]">
                  {item.title}
                </div>
                <p className="truncate2 mt-2 font-light ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePosts;
