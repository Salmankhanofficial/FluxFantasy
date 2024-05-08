import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { useRouter } from "next/router";

function Index() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeCommunications, setAgreeCommunications] = useState(false);
  const router = useRouter();
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

  const handleTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCommunicationsChange = () => {
    setAgreeCommunications(!agreeCommunications);
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="  bg-black absolute inset-0  h-screen  z-0">

        <Image
          src="/images/signup/background.jpg"
          layout="fill"
          objectFit="contain"
          alt="Background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className=" w-full md:w-[500px] border border-gray-500  relative" style={{ background: "url(/images/bg1.jpg)" }}>

        <div className="w-full ">

          <img src="/images/signup/signupLogo.png" />
        </div>

        <div className="mt-4 md:mt-0 lg:mt-1 sm:mt-1 flex flex-col justify-center px-2 items-center">
          <div className="w-full grid-cols-1 grid md:grid-cols-2   gap-2 ">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                First Name
              </label>
              <Input
                type={"text"}
                placeholder="First Name"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none focus:border-none py-[6px] md:py-1 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                Last Name
              </label>
              <Input
                type={"text"}
                placeholder="Last Name"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none focus:border-none py-[6px] md:py-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                Email
              </label>
              <Input
                type={"email"}
                placeholder="email@gmail.com"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none focus:border-none py-[6px] md:py-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                Date of Birth
              </label>
              <Input
                type="date"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none focus:border-none py-[6px] md:py-1 px-3 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                Password
              </label>
              <Input
                type={"password"}
                placeholder="at least 8 characters"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] px-4 py-[6px] md:py-1 mt-1"
                inputClassName="focus:outline-none focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-white text-base font-roboto leading-2"
              >
                Confirm Password
              </label>
              <Input
                type={"password"}
                placeholder="at least 8 characters"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] px-4 py-[6px] md:py-1 mt-1"
                inputClassName="focus:outline-none focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
            </div>
          </div>

          <div className="w-full space-y-1 px-2 py-[1px]">
            <div className="w-full flex items-center text-white text-base">

              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleTermsChange}
                className="mr-2"
              />
              <p  className=" text-[12px] sm:text-sm"> I agree to the Terms of Service</p>

            </div>
            <div className="w-full flex items-center gap-1 text-white text-base">

              <input
                type="checkbox"
                checked={agreeCommunications}
                onChange={handleCommunicationsChange}
                className=""
              />
              <p className=" text-[10px] text-nowrap sm:text-sm"> I agree to receive Email & SMS Communications from FLUX FANTASY
              </p>

            </div>

          </div>



          <div className="w-full flex justify-center mt-1 mb-2">
            <Button
             onClick={()=>router?.push('/user/login')}
              type="submit"
              className="bg-[#1E4178] w-full rounded-md text-[#FFFFFF] text-sm font-bold font-NotoSans leading-5 py-1 "
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
