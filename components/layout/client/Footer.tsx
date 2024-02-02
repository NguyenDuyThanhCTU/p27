"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

const Footer = ({ Category }: any) => {
  const { Config } = useData();
  const ContactData = Config?.find((items: any) => items.id === "contact");
  const SocialMedia = Config?.find((items: any) => items.id === "SocialMedia");
  return (
    <div className="bg-mainColorHover">
      <div className="d:w-[1200px] d:mx-auto  p:mx-2 p:w-auto gap-10 grid p:grid-cols-1 d:grid-cols-3 py-10 text-white d:text-[16px] p:text-[15px]">
        <div>
          <h2 className="text-[22px] uppercase font-normal ">
            Cơ Khí Phương Tùng
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            <p>Địa chỉ: {ContactData?.CompanyAddress}</p>
            <p>Số điện thoại: {ContactData?.Hotline}</p>
            <p>Email: {ContactData?.Email}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Điều khoản sử dụng
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            {Category?.filter((item: any) => item.title === "Chính sách")?.map(
              (item: any, idx: number) => {
                const url = slugify(item.level1, {
                  lower: true,
                  locale: "vi",
                });

                return (
                  <Link
                    href={`/chinh-sach/${url}`}
                    key={idx}
                    className="hover:underline hover:text-blue-500"
                  >
                    <div className="hover:text-mainblue cursor-pointer">
                      {item.level1}
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
        <div>
          <h2 className="text-[22px] uppercase font-normal ">Fanpage</h2>
          <div className="mt-3">
            <iframe
              src={SocialMedia?.fanpage}
              width="340"
              className="outline-none"
              height="300"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
