// import Image from "next/image";
// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { BsFillKeyFill } from "react-icons/bs";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Index() {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="w-full realtive font-kallisto">
//         <Image
//           alt=""
//           height={0}
//           width={0}
//           className="w-full h-screen object-fill"
//           src={"/images/login/bkgd_registration.jpg"}
//         />

//       {/* <div className="w-full"> */}
//         <div className="md:w-[31%]  lg:w-[26%] xxl-1200:w-[27%] x-1-1150:w-[28%] x-2-1100:w-[26%] x-3-885:w-[27%] flex flex-col justify-center items-center absolute top-[-20px]  right-0">
//           <div className=" x-l:px-4 px-3 w-full flex ">
//             <Image
//               alt=""
//               height={0}
//               width={0}
//               className="w-[100%] object-cover"
//               src={"/images/sidebar/logo.png"}
//             />
//           </div>
//           <p className="mt-[-30px]  text-xl text-white py-5 tracking-widest font-kallisto ">CHARACTER PORTAL</p>
//           <div className="md:w-[95%] lg:w-[90%] xxl-1200:w-[77%] x-1-1150:w-[80%] x-2-1100:w-[85%] x-3-885:w-[99%] w-[75%]">
//             <div className="w-full flex flex-col justify-center py-7">
//               <div className="w-full bg-gradient-linear flex justify-center">
//                 <p className="text-[#BDBDBD] py-2 font-bold text-sm tracking-wider">User Login</p>
//               </div>
//               <div className="w-full  flex flex-col justify-center items-center bg-[#1F1F1F]">
//                 <div className="py-5">
//                   <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
//                     <FaUser className="pl-2 h-5 w-5 text-gray-500" />
//                     <input
//                       type="text"
//                       placeholder="username"
//                       className="bg-transparent focus:outline-none placeholder:text-[#ABABAB] text-white text-sm py-2 md:py-3 px-3 placeholder:font-medium tracking-wider"
//                     />
//                   </div>
//                   <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
//                     <BsFillKeyFill className="pl-2 h-5 w-5 text-gray-500" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="password"
//                       className="bg-transparent focus:outline-none text-white text-sm py-2 md:py-3 px-3 placeholder:text-[#ABABAB] placeholder:font-medium tracking-wider"
//                     />
//                   </div>

//                   <div className="w-full mt-2 flex justify-between items-center">
//                     <div className="w-1/2 flex gap-2 items-center">
//                       <p className="text-[#BDBDBD] text-xs font-bold">ABC</p>

//                       <label className="inline-flex items-center cursor-pointer gap-1">
//                         <input
//                           type="checkbox"
//                           value=""
//                           className="sr-only peer"
//                           onChange={handleTogglePassword}
//                         />
//                         <div
//                           className={`relative mt-[2px] w-7 h-4 bg-gradient-linear peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 ${
//                             showPassword
//                               ? "peer-checked:bg-gradient-linear"
//                               : "peer-checked:bg-gradient-linear"
//                           } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
//                         ></div>
//                         <span className="mt-1 text-[#BDBDBD]">***</span>
//                       </label>
//                     </div>
//                     <div className="w-1/2 flex justify-end">
//                       <Link href={""}>
//                         <p className="text-[#BDBDBD] text-xs font-bold tracking-wider">forgot details?</p>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="w-full  mt-3">
//                     <button
//                     onClick={()=>router?.push('/user/home')}
//                     className="bg-[#339F92] py-2 font-medium tracking-wider text-center w-full rounded-md text-white">
//                       Sign In
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default Index;

// import Image from "next/image";
// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { BsFillKeyFill } from "react-icons/bs";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Index() {
// const [showPassword, setShowPassword] = useState(false);
// const router = useRouter();

// const handleTogglePassword = () => {
//   setShowPassword(!showPassword);
// };

//   return (
//     <div className="w-full realtive h-screen font-kallisto bg-black">
//         <Image
//           alt=""
//           height={0}
//           width={0}
//           className="w-full hidden sm:block h-screen object-fill"
//           src={"/images/login/bkgd_registration.jpg"}
//         />

//       {/* <div className="w-full"> */}
//         <div className="md:w-[31%] -mt-20 min-h-screen lg:w-[26%] xxl-1200:w-[27%] x-1-1150:w-[28%] x-2-1100:w-[26%] x-3-885:w-[27%] flex flex-col justify-center items-center absolute top-[-20px]  right-0">
// <div className="mt-20 ml-10 lg:ml-0 lg:mt-10 w-full flex justify-center">
//   <Image
//     alt=""
//     height={0}
//     width={0}
//     className="w-[80%] md:w-[60%] object-cover"
//     src={"/images/sidebar/logo.png"}
//   />
// </div>
//           <p className="mt-[-30px] ml-10 lg:-ml-[10px] text-xs text-white py-5 tracking-widest font-kallisto ">CHARACTER PORTAL</p>
//           <div className="md:w-[95%] lg:w-[90%] xxl-1200:w-[77%] x-1-1150:w-[80%] x-2-1100:w-[85%] x-3-885:w-[99%] w-[75%]">
//             <div className="lg:w-[70%] ml-10 flex flex-col justify-center py-7 -mt-[30px] ">
//               <div className="w-full bg-gradient-linear flex justify-center">
//                 <p className="text-[#BDBDBD] py-2 font-bold text-sm tracking-wider">User Login</p>
//               </div>
//               <div className="w-full   flex justify-center bg-[#1F1F1F]">
//                 <div className="w-full px-2 lg:px-0 lg:w-[90%] flex flex-col justify-center items-center py-5">
// <div className="w-full border border-black bg-[#141414]  flex items-center ">
//  <div className="w-[10%]">
//   <FaUser className="pl-1 h-5 text-gray-500" />
//   </div>
//   <input
//     type="text"
//     placeholder="username"
//     className="bg-transparent !w-[145px] focus:outline-none placeholder:text-[#ABABAB] text-white text-sm py-2 md:py-3 px-3 placeholder:font-medium tracking-wider"
//   />

// </div>
// <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
//   <div className="w-[10%]">
//   <BsFillKeyFill className="pl-1 h-5 text-gray-500 text-center" />
//   </div>
//   <input
//     type={showPassword ? "text" : "password"}
//     placeholder="password"
//     className="bg-transparent !w-[145px] focus:outline-none text-white text-sm py-2 md:py-3  placeholder:text-[#ABABAB] placeholder:font-medium tracking-wider"
//   />
// </div>

                  // <div className="w-full mt-2 flex justify-between items-center">
                  //   <div className="w-1/2 flex gap-2 items-center">
                  //     <p className="text-[#BDBDBD] text-xs font-bold">ABC</p>

                  //     <label className="inline-flex items-center cursor-pointer gap-1">
                  //       <input
                  //         type="checkbox"
                  //         value=""
                  //         className="sr-only peer"
                  //         onChange={handleTogglePassword}
                  //       />
                  //       <div
                  //         className={`relative mt-[2px] w-7 h-4 bg-gradient-linear peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 ${
                  //           showPassword
                  //             ? "peer-checked:bg-gradient-linear"
                  //             : "peer-checked:bg-gradient-linear"
                  //         } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                  //       ></div>
                  //       <span className="mt-1 text-[#BDBDBD]">***</span>
                  //     </label>
                  //   </div>
                  //   <div className="w-1/2 flex justify-end">
                  //     <Link href={""}>
                  //       <p className="text-[#BDBDBD] text-[8px] font-bold tracking-wider">forgot details?</p>
                  //     </Link>
                  //   </div>
                  // </div>
                  // <div className="w-full  mt-3">
                  //   <button
                  //   onClick={()=>router?.push('/user/home')}
                  //   className="bg-[#339F92] py-2 text-xs font-medium tracking-wider text-center w-full rounded-md text-white">
                  //     Sign In
                  //   </button>
                  // </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default Index;

import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen relative max-w-[1600px] bg-black">
      <div className="w-full max-h-screen">
        <img
          src="/images/login/bkgd_registration.jpg"
          alt=""
          className="h-screen w-full"
        />
      </div>

      <div className="w-full sm:w-[250px] absolute sm:right-10 top-0 flex flex-col justify-center items-center">
        <div className="w-full">
          <Image
            alt=""
            height={0}
            width={0}
            className="w-full object-cover"
            src={"/images/sidebar/logo.png"}
          />
        </div>

        <div className="">
          <p className="tracking-widest text-xs font-kallisto -mt-4 pb-6 text-center text-white">CHARACTER PORTAL</p>
        </div>

        <form className="w-full bg-[#1F1F1F]">
          <div className="w-full bg-gradient flex justify-center" id="bg-gradient">
            <p className="text-[#BDBDBD] py-2 font-bold text-sm tracking-wider">
              User Login
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center px-5 mt-5 " >
            <div className="w-full border border-black bg-[#141414]  flex items-center ">
              <div className="w-[10%]">
                <FaUser className="pl-1 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="username"
                className="bg-transparent focus:outline-none placeholder:text-[#ABABAB] text-white text-sm py-1 md:py-2 px-3 placeholder:font-medium tracking-wider"
              />
            </div>

            <div className="w-full border border-black bg-[#141414]  flex items-center gap-2">
              <div className="w-[10%]">
                <BsFillKeyFill className="pl-1 h-5 text-gray-500 text-center" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="bg-transparent  focus:outline-none text-white text-sm py-2 md:py-2  placeholder:text-[#ABABAB] placeholder:font-medium tracking-wider"
              />
            </div>
          </div>

          <div className="w-full mt-2 flex justify-between items-center  px-5 ">
                    <div className="w-1/2 flex gap-2 items-center">
                      <p className="text-[#BDBDBD] text-xs font-bold">ABC</p>

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
                        <span className="mt-1 text-[#BDBDBD]">***</span>
                      </label>
                    </div>
                    <div className="w-1/2 flex justify-end">
                      <Link href={""}>
                        <p className="text-[#BDBDBD] text-[8px] font-bold tracking-wider">forgot details?</p>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full  py-3 px-5">
                    <button
                    onClick={()=>router?.push('/user/home')}
                    className="bg-[#339F92] py-2 text-xs font-medium tracking-wider text-center w-full rounded-md text-white">
                      Sign In
                    </button>
                  </div>
              
        </form>
      </div>
    </div>
  );
}

export default Index;
