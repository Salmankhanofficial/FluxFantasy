import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full realtive">
        <Image
          alt=""
          height={0}
          width={0}
          className="w-full h-screen object-fill"
          src={"/images/login/bkgd_registration.jpg"}
        />

      {/* <div className="w-full"> */}
        <div className="md:w-[31%]  lg:w-[26%] xxl-1200:w-[27%] x-1-1150:w-[28%] x-2-1100:w-[26%] x-3-885:w-[27%] flex flex-col justify-center items-center absolute top-[-20px]  right-0">
          <div className=" x-l:px-4 px-3 w-full flex ">
            <Image
              alt=""
              height={0}
              width={0}
              className="w-[100%] object-cover"
              src={"/images/login/logo-removebg-preview.png"}
            />
          </div>
          <p className="mt-[-30px] font-medium text-xl text-white">CHARACTER PORTAL</p>
          <div className="md:w-[95%] lg:w-[90%] xxl-1200:w-[77%] x-1-1150:w-[80%] x-2-1100:w-[85%] x-3-885:w-[99%] w-[75%]">
            <div className="w-full flex flex-col justify-center">
              <div className="w-full bg-gradient-linear flex justify-center">
                <p className="text-white py-2">User Login</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center bg-[#1F1F1F]">
                <div className="py-5 ">
                  <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
                    <FaUser className="pl-2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="User Name"
                      className="bg-transparent focus:outline-none text-white text-sm py-2 md:py-3 px-3"
                    />
                  </div>
                  <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
                    <BsFillKeyFill className="pl-2 h-5 w-5 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="User Password"
                      className="bg-transparent focus:outline-none text-white text-sm py-2 md:py-3 px-3"
                    />
                  </div>

                  <div className="w-full mt-2 flex justify-between items-center">
                    <div className="w-1/2 flex gap-2 items-center">
                      <p className="text-gray-200 text-xs">ABC</p>

                      <label className="inline-flex items-center cursor-pointer gap-1">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          onChange={handleTogglePassword}
                        />
                        <div
                          className={`relative mt-[2px] w-7 h-4 bg-gradient-linear peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 ${
                            showPassword
                              ? "peer-checked:bg-gradient-linear"
                              : "peer-checked:bg-gradient-linear"
                          } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                        <span className="mt-1 text-gray-200">***</span>
                      </label>
                    </div>
                    <div className="w-1/2 flex justify-end">
                      <Link href={""}>
                        <p className="text-gray-200 text-xs">Forgot Details?</p>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full  mt-3">
                    <button
                    onClick={()=>router?.push('/user/home')}
                    className="bg-[#339F92] py-2  text-center w-full rounded-md text-white">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Index;
