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
    console.log(FormData);
    if (Type === "update") {
      await updateOne("Services", FormData.id, FormData).then(() => {
        OpenCreate(false);
        router.refresh();
        OpenHandle(false);
      });
    } else {
      if (!FormData.image || !FormData.title) {
        notification.error({ message: "Vui lòng nhập đầy đủ thông tin" });
      } else {
        await insertOne("Services", FormData).then(() => {
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
          <InputForm Label="Tên dịch vụ" Type="Input" field={"title"} />

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
