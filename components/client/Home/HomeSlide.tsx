"use client";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { SwiperNavButtons } from "@components/items/client/SwiperNavButtons";

function HomeSlide({ Data }: any) {
  return (
    <>
      <div className="">
        <h1>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            className="mySwiper relative"
          >
            {Data?.map((item: any, index: number) => (
              <div key={index}>
                <SwiperSlide>
                  <Link href={`/bai-viet/${item.url}`}>
                    <Image
                      src={item.image}
                      alt="banner"
                      width={12000}
                      height={500}
                      className="w-full p:h-[30vh] d:h-[70vh] object-cover"
                    />
                  </Link>
                </SwiperSlide>
              </div>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </h1>
      </div>
    </>
  );
}

export default HomeSlide;
