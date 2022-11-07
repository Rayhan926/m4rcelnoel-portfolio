import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101010] pt-12 lg:pt-[120px] pb-[60px] lg:pb-[100px] text-white mt-10">
      <div className="container-md">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h4 className="text-[30px] lg:text-[85px] font-black leading-[70px]">
            Interessiert?
          </h4>

          <div className="flex flex-row justify-between md:flex-col md:items-end w-full">
            <div>
              <button className="btn_lg px-5 lg:px-10 text-[11px] lg:text-base">
                SENDE UNS EINE NACHRICHT
              </button>
            </div>

            <ul className="text-right text-[12px] lg:text-base text-[#B1B1B1] md:mt-20 space-y-2 md:space-y-3">
              <li className="cursor-pointer hover:text-white">Datenschutz</li>
              <li className="cursor-pointer hover:text-white">Impressum</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
