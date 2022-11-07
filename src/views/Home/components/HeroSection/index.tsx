import Header from "@components/Header";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative lg:h-[618px] bg-[#101010] flex items-end">
      <Header />

      <div className="container">
        <div className="absolute left-1/2 -translate-x-1/2 top-[95px] lg:top-[170px] w-full">
          <h1 className="text-white text-center text-[35px] leading-[40px] lg:text-[100px] lg:leading-[80px] font-black -mb-[135px] relative z-10">
            Wir entwickeln{" "}
            <p className="text-[50px] lg:text-[150px] leading-[50px] lg:leading-[150px]">
              Ideen
            </p>
          </h1>
        </div>
        <div className="-mb-10 lg:-mb-[103px] mt-[140px]">
          <Image
            width={4122}
            height={1401}
            src="/img/hero-img-desktop.jpg"
            alt="hero-img-desktop"
            className="hidden lg:block"
          />
          <Image
            width={873}
            height={1731}
            src="/img/hero-img-mobile.jpg"
            alt="hero-img-desktop"
            className="lg:hidden"
          />
        </div>

        <div className="absolute bottom-0 right-0 lg:hidden">
          <div className="container">
            <h2
              className="text-[50px] font-black text-white text-right pr-2
            "
            >
              ...und <p>noch mehr.</p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
