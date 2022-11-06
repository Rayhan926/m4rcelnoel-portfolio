import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import { services } from "@config/constants";

const ServicesSlider = () => {
  return (
    <div>
      <Swiper loop spaceBetween={5} slidesPerView={6}>
        {services.map((service, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-square rounded-full bg-white/90 text-2xl px-6 text-center border-2 border-[#7B27FE]/60 grid place-items-center">
              {service.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
