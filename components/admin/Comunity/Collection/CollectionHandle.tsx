"use client";
import InputForm from "@components/items/server-items/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { insertOne, updateOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CollectionHandle = ({ setIsOpen }: any) => {
  const { Products, Posts } = useData();
  const { FormData, setFormData } = useStateProvider();
  const RadioItem = [
    {
      label: "Hình ảnh",
      value: "hinh-anh",
    },
    {
      label: "Video",
      value: "video",
    },
  ];
  const router = useRouter();
  const HandleSubmit = async (Type: string) => {
    console.log(FormData);
    if (Type === "hinh-anh") {
      if (!FormData?.image) {
        notification.error({
          message: "Vui lòng chọn hình ảnh",
        });
      } else {
        await insertOne("Collections", FormData).then(() => {
          router.refresh();
          setIsOpen(false);
        });
      }
    } else {
      if (!FormData?.video) {
        notification.error({
          message: "Vui lòng nhập liên kết video",
        });
      } else {
        await insertOne("Collections", FormData).then(() => {
          router.refresh();
          setIsOpen(false);
        });
      }
    }
  };

  const getVideoId = (url: string): string | null => {
    const match = url?.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|embed\/?\??(?:\w*=\w*)*)?([\w-]{11})/
    );
    return match ? match[1] : null;
  };

  useEffect(() => {
    function checkUrl() {
      const videoId = getVideoId(FormData?.video);
      if (!videoId) {
        return;
      } else {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        if (embedUrl) {
          setFormData({ ...FormData, video: embedUrl });
        }
      }
    }
    checkUrl();
  }, [FormData?.video]);

  return (
    <div>
      <form className="flex flex-col gap-3 overflow-y-auto h-[60vh]">
        <InputForm
          Label="Chon đối tượng liên kết"
          Type="Radio"
          field="type"
          Option={RadioItem}
        />
        {FormData?.type === "hinh-anh" ? (
          <>
            <InputForm Label="Chọn hình ảnh" Type="Upload" field="image" />
          </>
        ) : (
          FormData?.type === "video" && (
            <>
              <InputForm
                Label="Liên kết video youtube"
                Type="Input"
                field="video"
              />
              <div className=" flex justify-center mt-2">
                <div className="p-2">
                  <iframe
                    src={FormData?.video}
                    title="YouTube Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>{" "}
            </>
          )
        )}
      </form>
      <>
        {" "}
        <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
          <div
            className={`${
              FormData?.type === undefined
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-red-700 duration-300"
            } bg-red-500  text-white p-2 rounded-md`}
            onClick={() => HandleSubmit(FormData?.type)}
          >
            Thêm
          </div>
        </div>
      </>
    </div>
  );
};

export default CollectionHandle;
