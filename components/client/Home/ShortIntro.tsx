"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";

const ShortIntro = () => {
  const { Config } = useData();
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  return (
    <div className="d:w-[1200px] mx-auto p:w-auto py-10">
      <h2 className="text-red-500 d:text-[30px] font-normal text-center text-[20px] uppercase">
        TỔNG ĐÀI Taxi Hoa Phượng - TAXI GIÁ RẺ Hải Phòng
      </h2>
      <div className="grid p:grid-cols-1 d:grid-cols-2 mt-5 gap-5">
        <div className=" w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/taxihaiphong24h.appspot.com/o/b33344.jpg?alt=media&token=993f0279-8a7f-407d-83ff-77cb3386b02d"
            alt="Picture of the author"
            width={500}
            height={250}
            className="w-full object-cover"
          />
        </div>
        <div className="d:text-[16px] p:text-[14px]">
          <h3 className="text-mainColorHover font-semibold text-[22px] ">
            Dịch Vụ Taxi Hoa Phượng
          </h3>
          <div className="flex flex-col gap-2">
            <p>- Gọi là có – phục vụ 24/7</p>
            <p>- Xe đời mới, sang trọng</p>
            <p>- Tài xế nhiều năm kinh nghiệm</p>
            <p>- Giá cả rẻ hơn taxi thông thường</p>
            <p>- Tài xế sẽ đến đón tận nơi sau 5-10 phút, miễn phí</p>
            <p>- Hotline hỗ trợ 24/7: {ContactData?.Hotline}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 ">
        <div
          className="py-2 px-5 bg-gradient-to-bl hover:bg-gradient-to-br duration-300 from-mainColor to-mainColorHover text-white uppercase text-[18px] font-normal cursor-pointer"
          onClick={() => HandleNavigate(`tel:${ContactData?.Hotline}`)}
        >
          Hotline: {ContactData?.Hotline}
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
