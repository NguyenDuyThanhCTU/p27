"use client";
import React, { useState } from "react";
import Input from "../Contact/Input";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import { useData } from "@context/DataProviders";

const RegisterForm = ({ Data }: any) => {
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [StartPoint, setStartPoint] = useState("");
  const [EndPoint, setEndPoint] = useState("");
  const [Time, setTime] = useState("");
  const [Type, setType] = useState("");
  const [Content, setContent] = useState("");
  const { setIsLoading } = useStateProvider();
  const { Config } = useData();
  const ContactData = Config?.find((item: any) => item.id === "contact");

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setStartPoint("");
    setEndPoint("");
    setTime("");
    setType("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(3000);
    if (
      !name ||
      !Phone ||
      !StartPoint ||
      !EndPoint ||
      !Time ||
      !Type ||
      !Content
    ) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
      setIsLoading(false);
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "SĐT:", value: Phone },
        { title: "Điểm đón:", value: StartPoint },
        { title: "Điểm đến:", value: EndPoint },
        { title: "Thời gian:", value: Time },
        { title: "Loại xe:", value: Type },
        { title: "Nội dung lời nhắn:", value: Content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });
      console.log(data);

      const response = await fetch(
        `${
          ContactData
            ? `https://formsubmit.co/ajax/${ContactData?.Email}`
            : `https://formsubmit.co/ajax/thanhnd2512@gmail.com`
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        HandleDiscard();
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="py-5 text-[30px]  font-semibold text-mainColorHover">
          ĐĂNG KÝ ĐẶT XE NGAY!
        </h2>
        <div className="flex flex-col gap-2">
          <Input Input={true} text="Họ Tên*" Value={name} setValue={setName} />
          <Input
            Input={true}
            text="Số điện thoại*"
            Value={Phone}
            setValue={setPhone}
          />
          <Input
            Input={true}
            text="Điểm đón*"
            Value={StartPoint}
            setValue={setStartPoint}
          />
          <Input
            Input={true}
            text="Điểm đến*"
            Value={EndPoint}
            setValue={setEndPoint}
          />
          <div>
            <h3 className="font-bold">Thời gian</h3>
            <div className="py-2 bg-white px-5 mt-2">
              <input
                className="outline-none w-full"
                type="date"
                value={Time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold">Loại xe*</h3>
            <div className="py-2 bg-white px-5 mt-2">
              <select
                className="outline-none  bg-white w-full"
                value={Type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Chọn loại xe</option>
                {Data?.map((item: any, index: number) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Nội dung lời nhắn</label>
            <textarea
              className="p-2 border border-mainorange outline-none"
              value={Content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainColor hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2 px-6"
              onClick={(e) => HandleSubmit(e)}
            >
              Đăng ký ngay
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
