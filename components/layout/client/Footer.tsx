"use client";
import { useData } from "@context/DataProviders";
import Image from "next/image";
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
          <h2 className="text-[22px] uppercase font-normal pb-3 border-b-2">
            Thông tin liên hệ
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            <p>Địa chỉ: {ContactData?.CompanyAddress}</p>
            <p>Email: {ContactData?.Email}</p>
            <p>Số điện thoại: {ContactData?.Hotline}</p>
            <div className="font-normal">
              <h3>QUÝ KHÁCH VUI LÒNG ĐẶT XE TRỰC TIẾP THEO SỐ</h3>
              <p>
                Hotline: <strong>{ContactData?.Hotline}</strong>
              </p>
            </div>
            <div>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/taxihaiphong24h.appspot.com/o/logo-da-thong-bao-voi-bo-cong-thuong-265x100-212x80.png?alt=media&token=00abc049-b08f-4964-9d83-f9e3e0fc532b"
                alt="logo"
                width={212}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[22px] pb-3 border-b-2">
            Dịch Vụ chính
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]"></div>
        </div>
        <div>
          <h2 className="text-[22px] uppercase font-normal pb-3 border-b-2">
            Ghé thăm chúng tôi
          </h2>
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
