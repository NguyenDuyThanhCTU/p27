"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const PriceList = ({ Data }: any) => {
  const { Config, Posts } = useData();
  const PriceListData = Posts?.find((item: any) => item.id === "pricelist");
  console.log(PriceListData);
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  const markup = { __html: PriceListData?.content };
  return (
    <div className="py-10 ">
      <div className="p:w-auto d:w-[1200px] p:mx-2 d:mx-auto grid grid-cols-1  gap-5 items-center">
        {/* <div>
          <div className="border grid grid-cols-2">
            <div className="py-2 text-center border-r text-purple-600 font-semibold">
              BẢNG GIÁ MỚI
            </div>
            <div className=""></div>
          </div>
          <div className="grid grid-cols-2 text-center border-b border-x d:text-[16px] p:text-[12px]">
            <div className="grid grid-cols-2 border-r ">
              <div className=" border-r h-full py-2 px-2">Loại xe </div>
              <div className=" border-r h-full py-2 px-2">Giá mở cửa (VND)</div>
            </div>
            <div className="grid grid-cols-2">
              <div className=" border-r h-full py-2 px-2">
                Phạm vi 30km (VND)
              </div>
              <div className=" border-r h-full py-2 px-2">
                Phạm vi thứ 31km trở đi (VND)
              </div>
            </div>
          </div>
          {Data?.map((item: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-2 text-center border-b border-x text-red-500 font-light d:text-[16px] p:text-[12px]"
            >
              <div className="grid grid-cols-2 border-r ">
                <div className=" border-r h-full py-2 px-2">{item.title} </div>
                <div className=" border-r h-full py-2 px-2">{item.price}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className=" border-r h-full py-2 px-2">{item.price1}</div>
                <div className=" border-r h-full py-2 px-2">{item.price2}</div>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div>
          <div className="border grid grid-cols-2">
            <div className="py-2 text-center border-r text-purple-600 font-semibold">
              BẢNG GIÁ MỚI
            </div>
            <div className=""></div>
          </div>
          <div className="grid grid-cols-2 text-center border-b border-x d:text-[16px] p:text-[12px]">
            <div className="grid grid-cols-2 border-r ">
              <div className=" border-r h-full py-2 px-2">
                Hải Phòng-Hà Nội 1 chiều{" "}
              </div>
              <div className=" border-r h-full py-2 px-2">
                Hải Phòng -Bắc Ninh 1 chiều
              </div>
            </div>
            <div className="py-2">Hải Phòng -Bắc Giang 1 chiều</div>
          </div>
          <div className="grid grid-cols-2 text-center border-b border-x d:text-[16px] p:text-[12px] font-normal">
            <div className="grid grid-cols-2 border-r ">
              <div className=" border-r h-full py-2 px-2 text-red-500">
                500 000 <sup>VNĐ</sup>
              </div>
              <div className=" border-r h-full py-2 px-2 text-red-500">
                500 000 <sup>VNĐ</sup>
              </div>
            </div>
            <div className=" border-r h-full  px-2 text-red-500 py-2">
              500 000 <sup>VNĐ</sup>
            </div>
          </div>
        </div> */}
        <div className="font-light">
          <p>
            “Sứ mệnh của chúng tôi là giải quyết đột phá các vấn đề về giá cả,
            chất lượng dịch vụ và sự tiện ích cho khách hàng. Giúp khách hàng
            tiết kiệm 20-50% giá trị chuyến đi so với thông thường.”
          </p>
          <p>
            Dịch vụ xe tiện chuyến Quảng Ninh - Hải Phòng - Hà Nội - Bắc Ninh -
            Bắc Giang –{" "}
            <strong
              className="cursor-pointer text-mainColorHover"
              onClick={() => {
                HandleNavigate(`tel:${ContactData?.Hotline}`);
              }}
            >
              {ContactData?.Hotline}
            </strong>
          </p>
        </div>
        <div
          className="ck-content"
          dangerouslySetInnerHTML={PriceListData ? markup : { __html: "" }}
        ></div>
      </div>
    </div>
  );
};

export default PriceList;
