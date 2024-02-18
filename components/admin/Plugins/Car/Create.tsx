"use client";
import InputForm from "@components/items/server-items/InputForm";
import { useStateProvider } from "@context/StateProvider";
import { insertOne, updateOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Create = ({ OpenCreate, Type, OpenHandle }: any) => {
  const { FormData } = useStateProvider();
  const router = useRouter();
  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    if (Type === "update") {
      await updateOne("Car", FormData.id, FormData).then(() => {
        OpenCreate(false);
        router.refresh();
        OpenHandle(false);
      });
    } else {
      if (!FormData.image || !FormData.title || !FormData.describe) {
        notification.error({ message: "Vui lòng nhập đầy đủ thông tin" });
      } else {
        await insertOne("Car", FormData).then(() => {
          OpenCreate(false);
          router.refresh();
        });
      }
    }
  };
  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      {" "}
      <div className="border border-black rounded-lg">
        <div className="p-2 flex flex-col gap-2">
          <InputForm Label="Tên dòng xe" Type="Input" field={"title"} />
          <InputForm Label="Giá mở cửa (VND)" Type="Input" field={"price"} />
          <InputForm Label="Phạm vi 30km (VND)" Type="Input" field={"price1"} />
          <InputForm
            Label="Phạm vi thứ 31km trở đi (VND)"
            Type="Input"
            field={"price2"}
          />
          <InputForm Label="mô tả" Type="Editor" field={"describe"} />
          <InputForm Label="Ảnh đại diện" Type="Upload" field={"image"} />
        </div>
      </div>
      <div className="flex w-full justify-end mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white py-2 px-5 rounded-md"
          type="submit"
        >
          {Type === "update" ? "Thêm" : "Cập nhật"}
        </button>
      </div>
    </form>
  );
};

export default Create;
