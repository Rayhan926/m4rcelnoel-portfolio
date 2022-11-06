import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101010] pt-[120px] pb-[100px] text-white mt-10">
      <div className="container-md">
        <div className="flex justify-between">
          <h4 className="text-[85px] font-black leading-[70px]">
            Interessiert?
          </h4>

          <div className="flex flex-col items-end">
            <button className="btn_lg">SENDE UNS EINE NACHRICHT</button>

            <ul className="text-right text-[#B1B1B1] mt-20 space-y-3">
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
