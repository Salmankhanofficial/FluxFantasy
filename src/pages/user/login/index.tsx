// "useclient";

// import dynamic from "next/dynamic";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";

// import ForgotPassword from "@/components/login/ForgotPassword";
// import Button from "@/components/Button";
// import Input from "@/components/Input";
// import Image from "next/image";

// function Index() {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div className="w-full bg-white overflow-hidden h-[100vh] flex items-center">
//       <title>LogIn</title>
//       <Image
//         src="/images/login/topright.png"
//         alt="login-top-right image"
//         width={0}
//         height={0}
//         className="w-1/5 hidden md:block aspect-square absolute top-0 right-0"
//       />
//       <Image
//         src="/images/login/login-bottom.webp"
//         alt="login-bottom-left image"
//         width={0}
//         height={0}
//         className="w-1/5 hidden md:block aspect-square absolute bottom-0 left-0"
//       />
//       <div
//         className="w-full my-20 md:w-[35%] md:min-w-[500px] mx-auto flex flex-col items-center justify-center px-5 lg:px-0 py-6 relative bg-transparent"
//         style={{
//           backgroundImage: `url('/images/login/background.webp')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           WebkitBackgroundOrigin: "center",
//         }}
//       >
//         <h1 className="text-[#092C4C] text-[30px] font-black font-NotoSans leading-[40px]">
//           Flux Fantasy
//         </h1>
//         <div className="mt-3 w-full">
//           <h1 className="text-[#0C1421] text-[20px] font-semibold font-NotoSans leading-4">
//             Welcome 👋
//           </h1>
//           <p className="text-[#313957] text-sm font-NotoSans leading-5 sm:w-[450px] mt-3">
//             {`Step into Flux Fantasy, your character portal to epic adventures. Join now to unleash your imagination and conquer new realms with fellow players!`}
//           </p>
//         </div>
//         <form className="mt-3 w-full">
//           <div>
//             <label
//               htmlFor=""
//               className="text-[#0C1421] text-base font-NotoSans leading-4"
//             >
//               Email
//             </label>
//             <Input
//               type="text"
//               placeholder="Example@email.com"
//               className="bg-[#F7FBFF] px-4 py-3 border border-[#D4D7E3] rounded-md mt-1"
//               inputClassName="border-none outline-none focus:border-none focus:outline-none bg-transparent text-base font-NotoSans leading-4"
//             />
//           </div>
//           <div className="mt-3">
//             <label
//               htmlFor=""
//               className="text-[#0C1421] text-base font-NotoSans leading-4"
//             >
//               Password
//             </label>
//             <Input
//               type="password"
//               placeholder="12345abc@"
//               className="bg-[#F7FBFF] px-4 py-3 border border-[#D4D7E3] rounded-md mt-1"
//               inputClassName="border-none outline-none focus:border-none focus:outline-none bg-transparent text-base font-NotoSans leading-4"
//             />
//             <div className="w-full flex justify-end">
//               <h1
//                 className="text-right text-[#1E4AE9] text-base font-NotoSans leading-4 mt-1 cursor-pointer"
//                 onClick={handleOpen}
//               >
//                 Forgot Password ?
//               </h1>
//             </div>
//           </div>
//           <Button
//             type="button"
//             className="bg-[#1E4178] py-4 rounded-md text-[#FFFFFF] text-xl font-bold font-NotoSans leading-5 w-full mt-5"
//           >
//             Login
//           </Button>
//         </form>
//         <div className="w-full flex items-center justify-center mt-3">
//           <span className="w-full text-center text-[#294957] text-base font-roboto leading-4 relative before:absolute before:w-[45%] before:h-[0.5px] before:bg-[#CFDFE2] before:left-0 before:top-1/2 before:-translate-y-1/2 after:absolute after:w-[45%] after:h-[0.5px] after:bg-[#CFDFE2] after:right-0 after:top-1/2 after:-translate-y-1/2">
//             Or
//           </span>
//         </div>
//         <Button
//           type="button"
//           className="flex w-full gap-3 items-center bg-[#F3F9FA] py-3 rounded-md mt-4"
//         >
//           <FcGoogle className="w-7 h-7" />
//           <h1 className="text-[#313957] text-base font-NotoSans leading-4">
//             Sign in with Google.
//           </h1>
//         </Button>
//         <h1 className="text-base text-black font-NotoSans leading-[28px]">
//           {`Don't you have an account?`}
//           <Link
//             href={"/user/registration"}
//             className="text-[#1E4AE9] cursor-pointer"
//           >
//             {" "}
//             Sign up
//           </Link>
//         </h1>
//       </div>
//       <ForgotPassword open={open} setOpen={setOpen} />
//     </div>
//   );
// }

// export default Index;
// import Image from "next/image";
// import React from "react";
// import { FaUser } from "react-icons/fa";
// import { BsFillKeyFill } from "react-icons/bs";

// function index() {
//   return (
//     <div className="w-full h-full">
//       <div className="">
//         <Image
//           alt=""
//           height={100}
//           width={100}
//           className="w-full h-screen"
//           src={"/images/login/bkgd_registration.jpg"}
//         />
//       </div>

//       <div className="w-full">
//         <div className="w-[30%] flex flex-col justify-center items-center">
//           <div className="px-3 w-full flex ">
//             <Image
//               alt=""
//               height={0}
//               width={0}
//               className="w-[100%] object-cover"
//               src={"/images/login/logo-removebg-preview.png"}
//             />
//           </div>
//           <p className="mt-[-30px] font-medium text-2xl">CHARACTER PORTAL</p>
//           <div className="w-[75%]">
//             <div className="w-full flex flex-col justify-center">
//               <div className="w-full bg-gradient-linear flex justify-center">
//                 <p className="text-white py-2">User Login</p>
//               </div>
//               <div className="w-full flex flex-col justify-center items-center  bg-[#1F1F1F]">
//                 <div className="py-5 ">
//                   <div className="relative ">
//                     <input
//                       type="text"
//                       placeholder="UserName"
//                       className="text-white  focus:outline-none  pl-8 pr-2 py-2 border-[1px] border-black"
//                     />
//                     <FaUser className="absolute left-2 top-3 h-5 w-5 text-gray-500" />
//                   </div>
//                   <div className="relative mt-[1px] ">
//                     <input
//                       type="password"
//                       placeholder="UserPassword"
//                       className="text-white  pl-8 pr-2 py-2 border-[1px] border-black focus:outline-none"
//                     />
//                     <BsFillKeyFill className="absolute left-2 top-3 h-5 w-5 text-gray-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default index;import Image from "next/image";


import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";
import Link from "next/link";

function Index() {
  const [showPassword, setShowPassword] = useState(false);

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
                    <button className="bg-[#339F92] py-2  text-center w-full rounded-md text-white">
                      Sign Up
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
