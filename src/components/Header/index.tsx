import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full py-5 lg:pt-[50px] bg-white lg:bg-transparent">
      <div className="container">
        <div className="flex justify-between items-center">
          {/** Logo --Start-- */}
          <div>
            <Link href={"/"}>
              <div className="max-w-[108px] text-black lg:text-white">
                <Logo />
              </div>
            </Link>
          </div>
          {/** Logo --End-- */}

          {/** Nav Links --Start-- */}
          <div className="hidden lg:block">
            <Menus />
          </div>
          {/** Nav Links --End-- */}

          {/** Mobile Menu --Start-- */}
          <MobileMenu />
          {/** Mobile Menu --End-- */}
        </div>
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const overlayClickHandler = (e: any) => {
    if (e.target.id === "mobileMenuOverlay") {
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <div className="lg:hidden flex items-center">
      <button onClick={() => setIsOpenMobileMenu(true)}>
        <FiMenu size={22} />
      </button>

      <div
        onClick={overlayClickHandler}
        id="mobileMenuOverlay"
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-[9999999] duration-100 ${
          isOpenMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        <div
          className={`w-[75%] bg-white h-full duration-300 ${
            isOpenMobileMenu ? "translate-x-0 delay-200" : "-translate-x-full"
          }`}
        >
          <div className="bg-black px-8 py-3 pt-5 text-white mb-4">
            <div className="max-w-[118px]">
              <Logo />
            </div>
          </div>
          <Menus onClick={() => setIsOpenMobileMenu(false)} />
        </div>
      </div>
    </div>
  );
};

const menus = [
  {
    text: "FAQ",
    link: "#faq",
  },
  {
    text: "Kontakt",
    link: "#",
  },
];
const Menus = ({ onClick }: any) => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-[70px] lg:text-white">
        {menus.map(({ link, text }, i) => (
          <li
            key={i}
            className="border-t border-gray-100 last:border-b lg:border-none"
          >
            <a
              onClick={onClick}
              className="px-8 py-3 block lg:p-0 hover:text-primary"
              href={link}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 109 24"
    >
      <text
        id="_36visuals"
        data-name="36visuals"
        transform="translate(0 18)"
        fill="currentColor"
        fontSize="24"
        fontFamily="Helvetica-Bold, Helvetica"
        fontWeight="700"
      >
        <tspan x="0" y="0">
          36visuals
        </tspan>
      </text>
    </svg>
  );
};
