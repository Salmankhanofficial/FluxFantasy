import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export interface Props {
  onClick?: () => void;
}
const Header = ({ onClick }: Props) => {
  return (
    <div
      className={
        "w-full  shadow-lg z-50   bg-[#06021E] sticky top-0  py-2 px-1 md:px-4 flex justify-end items-center  "
      }
    >
   
      <div className="bg-black text-3xl  text-white sm:hidden" onClick={onClick}>
        {" "}
        <GiHamburgerMenu />{" "}
      </div>
      <div className="block sm:hidden">
        <Image
          width={250}
          height={250}
          src="/images/sidebar/logo.png"
          alt="image"
        />
      </div>
      <div className="w-[728px] h-[90px] bg-gray-500 flex justify-center items-center">
        <p className="text-gray-600 ">728 X 90 AD</p>
      </div>
    </div>
  );
};

export default Header;
