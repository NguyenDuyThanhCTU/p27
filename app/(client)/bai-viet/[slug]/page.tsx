import PostsRecommend from "@components/client/Posts/PostsRecommend";
import { find, findById } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";

interface PostsDetailProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export async function generateMetadata({
  searchParams,
}: PostsDetailProps): Promise<Metadata> {
  const searchValue = searchParams.poid;

  const posts = await find("Posts");
  const Posts = posts.find((item: any) => item.id == searchValue);
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: Posts.title,
    description: Posts.description,
    keywords: Posts.keywords,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}
const PostsDetailPage = async ({ searchParams }: PostsDetailProps) => {
  const searchValue = searchParams.poid;
  const Data = await findById("Posts", searchValue);
  const markup = { __html: Data?.content };
  return (
    <div className="py-5">
      <div className="border-[1px] border-gray-300 rounded-lg bg-white d:w-[1200px] mx-auto p:w-auto ">
        <div className="p-4">
          <h2 className="font-normal text-[20px] text-mainColorHover">
            {Data?.title}
          </h2>
          <div className="flex gap-2 items-center text-[14px]">
            <CiClock2 />
            <p> {Data.date}</p>
          </div>
          <div className="mt-3">
            <Image
              src={Data?.image}
              alt="Picture of the author"
              width={1200}
              height={400}
            />
          </div>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={markup ? markup : { __html: "" }}
          ></div>
          <PostsRecommend />
        </div>
      </div>
    </div>
  );
};

export default PostsDetailPage;
