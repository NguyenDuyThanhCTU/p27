"use client";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
import Search from "@components/items/server-items/Search";
import { Modal, Popconfirm } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiCardsLight } from "react-icons/pi";
import { useStateProvider } from "@context/StateProvider";
import { useRouter } from "next/navigation";
import { deleteOne } from "@lib/api";
import CollectionHandle from "./CollectionHandle";

const Collection = ({ Data }: any) => {
  const router = useRouter();
  const [isImage, setIsImage] = useState<any>(null);
  const [isVideo, setIsVideo] = useState<any>(null);
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [isOpenHandleModel, setIsOpenHandleModel] = useState(false);
  const [Selected, setSelected] = useState<any>(null);
  const { setFormData } = useStateProvider();

  useEffect(() => {
    const ImageFiltered = Data?.filter((item: any) => item.type === "hinh-anh");
    const VideoFiltered = Data?.filter((item: any) => item.type === "video");
    if (ImageFiltered?.length > 0) {
      setIsImage(ImageFiltered);
    }
    if (VideoFiltered?.length > 0) {
      setIsVideo(VideoFiltered);
    }
  }, [Data]);

  const HandleDelete = async (id: string) => {
    deleteOne("Collections", id).then(() => {
      setIsOpenHandleModel(false);
      router.refresh();
    });
  };

  useEffect(() => {
    setFormData(Selected);
  }, [isOpenHandleModel]);

  return (
    <div className="w-full  p:px-0 d:px-10 font-light gap-10 min-h-screen  bg-white py-10">
      <div className="flex items-center gap-5 d:flex-row p:flex-col">
        <div>
          <h3 className="text-[30px] font-bold">Bộ Sưu Tập</h3>
        </div>
        <div>
          <CRUDButton
            Clicked={setIsOpenAddTypeModal}
            Label="Thêm"
            value=""
            Style="hover:bg-pink-900 bg-pink-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-5 min-h-screen">
        <div className="bg-gray-50 border rounded-lg">
          <div className="p-3">
            <div className="flex justify-between ">
              <div></div>
              <div className="flex items-center gap-4 text-[14px] mr-20">
                <div className="flex items-center gap-1">
                  <PiCardsLight />
                  <p>{isImage?.length} Collection</p>
                </div>
              </div>
            </div>
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black d:block p:hidden">
                <div
                  className={`grid grid-cols-5 border-b-2 border-black py-3`}
                >
                  {["STT", "Hình Ảnh", "Liên Kết", "Thời gian"]?.map(
                    (item: any, idx: number) => (
                      <div
                        key={idx}
                        className={`${
                          idx === 1
                            ? "col-span-2 justify-start"
                            : "justify-center col-span-1"
                        }flex  w-full`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div>
                  {isImage?.map((item: any, idx: number) => {
                    return (
                      <div key={idx}>
                        <Popconfirm
                          title="Xóa hình ảnh"
                          description="Bạn có chắc chắn muốn xóa?"
                          onConfirm={() => HandleDelete(item.id)}
                          okText="Yes"
                          okButtonProps={{
                            loading: false,
                            danger: true,
                          }}
                          cancelText="No"
                        >
                          <div className="grid grid-cols-5   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center ">
                            <div className="">{idx + 1}</div>
                            <div className="flex justify-start items-center col-span-2  ">
                              <Image
                                src={item.image}
                                width={100}
                                height={100}
                                alt="product webp"
                              />
                            </div>
                            <div className="text-start">{item.type}</div>
                            <div>{item.date}</div>
                          </div>
                        </Popconfirm>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border rounded-lg">
          <div className="p-3">
            <div className="flex justify-between ">
              <div className="flex items-center gap-4 text-[14px] ml-20">
                <div className="flex items-center gap-1">
                  <PiCardsLight />
                  <p>{isVideo?.length} Collection</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black d:block p:hidden">
                <div
                  className={`grid grid-cols-5 border-b-2 border-black py-3`}
                >
                  {["STT", "Video", "Liên Kết", "Thời gian"]?.map(
                    (item: any, idx: number) => (
                      <div
                        key={idx}
                        className={`${
                          idx === 1
                            ? "col-span-2 justify-start"
                            : "justify-center col-span-1"
                        }flex  w-full`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div>
                  {isVideo?.map((item: any, idx: number) => {
                    return (
                      <div key={idx}>
                        <Popconfirm
                          title="Xóa video"
                          description="Bạn có chắc chắn muốn xóa?"
                          onConfirm={() => HandleDelete(item.id)}
                          okText="Yes"
                          okButtonProps={{
                            loading: false,
                            danger: true,
                          }}
                          cancelText="No"
                        >
                          <div className="grid grid-cols-5   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center ">
                            <div className="">{idx + 1}</div>
                            <div className="flex justify-start items-center col-span-2  ">
                              <div className="p-2">
                                <iframe
                                  src={item.video}
                                  title="YouTube Video"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                            <div className="text-start">{item.type}</div>
                            <div>{item.date}</div>
                          </div>
                        </Popconfirm>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Modal
          footer={null}
          title="Thêm Collection"
          open={isOpenAddTypeModal}
          width={1200}
          onCancel={() => setIsOpenAddTypeModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <CollectionHandle setIsOpen={setIsOpenAddTypeModal} />
        </Modal>
      </>
      {/* <>
        <Modal
          footer={null}
          title={`Cập nhật Collection`}
          open={isOpenHandleModel}
          width={700}
          onCancel={() => setIsOpenHandleModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <>
            <div className="border rounded-xl bg-slate-100">
              <div className="p-5 grid grid-cols-2  justify-center gap-3">
                <CRUDButton
                  Clicked={() => {
                    setIsOpenUpdateModel(true);
                  }}
                  Label="Chỉnh Sửa"
                  value="mục Collection"
                  Style="hover:bg-blue-900 bg-blue-700"
                />
                <CRUDButton
                  Clicked={() => HandleDelete(Selected?.id)}
                  Label="Xóa"
                  value="mục Collection"
                  Style="hover:bg-red-900 bg-red-700"
                />
              </div>
            </div>
          </>
        </Modal>
      </>
      <>
        <Modal
          title="Chỉnh sửa"
          footer={null}
          open={isOpenUpdateModel}
          width={1000}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpenUpdateModel(false)}
        >
          <CollectionHandle
            setIsOpen={setIsOpenUpdateModel}
            setHandle={setIsOpenHandleModel}
            Type="update"
          />
        </Modal>
      </> */}
    </div>
  );
};

export default Collection;
