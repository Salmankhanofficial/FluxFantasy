// import Faction from "@/components/Faction";
// import ImageUpload from "@/components/ImageUpload";
// import Identity from "@/components/form/Identity";
// import Image from "next/image";
// import React, { useState } from "react";
// const Charactersheet: React.FC = () => {
//   const checkboxesData = [
//     { id: 1, label: "Escape Artist" },
//     { id: 2, label: "Stealth Master" },
//     { id: 3, label: "Lockpick Specialist" },
//     { id: 4, label: "Disguise Expert" },
//     { id: 5, label: "Sleight of Hand Pro" },
//     // Add more checkboxes as needed
//   ];
//   const data = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Alice" },
//     { id: 4, name: "Bob" },
//     { id: 5, name: "Eve" },
//     { id: 6, name: "Bob" },
//     { id: 7, name: "Eve" },
//     { id: 8, name: "Bob" },
//     { id: 9, name: "Eve" },
//     { id: 10, name: "Bob" },
//     { id: 11, name: "Eve" },
//   ];
//   const handleCheckboxChange = (id: number) => {
//     console.log(`Checkbox with id ${id} changed`);
//   };
//   const [coverImageSrc, setCoverImageSrc] = useState<string | null>(null);
//   const handleCoverProfileImage = (imageUrl: string | null) => {
//     setCoverImageSrc(imageUrl);
//   };
//   return (
//     <div className="w-full px-5 pb-20 flex flex-col justify-center items-center bg-black border-2 ">
//       {/* <div className="w-[100%] px-5 flex flex-col justify-center items-center border-[4px] border-gray-200 my-8"> */}
//       {/* Logo & Input */}
//       <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4">
//         <div className="flex flex-col md:w-[40%] mb-2 md:mb-0">
//           <p className="font-extrabold tracking-[3px] text-2xl sm:text-3xl md:text-4xl gap-2 text-nowrap">
//             FLUX FANTASY.
//           </p>
//           <p>CHARACTER STARTER</p>
//         </div>
//         <div className="flex justify-center items-center gap-2 w-full md:w-[85%]">
//           <p className="text-nowrap font-semibold text-[10px] sm:text-sm md:text-base text-gray-200">
//             Player Name
//           </p>
//           <input type="text" className="w-full border-2 py-2" />
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row w-full gap-2">
//         <div className="flex flex-col w-full md:w-[32%] ">
//           <div className="flex gap-1 items-center justify-start">
//             <Image
//               width={0}
//               height={0}
//               src="/arrow (1).png"
//               alt=""
//               className="w-9 h-9"
//             />
//             <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//               PORTRAIT
//             </p>
//           </div>
//           <div className="w-full h-[300px] md:h-[100%]">
//             <ImageUpload
//               className="w-full h-full  "
//               coverImageSrc={coverImageSrc}
//               onCoverProfileImage={handleCoverProfileImage}
//               imageClass="mt-36 lg:mt-48"
//             />
//           </div>
//         </div>
// <div className="flex flex-col w-full md:w-[100%] ">
//   {/* Identity Form */}
//   <div className="flex flex-col sm:flex-row w-full md:w-full gap-2">
//     <div className="flex flex-col w-full sm:w-1/2 md:w-[70%] ">
//       <div className="flex gap-1 items-center justify-start">
//         <Image
//           width={0}
//           height={0}
//           src="/arrow (1).png"
//           alt=""
//           className="w-9 h-9"
//         />
//         <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//           IDENTITY
//         </p>
//       </div>
//       <div className="">
//         <Identity />
//       </div>
//     </div>
//             {/* GEAR OF DENSTINY */}
//             <div className="flex flex-col w-full sm:w-1/2 md:w-[30%] flex-2 ">
//               <div className="flex gap-1 items-center justify-start">
//                 <Image
//                   width={0}
//                   height={0}
//                   src="/arrow (1).png"
//                   alt=""
//                   className="w-9 h-9"
//                 />
//                 <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                   GEAR OF DENSTINY
//                 </p>
//               </div>
//               <div className="flex justify-center">
//                 <Image
//                   width={0}
//                   height={0}
//                   src="/Untitled_design-removebg-preview.png"
//                   alt=""
//                   className="object-cover sm:w-full w-1/2  sm:h-full"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row w-full gap-2 ">
//             {/* Faction Checkbox */}
//             <div className="flex flex-col w-full  sm:w-[50%] mt-2">
//               <div className="flex gap-1 items-center justify-start ">
//                 <Image
//                   width={0}
//                   height={0}
//                   src="/arrow (1).png"
//                   alt=""
//                   className="w-9 h-9"
//                 />
//                 <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                   FACTION
//                 </p>
//               </div>
//               <Faction
//                 checkboxes={checkboxesData}
//                 onCheckboxChange={handleCheckboxChange}
//                 className="py-5 px-5"
//               />
//             </div>
//             {/* Text Area */}
//             <div className="flex flex-col w-full sm:w-[50%] mt-2">
//               <div className="flex gap-1 items-center justify-start  ">
//                 <Image
//                   width={0}
//                   height={0}
//                   src="/arrow (1).png"
//                   alt=""
//                   className="w-9 h-9"
//                 />
//                 <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                   PERSONALITY
//                 </p>
//               </div>
//               <div className="w-full  sm:h-[200px] md:h-[85%]">
//                 <textarea className="w-full h-full resize-none bg-black border-[2px] text-white border-gray-500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Middle Section */}
//       <div className="flex flex-col md:flex md:flex-row w-full items-center justify-center h-full md:h-[160px] gap-2  md:mt-0">
//         <div className="flex flex-col w-full h-full md:w-[62%]  mt-4">
          // <div className="flex gap-1 items-center justify-start">
          //   <Image
          //     width={0}
          //     height={0}
          //     src="/arrow (1).png"
          //     alt=""
          //     className="w-9 h-9"
          //   />
          //   <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
          //     BACKSTORY
          //   </p>
          // </div>
          // <div className="w-full h-[100px] md:h-[84%]">
          //   <textarea className="w-full h-full  resize-none bg-black text-white border-[2px] border-gray-500" />
          // </div>
//         </div>
//         <div className="flex flex-col w-full md:w-[37%]  mt-[20px]">
//           <div className="flex flex-col">
//             <div className="flex gap-1 items-center justify-start">
//               <Image
//                 width={0}
//                 height={0}
//                 src="/arrow (1).png"
//                 alt=""
//                 className="w-9 h-9"
//               />
//               <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                 STRENGTHS
//               </p>
//             </div>
//             <input
//               type="text"
//               className="w-full py-2 bg-black border-[2px] text-white border-gray-500"
//             />
//           </div>
//           <div className="flex flex-col ">
//             <div className="flex gap-1 items-center justify-start">
//               <Image
//                 width={0}
//                 height={0}
//                 src="/arrow (1).png"
//                 alt=""
//                 className="w-9 h-9"
//               />
//               <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                 FLAWS
//               </p>
//             </div>
//             <input
//               type="text"
//               className="w-full  py-2 bg-black border-[2px] text-white border-gray-500"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row w-full gap-2 mt-16">
//         <div className="w-full md:w-1/2 flex flex-col px-2">
//           <fieldset className="border-r-[2px] border-t-[2px] border-gray-500 ">
//             <legend className="font-bold  flex  gap-1 items-center justify-start">
//               <Image
//                 width={0}
//                 height={0}
//                 src="/arrow (1).png"
//                 alt=""
//                 className="w-9 h-9"
//               />
//               <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                 ESCAPE ARTISTS (ONLY)
//               </p>
//             </legend>
//             <div className="flex flex-col pr-2 mt-1">
//               <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                 Stage Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full bg-black border-[2px] border-gray-500 py-2 text-white"
//               />
//             </div>
//             <div className="w-full flex flex-col xl:flex-row gap-2 pr-2 mt-2">
//               <div className="w-full xl:w-1/2">
//                 <p className="font-medium text-xs sm:text-sm md:text-base text-gray-200">
//                   Karmastry Specialization
//                 </p>
//                 <div className="mt-2">
//                   <Faction
//                     checkboxes={checkboxesData}
//                     onCheckboxChange={handleCheckboxChange}
//                     className="py-5 px-2"
//                   />
//                 </div>
//               </div>
//               <div className="w-full xl:w-1/2 flex flex-col ">
//                 <div className="flex flex-col">
//                   <div className="flex gap-1 items-center justify-start ">
//                     <Image
//                       width={0}
//                       height={0}
//                       src="/arrow (1).png"
//                       alt=""
//                       className="w-9 h-9"
//                     />
//                     <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                       Signature Power
//                     </p>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full  py-2 bg-black border-[2px] text-white border-gray-500"
//                   />
//                 </div>
//                 <div className="flex flex-col mt-6">
//                   <div className="flex gap-1 items-center justify-start">
//                     <Image
//                       width={0}
//                       height={0}
//                       src="/arrow (1).png"
//                       alt=""
//                       className="w-9 h-9"
//                     />
//                     <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                       Tours Configuration
//                     </p>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full bg-black border-[2px] text-white border-gray-500 py-2"
//                   />
//                 </div>
//               </div>
//             </div>
//             11:19
//             <div className="w-full flex  gap-4 mt-5 py-1 mx-[-5px] border-r-[2px]  border-t-[2px]  border-gray-500">
//               <div className="w-1/2 flex">
//                 <div className="flex w-full gap-2">
//                   <div className="w-1/2 ">
//                     <p className="font-medium text-[10px]  md:text-xs lg:text-base text-gray-200 ">
//                       Karma Required
//                     </p>
//                     <div className="border-[4px]  border-gray-500 h-[502px]"></div>
//                     <p className="font-medium text-[10px]  md:text-xs lg:text-base text-gray-200">
//                       Karma Required Increases
//                     </p>
//                   </div>
//                   <div className="w-1/2 ">
//                     <p className="font-medium text-[10px] md:text-xs lg:text-base text-gray-200">
//                       Payback Required
//                     </p>
//                     <div className="border-[4px] border-gray-500 h-[502px]"></div>
//                     <p className="font-medium text-[10px] md:text-xs lg:text-base text-gray-200">
//                       Payback Required Intensifies
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-1/2 flex flex-col mr-2 border-gray-500">
//                 <p className="w-full text-end font-medium text-[10px] md:text-xs lg:text-base text-gray-200">
//                   Karmastry Power Profile
//                 </p>
//                 {data.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex w-full gap-2 sm:gap-4 items-center justify-center "
//                   >
//                     <p className="text-nowrap mt-[28px] text-[10px] md:text-xs lg:text-base text-gray-200">
//                       {item.name}
//                     </p>
//                     <div className="pr-2 w-full text-[10px] md:text-xs lg:text-base">
//                       <input
//                         type="text"
//                         className="w-full bg-black border-b-[2px] text-white border-gray-500 py-2 "
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </fieldset>
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col">
//           <fieldset className="border-r-[4px] border-t-[4px] border-gray-500 pr-2">
//             <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
//               <Image
//                 width={0}
//                 height={0}
//                 src="/arrow (1).png"
//                 alt=""
//                 className="w-9 h-9"
//               />
//               <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                 INK FIGHTERS (ONLY)
//               </p>
//             </legend>
//             <div className="w-full flex flex-col  bg-black px-4 pb-5">
//               <div className="flex flex-col ">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Call Sign
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-black border-[2px] text-white border-gray-500 py-2"
//                 />
//               </div>
//               <div className="flex flex-col w-full mt-2">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Sigil Design
//                 </label>
//                 <div className="w-full h-[200px] sm:h-[450px] ">
//                   <textarea className="w-full h-full bg-black text-white border-[2px] border-gray-500 resize-none" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-full mt-2">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Sigil Power Overview
//                 </label>
//                 <div className="w-full h-[100px] sm:h-[250px] ">
//                   <textarea className="w-full h-full bg-black text-white border-[2px] border-gray-500 resize-none" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-full mt-2">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Signature Move
//                 </label>
//                 <div className="w-full h-[50px] ">
//                   <textarea className="w-full h-full bg-black text-white border-[2px] border-gray-500 resize-none" />
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col">
//           <fieldset className="border-r-[4px] border-t-[4px] border-gray-500 pr-2 mb-2 sm:mb-0">
//             <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
//               <Image
//                 width={0}
//                 height={0}
//                 src="/arrow (1).png"
//                 alt=""
//                 className="w-9 h-9"
//               />
//               <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
//                 OTHERS (ONLY)
//               </p>
//             </legend>
//             <div className="w-full flex flex-col bg-black px-4 pb-8">
//               <div className="flex flex-col w-full ">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Special Skills
//                 </label>
//                 <div className="w-full h-[200px] sm:h-[520px] ">
//                   <textarea className="w-full h-full bg-black text-white border-[2px] border-gray-500 resize-none" />
//                 </div>
//               </div>
//               <div className="flex flex-col w-full mt-2  ">
//                 <label className="font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200">
//                   Special Equipment
//                 </label>
//                 <div className="w-full h-[150px] sm:h-[330px] ">
//                   <textarea className="w-full h-full bg-black text-white border-[2px] border-gray-500 resize-none" />
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };
// export default Charactersheet;

import Faction from "@/components/Faction";
import ImageUpload from "@/components/ImageUpload";
import Identity from "@/components/form/Identity";
import Image from "next/image";
import React, { useState } from "react";
const Charactersheet: React.FC = () => {
  const checkboxesData = [
    { id: 1, label: "Escape Artist" },
    { id: 2, label: "Stealth Master" },
    { id: 3, label: "Lockpick Specialist" },
    { id: 4, label: "Disguise Expert" },
    { id: 5, label: "Sleight of Hand Pro" },
    // Add more checkboxes as needed
  ];
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Bob" },
    { id: 7, name: "Eve" },
    { id: 8, name: "Bob" },
    { id: 9, name: "Eve" },
    { id: 10, name: "Bob" },
    { id: 11, name: "Eve" },
  ];
  const handleCheckboxChange = (id: number) => {
    console.log(`Checkbox with id ${id} changed`);
  };
  const [coverImageSrc, setCoverImageSrc] = useState<string | null>(null);
  const handleCoverProfileImage = (imageUrl: string | null) => {
    setCoverImageSrc(imageUrl);
  };
  return (
    <div className="w-full px-5 pb-[50px] flex flex-col justify-center items-center border-2 ">
      <div className="w-full flex flex-col items-center justify-center px-5 py-5">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-[30%]  ">
          <div className="flex gap-1 items-center justify-start">
           <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
              PORTRAIT
            </p>
          </div>
          <div className="w-full h-[300px] md:h-[400px]">
            <ImageUpload
              className="w-full h-full  "
              coverImageSrc={coverImageSrc}
              onCoverProfileImage={handleCoverProfileImage}
              imageClass="mt-36 lg:mt-48"
            />
          </div>
          </div>
          <div className="flex flex-col  w-[50%]  px-2">
             <div className="flex gap-1 items-center justify-start">
         <Image
          width={0}
          height={0}
          src="/arrow (1).png"
          alt=""
          className="w-9 h-9"
        />
        <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
          IDENTITY
        </p>
      </div>
      <div className="">
        <Identity />
      </div>
          </div>

          <div className="flex flex-col  w-[20%]  ">
            <div className="flex flex-col">
             <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                STUDY
              </p>
            </div>
            <input
              type="text"
              className="w-full py-2  text-whitebg-[#343A40] border-[2px] border-gray-500 "
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                LEVEL
              </p>
            </div>
            <input
              type="text"
              className="w-full  py-2 text-white bg-[#343A40] border-[2px] border-gray-500 "
            />
          </div>
          </div>
        </div>
        

        <div className="w-full flex items-center">
          <div className="w-1/4  items-start justify-start flex flex-col  ">
          <div className="flex gap-1 items-center justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
              ADVANTAGES
            </p>
          </div>
          <div className="w-full h-[200px] ">
            <textarea className="w-full h-full  resize-none  text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>

          <div className="flex gap-1 items-center py-4 justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
              MERITS
            </p>
          </div>
          <div className="w-full ">
            <input type="text" className="w-full h-full py-2 resize-none text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>
          
          <div className="flex gap-1 items-center py-4 justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
              MED+KIT#
            </p>
          </div>
          <div className="w-full ">
            <input type="text" className="w-full h-full py-2 resize-none text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>

          <div className="flex gap-1 py-4 items-center justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
              MED+ KIT % 
            </p>
          </div>
          <div className="w-full ">
            <input type="text" className="w-full h-full py-2 resize-none text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>

          <div className="flex gap-1 py-4 items-center justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
             SPECIAL ITEMS
            </p>
          </div>
          <div className="w-full h-[150px] ">
            <textarea className="w-full h-full  resize-none text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>

          <div className="flex gap-1 py-2 items-center justify-start">
            <Image
              width={0}
              height={0}
              src="/arrow (1).png"
              alt=""
              className="w-9 h-9"
            />
            <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
             SWAP POWERS
            </p>
          </div>
          <div className="w-full ">
            <input type="text" className="w-full h-full py-2 resize-none text-white bg-[#343A40] border-[2px] border-gray-500 " />
          </div>


          </div>
          <div className="w-1/2 -mt-[770px] flex flex-col justify-center items-center">
           <div className="flex gap-1 items-center justify-start">
                <Image
                  width={0}
                  height={0}
                  src="/arrow (1).png"
                  alt=""
                  className="w-9 h-9"
                />
                <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                  GEAR OF DENSTINY
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  width={0}
                  height={0}
                  src="/Untitled_design-removebg-preview.png"
                  alt=""
                  className="object-cover sm:w-full w-1/2  sm:h-full"
                />
              </div>
              </div>

              <div className="w-1/5 -mt-[1000px] flex flex-col justify-center items-center">
           <div className="flex gap-1 text-nowrap items-center justify-start">
                <Image
                  width={0}
                  height={0}
                  src="/arrow (1).png"
                  alt=""
                  className="w-9 h-9"
                />
                <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                  GEAR OF DENSTINY
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  width={0}
                  height={0}
                  src="/Untitled_design-removebg-preview.png"
                  alt=""
                  className="object-cover sm:w-full w-1/2  sm:h-full"
                />
              </div>
              </div>

        </div>

        
        <div className="w-full -mt-[580px] flex justify-center items-center">
          
          <div className="w-1/2 flex gap-y-3 flex-col text-white justify-center items-center">
          
          <div className="flex gap-1 -ml-[205px] text-nowrap items-center justify-start">
                <Image
                  width={0}
                  height={0}
                  src="/arrow (1).png"
                  alt=""
                  className="w-9 h-9"
                />
                <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                 KARMA POWER PROFILE
                </p>
              </div>
         
            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col -mt-4">
                <label className="text-[11px] mb-1">Damage</label>
                <input type="text" className="py-2 px-1 w-[40px]  bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col -mt-4">
                <label className="text-[11px] mb-1">Damage</label>
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
            </div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                <label className="text-[11px]">Damage</label>
                {/* <input type="text" className="py-2 px-1 w-[40px]  border border-gray-300"/> */}
              </div>
              <div className="flex flex-col ">
                {/* <label>Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px]  bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>


            </div>
            
            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                <label className="text-[11px]">Damage</label>
                {/* <input type="text" className="py-2 px-1 w-[40px]  border border-gray-300"/> */}
              </div>
              <div className="flex flex-col ">
                {/* <label>Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>

            <div className="w-full flex justify-start pl-2">-------------------------------------------------------------</div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px]  bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                <label className="text-[11px]">Damage</label>
                {/* <input type="text" className="py-2 px-1 w-[40px]  border border-gray-300"/> */}
              </div>
              <div className="flex flex-col ">
                {/* <label>Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>

            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px]  bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>


            <div className="flex w-full px-3 items-center gap-2">
              <p className="text-nowrap">Basic Attack:</p>
              <input type="text" className="py-2 px-1 bg-[#343A40] border-[2px] border-gray-500 "/>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px]  bg-[#343A40] border-[2px] border-gray-500 "/>

              </div>
              <div className="flex flex-col ">
                {/* <label className="text-xs mb-1">Damage</label> */}
                <input type="text" className="py-2 px-1 w-[40px] bg-[#343A40] border-[2px] border-gray-500 "/>
              </div>
            </div>


          </div>
        </div>

        {/* <div className="w-full  -mt-[700px] flex justify-end items-end ">
          <div className="bg-blue-400 w-[30%]  h-[700px]">
            <div className="w-full flex justify-between">
              <div className="w-[30%] flex flex-col">
                <div className="flex justify-between">
                <p>80</p>
                <input type="text" name="" className="w-[40px]" id="" />
                </div>
              </div>

              <div className="w-[30%]">

              </div>

              <div className="w-[30%]">

              </div>

            </div>

          </div>

        </div> */}

        
      </div>
    </div>
  );
};
export default Charactersheet;
