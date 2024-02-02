"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";

const Category = ({ Data, Topic }: any) => {
  return (
    <>
      <div className="border border-mainColorHover">
        <div className="bg-mainColorHover">
          <h2 className="uppercase text-white text-center py-2 font-semibold">
            {Topic}
          </h2>
        </div>
        {Topic === "Danh mục sản phẩm" ? (
          <div>
            {Data?.map((item: any, index: number) => (
              <Link key={index} href={`/san-pham/${item.value}`}>
                <div
                  className={`${
                    index !== Data.length - 1 && "border-b"
                  } pl-4 py-2 text-[15px] font-semibold text-mainColorHover  border-mainColorHover hover:bg-mainColor duration-300`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        ) : Topic === "Video mới nhất" ? (
          <div className="flex flex-col gap-2">
            {Data?.map((item: any, index: number) => (
              <Link
                href={`/bai-viet/${item.url}`}
                key={index}
                className="w-full h-full cursor-pointer"
              >
                <div className=" p-2">
                  <div className="w-full h-[150px] relative">
                    <Image
                      src={item.image}
                      alt={`video ${index}`}
                      width={150}
                      height={150}
                      className="w-full object-cover h-full"
                    />
                    <div className="h-full w-full absolute bg-[rgba(255,255,255,0.1)] top-0 flex justify-center items-center text-red-500 text-[50px]">
                      <div className="text-[50px] p-2 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-white">
                        <AiFillYoutube />
                      </div>{" "}
                    </div>
                  </div>
                  <h2 className="uppercase font-semibold  text-center mt-2 leading-[22px] text-[14px] hover:text-mainColorHover duration-300">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        ) : Topic === "Dự án triển khai" ? (
          <div className="flex flex-col gap-2">
            {Data?.map((item: any, index: number) => (
              <Link
                href={`/bai-viet/${item.url}`}
                key={index}
                className="w-full h-full cursor-pointer"
              >
                <div className=" p-2">
                  <div className="w-full h-[150px] ">
                    <Image
                      src={item.image}
                      alt={`video ${index}`}
                      width={150}
                      height={150}
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <h2 className=" font-semibold  text-center mt-2 leading-[22px] text-[14px] hover:text-mainColorHover duration-300">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        ) : Topic === "Tin tức" ? (
          <div className="flex flex-col gap-2">
            {Data?.map((item: any, index: number) => (
              <Link
                href={`/bai-viet/${item.url}`}
                key={index}
                className="w-full h-full cursor-pointer"
              >
                <div className=" p-2 grid grid-cols-5 gap-2 items-center border-b">
                  <div className="w-[100px] h-[100px] col-span-2 ">
                    <Image
                      src={item.image}
                      alt={`video ${index}`}
                      width={100}
                      height={100}
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <h2 className=" font-light mt-2 leading-[18px] text-[14px] col-span-3 hover:text-mainColorHover duration-300">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default Category;
