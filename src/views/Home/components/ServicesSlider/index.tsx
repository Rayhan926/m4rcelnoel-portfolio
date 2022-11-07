import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import { services } from "@config/constants";

const ServicesSlider = () => {
  return (
    <div className="mt-6 mb-9 lg:m-0">
      <Swiper
        loop
        spaceBetween={8}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          280: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {services.map((service, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-square rounded-full bg-white/90 text-sm lg:text-2xl px-1 lg:px-6 text-center border-2 border-[#7B27FE]/60 grid place-items-center">
              {service.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
