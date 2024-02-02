"use client";
import { ProductTypeItems } from "@assets/item";
import { useStateProvider } from "@context/StateProvider";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import slugify from "slugify";

const HeaderDropDown = ({ ServiceItem }: any) => {
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
            {ProductTypeItems?.map((items: any, idx: number) => {
              const DropDownValue = ServiceItem?.filter(
                (item: any) => item.level0 === items.value
              );

              return (
                <div className=" group/level1    relative font-light text-white    border-b">
                  <div
                    onClick={() => HandleNavigate(`/san-pham/${items.value}`)}
                    key={idx}
                    className="  border-b hover:bg-mainColor duration-300"
                  >
                    <div className="py-2 px-4 cursor-pointer w-full hover:text-white hover:bg-mainColorHover duration-300 text-black flex justify-between ">
                      <div className="w-max">{items.label}</div>
                      {DropDownValue.length > 0 && (
                        <>
                          <div className="rotate-0 duration-300 group-hover/main:-rotate-90">
                            <FaAngleDown />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {DropDownValue.length > 0 && (
                    <div className="hidden group-hover/level1:block absolute top-0 left-full mt-0 w-max bg-gray-100 text-mainColorHover   shadow-lg border">
                      <div className="">
                        {DropDownValue.map((item: any, idx: number) => {
                          const url = slugify(item.level1, {
                            lower: true,
                            locale: "vi",
                          });
                          return (
                            <div key={idx}>
                              <div className=" group/lv2 cursor-pointer   relative font-light     border-b">
                                <div
                                  onClick={() =>
                                    HandleNavigate(
                                      `/san-pham/${items.value}?type=${url}`
                                    )
                                  }
                                >
                                  <div className="hover:bg-mainColor py-2 px-4 duration-300 flex justify-between items-center  w-full gap-3">
                                    <p>{item.level1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
