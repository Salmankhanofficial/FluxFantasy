"useclient";

import dynamic from "next/dynamic";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Image = dynamic(() => import("@/components/Image"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const Dropdown = dynamic(() => import("@/components/Dropdown"), {
  ssr: false,
});

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
        <div className="w-1/2 flex flex-col justify-center   gap-4 mt-4">
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
              Select Date of Birth
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
              className="text-[#0C1421] text-base font-roboto leasding-4"
            >
              Gender
            </label>
            <Dropdown
              options={gender}
              bodyClassName="!bg-[#F7FBFF]"
              placeholder="Select Gender"
              icon={<TiArrowSortedDown className="text-[#8897AD] w-4 h-4" />}
              onSelect={() => {}}
              className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[6px] py-2.5 mt-1"
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
            className="bg-[#1E4178] rounded-md text-[#FFFFFF] text-xl font-bold font-NotoSans leading-5 py-3  w-1/2"
          >
            Submit
          </Button>
        </div>
      </div>
      <Image
        src="/images/signup/registration.webp"
        alt=""
        width={0}
        height={0}
        className="w-[120px] aspect-auto absolute bottom-0 left-0 opacity-50 hidden md:block"
      />
    </div>
  );
}

export default Index;
