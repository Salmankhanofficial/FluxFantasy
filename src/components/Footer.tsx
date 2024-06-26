import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { TbBrandTiktok } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
interface Props {
  className: string;
}
function Footer({ className }: Props) {
  return (
    <div
      className={`w-full flex justify-center items-center bg-[#06021D]   left-0 px-0 xxs:px-20 font-kallisto tracking-wid ${className}`}
    >
      <div className="w-full sm:flex sm:flex-row flex-col md:py-4 gap-10 items-center text-base sm:text-[10px] md:text-sm lg:text-base">
        <div className="hidden sm:flex w-full py-4 sm:py-0 gap-7 sm:gap-0 sm:w-1/6 flex justify-center items-center sm:justify-between">
          <Link href={""}>
            <FaSquareFacebook className="text-white m-x-1" />
          </Link>
          <Link href={""}>
            <FaInstagramSquare className="text-white" />
          </Link>
          <Link href={""}>
            <FaSquareTwitter className="text-white" />
          </Link>
          <Link href={""}>
            <FaSquareYoutube className="text-white" />
          </Link>
          <Link href={""}>
            <TbBrandTiktok className="text-white" />
          </Link>
        </div>

        <div className="w-full sm:hidden flex justify-center text-[#ABABAB]">
          <Link href={""}>
            <p className="py-4 sm:py-0 sm:text-base md:text-xl font-bold text-[#ABABAB]">
              FLUX FANTASY
            </p>
          </Link>
        </div>
        <ul className="flex justify-center items-center text-nowrap mb-6 text-[8px] xxs:text-[12px] sm:text-xs lg:text-sm font-medium text-[#ABABAB] sm:mb-0 dark:text-gray-400">
          <li className="pl-6 sm:pl-0 md:px-[10px] lg:px-[10px] ">
            <Link href="#" className="hover:underline me-2 md:me-6 pl-4">
              © FLUXFANTASY
            </Link>
          </li>
          <li className="flex">
            <div className="w-2 sm:w-3 lg:w-5 block sm:hidden">|</div>
            <Link href="#" className="hover:underline me-2 md:me-6">
              Terms of Use
            </Link>
          </li>
          <li className="flex">
            <div className="w-2 sm:w-3 lg:w-5">|</div>
            <Link href="#" className="hover:underline me-2 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li className="flex">
            <div className="w-2 sm:w-3 lg:w-5">|</div>
            <Link href="#" className="hover:underline me-2 md:me-6">
              Licensing
            </Link>
          </li>
          <li className="flex mr-4">
            <div className="w-2 sm:w-3 lg:w-5">|</div>
            <Link href="#" className="hover:underline me-2 md:me-6">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <div className='hidden sm:flex w-full sm:w-1/5 flex justify-center sm:justify-end text-white'>
            <Link href={''}>
              <p className='py-4 sm:py-0 sm:text-base md:text-xl font-bold text-[#ABABAB]'>FLUX FANTASY</p>
            </Link>
          </div> */}

        <div className="block sm:hidden sm:flex w-full py-4 sm:py-0 gap-7 sm:gap-0 sm:w-1/6 flex justify-center items-center sm:justify-between">
          <Link href={""}>
            <FaSquareFacebook className="text-white" />
          </Link>
          <Link href={""}>
            <FaInstagramSquare className="text-white" />
          </Link>
          <Link href={""}>
            <FaSquareTwitter className="text-white" />
          </Link>
          <Link href={""}>
            <FaSquareYoutube className="text-white" />
          </Link>
          <Link href={""}>
            <TbBrandTiktok className="text-white" />
          </Link>
        </div>
      </div>
      <div className="bg-black  text-center  h-8 w-[260px] z-50 absolute bottom-5 right-0  ">
      <div className="bg-black h-8 w-[40px] z-50 absolute  -left-5 bottom-[10px] rotate-[50deg]  "></div>
<p className="text-[#7a7878] font-bold italic tracking-tighter">HEROHELI <span className="text-xl ">X</span></p>
      </div>
    </div>
  );
}

export default Footer;
