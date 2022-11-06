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
      className="bg-[url('/img/wave-bg.png')] bg-no-repeat bg-cover mt-[215px]"
    >
      <div className="container-md">
        <div className="pb-[70px] bg-gradient-to-b to-transparent from-white">
          <SectionTitle title="LEISTUNGEN" />

          <div className="flex justify-between items-center mt-7">
            <h1 className="text-[50px] font-black text-black">
              Design & Entwicklung
            </h1>
            <p className="max-w-[470px] shrink-0 text-base text-[#707070] ">
              Wir beraten unsere Kunden mit Konzeptionierung, Design und
              Entwicklung individueller mobiler und Web-Applikationen für
              komplexe Use Cases.
            </p>
          </div>
        </div>

        <ServicesSlider />

        <div className="flex justify-center mt-[135px]">
          <button className="btn_lg">SENDE UNS EINE NACHRICHT</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
