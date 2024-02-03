"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";

const PostsDisplay = ({ Type }: any) => {
  const { HandleNavigate } = useStateProvider();

  const { Posts } = useData();
  const Data = Posts;
  return (
    <div className="flex flex-col gap-7 ">
      {Data?.map((items: any, idx: number) => (
        <div
          onClick={() => HandleNavigate(`/bai-viet/${items.url}`)}
          className="border-[1px] border-gray-300 rounded-lg bg-white cursor-pointer"
        >
          <div className="p-4 ">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-2  h-[200px]">
                <Image
                  src={items.image}
                  alt={Type + `-` + idx + `-` + `image`}
                  width={200}
                  height={200}
                  className="h-full object-cover w-full"
                />
              </div>
              <div className="col-span-4 font-bold  text-mainColorHover">
                <div>{items.title}</div>

                <div className="text-[12px] text-black font-light mt-2">
                  {items.description} ...
                </div>
              </div>
            </div>
            <div className="mt-4 py-1 border-y border-gray-200 text-[14px] flex justify-between items-center text-mainColorHover">
              <p> {items.date}</p>
              <div className="hover:text-blue-500 duration-300 cursor-pointer">
                Xem thêm
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsDisplay;
