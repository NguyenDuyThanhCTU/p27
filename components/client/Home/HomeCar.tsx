"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";

const HomeCar = ({ Data }: any) => {
  const { Config } = useData();
  const { HandleNavigate } = useStateProvider();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  return (
    <div className="py-5">
      <h2 className=" text-[30px] font-normal text-center text-mainColorHover uppercase">
        dịch vụ xe tiện chuyến{" "}
      </h2>
      <div className="mt-3 grid p:grid-cols-1 d:grid-cols-3 gap-5 d:w-[1200px] d:mx-auto p:w-auto p:mx-2">
        {Data?.map((item: any, index: number) => (
          <div key={index}>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={500}
              height={250}
              className="w-full object-cover h-[350px] "
            />
            <div className="text-center font-normal mt-2">{item.title}</div>
            <div className="flex justify-center mt-5 ">
              <div
                className="py-2 px-5 bg-gradient-to-bl hover:bg-gradient-to-br duration-300 from-mainColor to-mainColorHover text-white  text-[13px] font-normal cursor-pointer rounded-lg "
                onClick={() => HandleNavigate(`tel:${ContactData?.Hotline}`)}
              >
                Hotline: {ContactData?.Hotline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCar;
