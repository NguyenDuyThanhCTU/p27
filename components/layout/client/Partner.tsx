"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Partner = ({ Data }: any) => {
  return (
    <div className="py-5 border-t border-mainColorHover">
      <div className="d:w-[1200px] d:mx-auto p:mx-2 p:w-auto ">
        <h2 className="uppercase text-[25px] text-center font-bold text-mainColorHover">
          Đối tác
        </h2>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={6}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            {Data?.map((item: any, idx: number) => (
              <SwiperSlide key={idx} className="pb-10 pt-5">
                <Link href={item.url ? item.url : "/"}>
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;
