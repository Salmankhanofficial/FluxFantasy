'useclient';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import ForgotPassword from "@/components/login/ForgotPassword"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "@/components/Image";

function Index() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="w-full bg-white overflow-hidden h-[100vh] flex items-center">
      <title>LogIn</title>
      <Image
        src="/images/login/topright.png"
        alt="login-top-right image"
        width={0}
        height={0}
        className="w-1/5 hidden md:block aspect-square absolute top-0 right-0"
      />
      <Image
        src="/images/login/login-bottom.webp"
        alt="login-bottom-left image"
        width={0}
        height={0}
        className="w-1/5 hidden md:block aspect-square absolute bottom-0 left-0"
      />
      <div
        className="w-full my-20 md:w-[35%] md:min-w-[500px] mx-auto flex flex-col items-center justify-center px-5 lg:px-0 py-6 relative bg-transparent"
        style={{
          backgroundImage: `url('/images/login/background.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundOrigin: 'center',
        }}
      >
        <h1 className="text-[#092C4C] text-[30px] font-black font-NotoSans leading-[40px]">
          Flux Fantasy
        </h1>
        <div className="mt-3 w-full">
          <h1 className="text-[#0C1421] text-[20px] font-semibold font-NotoSans leading-4">
            Welcome 👋
          </h1>
          <p className="text-[#313957] text-sm font-NotoSans leading-5 sm:w-[450px] mt-3">
            {`Step into Flux Fantasy, your character portal to epic adventures. Join now to unleash your imagination and conquer new realms with fellow players!`}
          </p>
        </div>
        <form className="mt-3 w-full">
          <div>
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-NotoSans leading-4"
            >
              Email
            </label>
            <Input
              type="text"
              placeholder="Example@email.com"
              className="bg-[#F7FBFF] px-4 py-3 border border-[#D4D7E3] rounded-md mt-1"
              inputClassName="border-none outline-none focus:border-none focus:outline-none bg-transparent text-base font-NotoSans leading-4"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor=""
              className="text-[#0C1421] text-base font-NotoSans leading-4"
            >
              Password
            </label>
            <Input
              type="password"
              placeholder="12345abc@"
              className="bg-[#F7FBFF] px-4 py-3 border border-[#D4D7E3] rounded-md mt-1"
              inputClassName="border-none outline-none focus:border-none focus:outline-none bg-transparent text-base font-NotoSans leading-4"
            />
            <div className="w-full flex justify-end">
              <h1
                className="text-right text-[#1E4AE9] text-base font-NotoSans leading-4 mt-1 cursor-pointer"
                onClick={handleOpen}
              >
                Forgot Password ?
              </h1>
            </div>
          </div>
          <Button
            type="button"
            className="bg-[#1E4178] py-4 rounded-md text-[#FFFFFF] text-xl font-bold font-NotoSans leading-5 w-full mt-5"
          >
            Login
          </Button>
        </form>
        <div className="w-full flex items-center justify-center mt-3">
          <span className="w-full text-center text-[#294957] text-base font-roboto leading-4 relative before:absolute before:w-[45%] before:h-[0.5px] before:bg-[#CFDFE2] before:left-0 before:top-1/2 before:-translate-y-1/2 after:absolute after:w-[45%] after:h-[0.5px] after:bg-[#CFDFE2] after:right-0 after:top-1/2 after:-translate-y-1/2">
            Or
          </span>
        </div>
        <Button
          type="button"
          className="flex w-full gap-3 items-center bg-[#F3F9FA] py-3 rounded-md mt-4"
        >
          <FcGoogle className="w-7 h-7" />
          <h1 className="text-[#313957] text-base font-NotoSans leading-4">
             Sign in with Google
          </h1>
        </Button>
        <h1 className="text-base text-black font-NotoSans leading-[28px]">
          {`Don't you have an account?`}
          <Link href={'/user/registration'} className="text-[#1E4AE9] cursor-pointer"> Sign up</Link>
        </h1>
   
      </div>
      <ForgotPassword open={open} setOpen={setOpen} />
    </div>
  );
}

export default Index;
