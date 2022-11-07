import SectionTitle from "@components/SectionTitle";
import dynamic from "next/dynamic";
import React from "react";
const ServicesSlider = dynamic(() => import("../ServicesSlider"), {
  ssr: false,
});

const ServicesSection = () => {
  return (
    <section
      style={{
        backgroundPosition: "0 -48px",
      }}
      className="lg:bg-[url('/img/wave-bg.png')] bg-no-repeat bg-cover mt-[90px] lg:mt-[215px]"
    >
      <div className="container-md">
        <div className="lg:pb-[70px] bg-gradient-to-b to-transparent from-white">
          <SectionTitle title="LEISTUNGEN" />

          <div className="flex flex-wrap justify-between items-center mt-2 lg:mt-7">
            <h1 className="text-[30px] lg:text-[50px] font-black text-black flex justify-between items-center gap-8">
              Design & Entwicklung
              <Icon />
            </h1>
            <p className="max-w-[470px] lg:shrink-0 text-[13px] lg:text-base text-[#707070] mt-[22px] lg:mt-0 ">
              Wir beraten unsere Kunden mit Konzeptionierung, Design und
              Entwicklung individueller mobiler und Web-Applikationen für
              komplexe Use Cases.
            </p>
          </div>
        </div>

        <ServicesSlider />

        <div className="flex justify-center lg:mt-[135px]">
          <button className="btn_lg">
            <span className="hidden lg:inline">SENDE UNS EINE NACHRICHT</span>
            <span className="lg:hidden">KONTAKT</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

const Icon = () => {
  return (
    <div className="max-w-[44px] lg:hidden shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full"
        viewBox="0 0 38.348 42.818"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_53"
              data-name="Rectangle 53"
              width="38.348"
              height="42.818"
              fill="#f4416b"
            />
          </clipPath>
        </defs>
        <g id="Group_84" data-name="Group 84" clipPath="url(#clip-path)">
          <path
            id="Path_341"
            data-name="Path 341"
            d="M38.322,28.95c0,3.259.016,6.518-.011,9.777a12.986,12.986,0,0,1-.246,2.507c-.361,1.745-1.318,2.048-2.592.822-.71-.682-1.319-1.47-1.979-2.2a8.64,8.64,0,0,0-.761-.789,2.008,2.008,0,0,0-3.179.137c-.662.68-1.227,1.454-1.853,2.17-1.709,1.953-3.268,1.9-4.878-.153a19.19,19.19,0,0,0-1.6-1.947,2.577,2.577,0,0,0-4.119.113c-.636.7-1.119,1.536-1.711,2.278-1.162,1.459-2.406,1.552-3.708.205-.76-.785-1.363-1.72-2.084-2.546-1.026-1.175-2.056-1.344-3.264-.371-1.048.844-1.9,1.93-2.919,2.81-.517.446-1.407,1.083-1.8.906a3.06,3.06,0,0,1-1.288-1.82,9.955,9.955,0,0,1-.306-2.826C0,31.794-.023,25.568.033,19.343.093,12.761,2.632,7.3,8.117,3.588c6.412-4.339,13.306-4.77,20.178-1.145,6.684,3.525,9.869,9.345,10.021,16.84.065,3.221.011,6.445.011,9.667ZM17.351,19.56A2.352,2.352,0,1,0,14.965,17.2a2.378,2.378,0,0,0,2.386,2.362m15.848,0a2.348,2.348,0,0,0,2.365-2.367A2.362,2.362,0,1,0,33.2,19.559"
            transform="translate(0 0.001)"
            fill="#f4416b"
          />
        </g>
      </svg>
    </div>
  );
};
