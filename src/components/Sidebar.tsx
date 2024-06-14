import Image from "next/image";
import Link from "next/link";
import { RiAccountCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

export interface props {
  mainClassName?: string;
  notificationLength: number;
  onClick?: () => void;
}
const Sidebar = ({ mainClassName, notificationLength, onClick }: props) => {
  const router = useRouter();

  const data = [
    { title: "create an OC" },
    { title: "my OC library" },
    { title: "character journal" },
    { title: "OC creation Guide" },
    { title: "the universe" },
    { title: "mechanics" },
    { title: "join a game!" },
    { title: "Discord" },
  ];
  return (
    <div
      className={` sm:pr-2   flex flex-col  relative bg-black ${mainClassName}`}
    >
      <div className="bg-[#100D1C] h-24 w-[260px] z-50 absolute -top-20   "></div>

      <div className="bg-black h-24 w-36 rotate-[55deg] absolute top-8 -right-20 "></div>

      {/* Logo div start from here*/}
      <div
        onClick={onClick}
        className="text-white text-4xl flex justify-end pr-3 sm:hidden"
      >
        x
      </div>

      <div className={`text-white sticky flex justify-center pt-4`}>
        <Image
          width={250}
          height={250}
          src="/images/sidebar/logo.png"
          alt="image"
        />
      </div>

      <div className="px-4 flex justify-between items-center">
        <div className="text-yellow-500 text-xl">Ella</div>
        <div className="flex gap-3 cursor-pointer">
          <RiAccountCircleFill className="text-white" />
          <MdOutlineMail className="text-white" />
          <IoIosNotificationsOutline
            className={`${
              notificationLength > 0 ? "text-yellow-500" : "text-white"
            }`}
          />
        </div>
      </div>

      <div className="items-center sm:items-start flex flex-col  px-2 font-kallisto text-[#ABABAB]">
        <div className="flex flex-col ">
          <div className="px-2 mt-4">
            <ul className="px-2 mt-4">
              {/* Mapping over the array to generate li elements */}
              {data.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => router.push("/")}
                    className="text-[#ABABAB] text-sm text-transform: capitalize font-kallisto font-medium tracking-wider"
                  >
                    <div
                      onClick={() => router.push("/")}
                      className={` cursor-pointer hover:text-red-300 ${
                        index < 1 ? "text-yellow-400" : "text-[#ABABAB]"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-[#1A1A1A] w-[200px] h-[600px] mb-40 mt-10  flex justify-center items-center">
              <p
                className="text-[#313030] font-semibold"
                style={{ fontFamily: "Kallisto" }}
              >
                300 X 600 AD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
