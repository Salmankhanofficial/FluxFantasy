import Image from "next/image";
import Link from "next/link";
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
const Sidebar = ({ mainClassName, notificationLength,onClick }: props) => {
  const router = useRouter();

  const data = [
    { title: "create an oc" },
    { title: "my oc library" },
    { title: "character journal" },
    { title: "oc creation Guide" },
    { title: "the universe" },
    { title: "mechanics" },
    { title: "join a game !" },
    { title: "discard" },
  ];
  return (
    <div
      className={`h-screen  sm:pr-2   flex flex-col  bg-[#0c0539] ${mainClassName}`}
    >
      {/* Logo div start from here*/}
      <div onClick={onClick} className="text-white text-4xl flex justify-end pr-3 sm:hidden">x</div>
   
      <div className={`text-white sticky flex justify-center`}>
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
          <CiHeadphones className="text-white" />
          <MdOutlineMail className="text-white" />
          <IoIosNotificationsOutline
            className={`${
              notificationLength > 0 ? "text-yellow-500" : "text-white"
            }`}
          />
        </div>
      </div>

      <div
        id="scroll-1"
        className="overflow-y-auto  items-center sm:items-start flex flex-col  custom-scrollbar px-2"
      >
        <div className="flex flex-col ">
          <div className="px-2 mt-4">
            <ul className="px-2 mt-4">
              {/* Mapping over the array to generate li elements */}
              {data.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => router.push("/")}
                    className="text-white text-base text-transform: capitalize"
                  >
                    <div
                      onClick={() => router.push("/")}
                      className={` cursor-pointer hover:text-red-300 ${index < 1 ? "text-yellow-400" : "text-white"}`}
                    >
                      {item.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-gray-500 w-[200px] h-[600px] mb-40 mt-10  flex justify-center items-center">
              <p className="text-gray-600 ">300 X 600 AD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
