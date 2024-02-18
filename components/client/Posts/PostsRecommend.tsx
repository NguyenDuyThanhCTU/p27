"use client";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";
import { Comments, FacebookProvider } from "react-facebook";

const PostsRecommend = ({ Type }: any) => {
  const { HandleNavigate } = useStateProvider();
  const { Posts } = useData();
  const Data = Posts?.filter((item: any) => item.Type === Type);
  return (
    <div>
      <div className="w-full">
        <FacebookProvider appId="781034490143336">
          {" "}
          <Comments href="https://cokhiphuongtung.com" width={1100} />{" "}
        </FacebookProvider>
      </div>
      <div className="mt-4">
        <h2>Bài viết liên quan</h2>
        <div className="grid p:grid-cols-1 d:grid-cols-3 mt-2 gap-4">
          {Data?.slice(0, 3).map((items: any, idx: number) => (
            <div
              onClick={() => HandleNavigate(`bai-viet/${items.url}`)}
              key={idx}
              className="flex flex-col  gap-2 items-center"
            >
              <div className="w-[200px] h-[200px]">
                <Image
                  src={items.image}
                  alt={Type + `-` + idx + `-` + `image`}
                  width={200}
                  height={200}
                  className="h-full object-cover w-full"
                />
              </div>
              <div className="text-[14px] text-center truncate1 font-light hover:text-mainColorHover ">
                {items.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsRecommend;
