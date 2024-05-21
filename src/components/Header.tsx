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
        "w-full  shadow-lg   bg-[#100D1C]  py-2 px-1 md:px-4 flex justify-end items-center  "
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
      <div className="w-[728px] h-[90px] bg-[#1A1A1A] flex justify-center items-center">
        <p className="text-[#313030] font-semibold "  style={{ fontFamily: 'Kallisto'   }}>728 X 90 AD</p>
      </div>
    </div>
  );
};

export default Header;
