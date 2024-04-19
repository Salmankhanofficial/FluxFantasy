"useclient";

import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "@/components/Image";
import Dropdown from "@/components/Dropdown";

function Index() {
  const gender = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  return (
    <div className="w-full px-10 md:px-40 pt-10 pb-2 relative">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[#092C4C] text-4xl font-PoetsenOne leading-[43px] text-center whitespace-nowrap">
          Register Your Self
        </h1>
      </div>

      <div className="mt-4 flex flex-col justify-center items-center">
        <div className="w-full grid-cols-1 grid md:grid-cols-2   gap-4 mt-4">
          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              First Name
            </label>
            <Input
              type={"text"}
              placeholder="First Name"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] mt-1"
              inputClassName="focus:outline-none focus:border-none py-3 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              Last Name
            </label>
            <Input
              type={"text"}
              placeholder="Last Name"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] mt-1"
              inputClassName="focus:outline-none focus:border-none py-3 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              Email
            </label>
            <Input
              type={"email"}
              placeholder="email@gmail.com"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] mt-1"
              inputClassName="focus:outline-none focus:border-none py-3 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              Date of Birth
            </label>
            <Input
              type="date"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] mt-1"
              inputClassName="focus:outline-none focus:border-none py-3 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              Password
            </label>
            <Input
              type={"password"}
              placeholder="at least 8 characters"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] px-4 py-3 mt-1"
              inputClassName="focus:outline-none focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-roboto leading-4"
            >
              Confirm Password
            </label>
            <Input
              type={"password"}
              placeholder="at least 8 characters"
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] px-4 py-3 mt-1"
              inputClassName="focus:outline-none focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-10 mb-11">
          <Button
            type="submit"
            className="bg-[#1E4178] w-full rounded-md text-[#FFFFFF] text-xl font-bold font-NotoSans leading-5 py-3 "
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* <Image
        src="/images/signup/flux-p.png"
        alt=""
        width={330}
        height={100}
        className=" absolute bottom-40 left-0 opacity-80 hidden md:block"
      /> */}
    </div>
  );
}

export default Index;
