import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="text-[40px] absolute  z-50 w-full justify-between flex top-1/2 bottom-1/2 cursor-pointer ">
      <div
        className="ml-5 text-white hover:text-mainColor bg-mainColor"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowDropleftCircle />
      </div>
      <div
        className="mr-5 text-white hover:text-mainColor duration-300"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
};
