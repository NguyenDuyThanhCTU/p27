"use client";
import { ProductTypeItems } from "@assets/item";
import { useStateProvider } from "@context/StateProvider";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import slugify from "slugify";

const HeaderDropDown = ({ ServiceItem, Type }: any) => {
  const { setIsLoading } = useStateProvider();
  const router = useRouter();
  const HandleNavigate = (url: any) => {
    router.push(url);
    setIsLoading(1000);
  };
  return (
    <>
      <div className="flex flex-col top-6 absolute ">
        <div className="bg-none w-full h-6"></div>
        <div className=" top-9 hidden group-hover/main:block duration-300     ">
          <div className=" flex flex-col bg-white  shadow-md border-t-2 border-gray-500 ">
            {ServiceItem?.map((items: any, idx: number) => {
              const url = slugify(items.title, { lower: true, locale: "vi" });
              return (
                <div className=" group/level1    relative font-light text-white    border-b">
                  <div
                    onClick={() =>
                      HandleNavigate(
                        `${
                          Type === "car" ? `/thue-xe/${url}` : `/dich-vu/${url}`
                        }`
                      )
                    }
                    key={idx}
                    className="  border-b hover:bg-mainColor duration-300"
                  >
                    <div className="py-2 px-4 cursor-pointer w-full hover:text-white hover:bg-mainColorHover duration-300 text-black flex justify-between ">
                      <div className="w-max">{items.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDropDown;
