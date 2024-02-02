import InputForm from "@components/items/server-items/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { insertOne, updateOne } from "@lib/api";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const SlideHandle = ({ setIsOpen, setHandle, Type }: any) => {
  const { Products, Posts } = useData();
  const { FormData } = useStateProvider();
  const RadioItem = [
    {
      label: "Sản phẩm",
      value: "Sản phẩm",
    },
    {
      label: "Bài viết",
      value: "Bài viết",
    },
  ];
  const router = useRouter();
  const HandleSubmit = async () => {
    if (!FormData?.type || !FormData?.url || !FormData?.image) {
      notification.error({
        message: "Vui lòng điền đầy đủ thông tin",
      });
    } else {
      if (Type === "update") {
        await updateOne("Slides", FormData.id, FormData).then(() => {
          router.refresh();
          setIsOpen(false);
          setHandle(false);
        });
      } else {
        await insertOne("Slides", FormData).then(() => {
          router.refresh();
          setIsOpen(false);
          setHandle(false);
        });
      }
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-3 overflow-y-auto h-[60vh]">
        <InputForm
          Label="Chon đối tượng liên kết"
          Type="Radio"
          field="type"
          Option={RadioItem}
        />
        {FormData?.type === "Bài viết" ? (
          <>
            {" "}
            <InputForm
              Label="Bài viết liên kết"
              Type="Select"
              field="url"
              Option={Posts}
            />
            <InputForm Label="Slide giới thiệu" Type="Upload" field="image" />
          </>
        ) : (
          FormData?.type === "Sản phẩm" && (
            <>
              <InputForm
                Label="Sản phẩm liên kết"
                Type="Select"
                field="url"
                Option={Products}
              />
              <InputForm Label="Slide giới thiệu" Type="Upload" field="image" />
            </>
          )
        )}
      </form>
      <>
        {" "}
        <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
          <div
            className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white p-2 rounded-md"
            onClick={() => HandleSubmit()}
          >
            {Type === "update" ? "Cập nhật" : "Thêm mới"}
          </div>
        </div>
      </>
    </div>
  );
};

export default SlideHandle;
