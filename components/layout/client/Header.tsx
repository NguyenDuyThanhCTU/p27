"use client";
import { HeaderItems, ProductTypeItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaAngleDown,
  FaFacebookSquare,
  FaGooglePlusG,
  FaSearch,
} from "react-icons/fa";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./Items/HeaderDropDown";
import { useStateProvider } from "@context/StateProvider";
import slugify from "slugify";

const Header = ({ Car, Services }: any) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [open, setOpen] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenType, setOpenType] = useState(0);
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);
  const { Config } = useData();
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((items: any) => items.id === "contact");
  const SloganData = Config?.find((items: any) => items.id === "SEOconfig");

  const router = useRouter();

  return (
    <div className="fixed top-0 w-full">
      <div className="d:block p:hidden">
        <div className="bg-gray-100">
          <div className="w-[1200px] mx-auto flex justify-between h-[100px] items-center ">
            <div className="cursor-pointer" onClick={() => HandleNavigate("/")}>
              <Image
                src={ContactData?.LogoWebsite}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <Link href={`/`}>
              <h2 className="text-mainColorHover text-[28px] uppercase font-bold text-center">
                {SloganData?.Title}
              </h2>

              <p className=" text-[20px] font-normal  text-center">
                {SloganData?.Description}
              </p>
            </Link>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => HandleNavigate(`tel:${ContactData?.Hotline}`)}
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/taxihaiphong24h.appspot.com/o/%C4%91t.png?alt=media&token=9dd5900b-c173-4a20-b55b-b82f6e130229"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-mainColorHover">
            <div className="w-[1200px] mx-auto flex start">
              {HeaderItems.map((item, index) => {
                return (
                  <div key={index} className="relative group/main   ">
                    <div
                      onClick={() =>
                        HandleNavigate(
                          `/${
                            item.label === "Sản phẩm"
                              ? "san-pham/cua-cong"
                              : item.value
                          }`
                        )
                      }
                      className="text-white flex items-center gap-2 text-[14px] uppercase font-bold py-3 px-5  cursor-pointer hover:bg-mainColor duration-300"
                    >
                      <div className="w-full">{item.label}</div>
                      {(item.value === "cho-thue-taxi" ||
                        item.value === "dich-vu-taxi") && (
                        <>
                          <div className="rotate-0 duration-300 group-hover/main:-rotate-90">
                            <FaAngleDown />
                          </div>
                        </>
                      )}
                    </div>
                    {item.value === "cho-thue-taxi" ? (
                      <HeaderDropDown ServiceItem={Car} Type="car" />
                    ) : (
                      item.value === "dich-vu-taxi" && (
                        <HeaderDropDown ServiceItem={Services} />
                      )
                    )}
                  </div>
                );
              })}
              <div className="bg-mainColorHover justify-center items-center flex ml-2">
                <div className="bg-white py-2">
                  <div className="flex px-3">
                    <input
                      type="text"
                      className="outline-none"
                      placeholder="Tìm kiếm ..."
                    />
                    <div className="text-[20px] cursor-pointer pl-2 border-l-2 border-mainColorHover">
                      <IoIosSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block bg-blue-500 ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-gradient-to-bl from-mainColor via-mainColorHover to-mainNormalBlue  text-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="text-[40px] p-2" onClick={() => setOpen(true)}>
              <IoIosMenu />
            </div>

            <div className="h-[84px]">
              <Image
                src={ContactData?.LogoWebsite}
                width={200}
                height={200}
                alt="Logo"
                className="w-[175px] h-full p-2"
              />
            </div>
            <div
              className="text-[22px] p-2"
              onClick={() => setOpenSearchMB(!openSearchMB)}
            >
              <FaSearch />
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainColorHover flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainColorHover"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-mainColorHover py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div
                onClick={() => {
                  HandleNavigate("/");
                  setOpen(false);
                }}
                className="p-5"
              >
                <Image
                  src={ContactData?.LogoWebsite}
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>

              <div>
                <div className="flex flex-col  ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <div key={idx}>
                      <div
                        onClick={() => {
                          item.value !== "cho-thue-taxi" &&
                            item.value !== "dich-vu-taxi" &&
                            HandleNavigate(item.value);
                          item.value !== "cho-thue-taxi" &&
                            item.value !== "dich-vu-taxi" &&
                            setOpen(false);

                          (item.value !== "cho-thue-taxi" ||
                            item.value !== "dich-vu-taxi") &&
                            setOpenType(idx);
                        }}
                        className="cursor-pointer border-b hover:text-red-500 duration-300 py-2 flex justify-between items-center"
                      >
                        <p>{item.label}</p>
                        {(item.value === "cho-thue-taxi" ||
                          item.value === "dich-vu-taxi") && <FaAngleDown />}
                      </div>
                      {item.value === "cho-thue-taxi" && (
                        <div
                          className={`${
                            OpenType === 3 ? "h-[120px]" : "h-0"
                          } overflow-hidden duration-500 ml-4`}
                        >
                          {Car?.map((item: any, idx: number) => {
                            const url = slugify(item.title, {
                              lower: true,
                              locale: "vi",
                            });
                            return (
                              <div key={idx}>
                                <div className="w-full justify-between py-2 border-t items-center cursor-pointer flex">
                                  <div
                                    onClick={() => {
                                      HandleNavigate(`/thue-xe/${url}`);
                                      setOpen(false);
                                    }}
                                    className={`${
                                      openTypeMB === idx + 1 &&
                                      "text-orange-500  "
                                    }`}
                                  >
                                    {item.title}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {item.value === "dich-vu-taxi" && (
                        <div
                          className={`${
                            OpenType === 2 ? "h-[420px]" : "h-0"
                          } overflow-hidden duration-500 ml-4`}
                        >
                          {Services?.map((item: any, idx: number) => {
                            const url = slugify(item.title, {
                              lower: true,
                              locale: "vi",
                            });
                            return (
                              <div key={idx}>
                                <div className="w-full justify-between py-2 border-t items-center cursor-pointer flex">
                                  <div
                                    onClick={() => {
                                      HandleNavigate(`/dich-vu/${url}`);
                                      setOpen(false);
                                    }}
                                    className={`${
                                      openTypeMB === idx + 1 &&
                                      "text-orange-500  "
                                    }`}
                                  >
                                    {item.title}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full border-b border-mainblue pb-2 mt-10"></div>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Header;
