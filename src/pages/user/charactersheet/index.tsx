//   /* eslint-disable @next/next/no-img-element */
//   import Faction from "@/components/Faction";
//   import ImageUpload from "@/components/ImageUpload";
//   import Identity from "@/components/form/Identity";
//   import React, { useState } from "react";

//   const TestPage: React.FC = () => {
//     const checkboxesData = [
//         { id: 1, label: 'Escape Artist' },
//         { id: 2, label: 'Stealth Master' },
//         { id: 3, label: 'Lockpick Specialist' },
//         { id: 4, label: 'Disguise Expert' },
//         { id: 5, label: 'Sleight of Hand Pro' },
//         // Add more checkboxes as needed
//       ];
//     const handleCheckboxChange = (id: number) => {
//       console.log(`Checkbox with id ${id} changed`);
//     };
//     const [coverImageSrc, setCoverImageSrc] = useState<string | null>(null);

//     const handleCoverProfileImage = (imageUrl: string | null) => {
//       setCoverImageSrc(imageUrl);
//     };
//     return (
//       <div className="w-full px-5 flex flex-col justify-center items-center">
//         <div className="w-full flex justify-between">
//           <div className="flex flex-col w-[13%]  ">
//             <p className="font-bold tracking-[3px] gap-2">FLUX FANTASY.</p>
//             <p>CHARACTER STARTER</p>
//           </div>
//           <div className=" flex justify-center items-center gap-2 w-[85%]">
//             <p className="text-nowrap">Player Name</p>
//             <input type="text" className="w-full border-2  py-2" />
//           </div>
//         </div>

//         <div className="flex w-full gap-2">
//           <div className="flex flex-col w-[33%] ">
//             <div className="flex gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </div>
//             <ImageUpload
//               className="  h-full w-full"
//               coverImageSrc={coverImageSrc}
//               onCoverProfileImage={handleCoverProfileImage}
//               imageClass={"mt-48"}
//             />
//           </div>

//           <div className="flex flex-col w-full  ">
//             <div className="flex w-full gap-2">
//               <div className=" flex flex-col  w-[70%] ">
//               <div className="flex gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>

//             </div>
//             <div className="">
//             <Identity />
//             </div>
//               </div>
//               <div className="flex flex-col w-[30%]  ">
//               <div className="flex gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>

//             </div>
//             <div className="flex justify-center">
//             <img src="/system.png" alt="" className=" object-cover "/>
//             </div>
//               </div>
//             </div>
//             <div className="flex w-full gap-2 mt-[-10px]">
//               <div className="flex flex-col w-[50%]  mt-2">
//               <div className="flex gap-1 items-center justify-start mt-[-20px]">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p className="">PORTRAIT</p>

//             </div>
//               <Faction checkboxes={checkboxesData} onCheckboxChange={handleCheckboxChange} />

//               </div>
//               <div className ="h-full w-[50%]  mt-2">
//     <div className="flex gap-1 items-center justify-start mt-[-20px] ">
//         <img src="/right.png" alt="" className="w-9 h-9" />
//         <p>PORTRAIT</p>
//     </div>
//     <div className="w-full h-[89%]">
//         <textarea className="w-full h-full border-2 resize-none"/>
//     </div>
// </div>

//             </div>
//           </div>
//         </div>

//         <div className="flex w-full items-center justify-center h-[150px] gap-2">
//         <div className ="h-full w-[62%]  mt-2 ">
//     <div className="flex gap-1 items-center justify-start  ">
//         <img src="/right.png" alt="" className="w-9 h-9" />
//         <p>PORTRAIT</p>
//     </div>
//     <div className="w-full h-[84%]">
//         <textarea className="w-full h-full border-2 resize-none"/>
//     </div>
// </div>

// <div className="flex flex-col w-[37%]  mt-[20px]">
//   <div className="flex flex-col">
//   <div className="flex gap-1 items-center justify-start  ">
//         <img src="/right.png" alt="" className="w-9 h-9" />
//         <p>PORTRAIT</p>
//     </div>
//     <input type="text" className="w-full border-2  py-2" />

//   </div>
//   <div className="flex flex-col">
//   <div className="flex gap-1 items-center justify-start ">
//         <img src="/right.png" alt="" className="w-9 h-9" />
//         <p>PORTRAIT</p>
//     </div>
//     <input type="text" className="w-full border-2  py-2" />

//   </div>

// </div>

//         </div>

//         {/*

//           <ImageUpload
//                   className="  h-[205px] w-[205px]"
//                   coverImageSrc={coverImageSrc}
//                   onCoverProfileImage={handleCoverProfileImage} imageClass={'mt-20'}      /> */}
//       </div>
//     );
//   };

//   export default TestPage;

// import Faction from "@/components/Faction";
// import ImageUpload from "@/components/ImageUpload";
// import Identity from "@/components/form/Identity";
// import React, { useState } from "react";

// const TestPage: React.FC = () => {
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
//     <div className="w-full px-5 flex flex-col justify-center items-center">

//         {/* logo $ Input */}
//       <div className="w-full flex justify-between">
//         <div className="flex flex-col w-[13%]  ">
//           <p className="font-bold tracking-[3px] gap-2">FLUX FANTASY.</p>
//           <p>CHARACTER STARTER</p>
//         </div>
//         <div className="flex justify-center items-center gap-2 w-[85%]">
//           <p className="text-nowrap">Player Name</p>
//           <input type="text" className="w-full border-2  py-2" />
//         </div>
//       </div>



//       <div className="flex flex-col md:flex-row w-full gap-2">

//         {/* Image Upload */}
//         <div className="flex flex-col w-full md:w-[32%] ">
//           <div className="flex gap-1 items-center justify-start">
//             <img src="/right.png" alt="" className="w-9 h-9" />
//             <p>PORTRAIT</p>
//           </div>
//           <ImageUpload
//             className="w-full h-full"
//             coverImageSrc={coverImageSrc}
//             onCoverProfileImage={handleCoverProfileImage}
//             imageClass="mt-48"
//           />
//         </div>

//         <div className="flex flex-col w-full md:w-[67%] ">

//         {/* <Identity /> form */}
//           <div className="flex flex-col md:flex-row w-full gap-2">
//             <div className="flex flex-col w-full md:w-[70%] ">
//               <div className="flex gap-1 items-center justify-start">
//                 <img src="/right.png" alt="" className="w-9 h-9" />
//                 <p>PORTRAIT</p>
//               </div>
//               <div className="">
//                 <Identity />
//               </div>
//             </div>
//             <div className="flex flex-col w-full md:w-[30%]  ">
//               <div className="flex gap-1 items-center justify-start">
//                 <img src="/right.png" alt="" className="w-9 h-9" />
//                 <p>PORTRAIT</p>
//               </div>
//               <div className="flex justify-center">
//                 <img src="/system.png" alt="" className="object-cover" />
//               </div>
//             </div>
//           </div>


//           <div className="flex flex-col md:flex-row w-full gap-2 mt-[-40px]">

//           {/* Faction checkBox */}
//             <div className="flex flex-col w-full md:w-[50%] mt-2">
//               <div className="flex gap-1 items-center justify-start ">
//                 <img src="/right.png" alt="" className="w-9 h-9" />
//                 <p className="">PORTRAIT</p>
//               </div>
//               <Faction
//                 checkboxes={checkboxesData}
//                 onCheckboxChange={handleCheckboxChange}
//                 className="py-5"
//               />
//             </div>

//             {/* Text-area */}
//             <div className="flex flex-col w-full md:w-[50%] mt-2">


//               <div className="flex gap-1 items-center justify-start  ">
//                 <img src="/right.png" alt="" className="w-9 h-9" />
//                 <p>PORTRAIT</p>
//               </div>
//               <div className="w-full h-[100px] md:h-[85%]">
//                 <textarea className="w-full h-full border-2 resize-none" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


// {/* Midal Section */}
//       <div className="flex flex-col md:flex md:flex-row w-full items-center justify-center h-full md:h-[160px] gap-2  md:mt-0">
//         <div className="flex flex-col w-full h-full md:w-[62%]  mt-4">
//           <div className="flex gap-1 items-center justify-start">
//             <img src="/right.png" alt="" className="w-9 h-9" />
//             <p>PORTRAIT</p>
//           </div>
//           <div className="w-full h-[100px] md:h-[84%]">
//             <textarea className="w-full h-full border-2 resize-none" />
//           </div>
//         </div>

//         <div className="flex flex-col w-full md:w-[37%]  mt-[20px]">
//           <div className="flex flex-col">
//             <div className="flex gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </div>
//             <input type="text" className="w-full border-2 py-2" />
//           </div>
//           <div className="flex flex-col ">
//             <div className="flex gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </div>
//             <input type="text" className="w-full border-2 py-2" />
//           </div>
//         </div>
//       </div>

//       <div className="flex w-full gap-2 mt-10">
//         <div className="w-1/2 flex flex-col px-2 ">
//           <fieldset className="border-r-[4px] border-t-[4px] border-gray-300">
//             <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </legend>

//             <div className="flex flex-col pr-2">
//               <label>Stage Name</label>
//               <input
//                 type="text"
//                 className="w-full border-[4px] border-gray-300 py-2"
//               />
//             </div>

//             <div className="w-full flex gap-2">
//               <div className="w-1/2">
//                 <p>afaq hussain form pakistan</p>
//                 <div className="mt-2">
//                   {" "}
//                   <Faction
//                     checkboxes={checkboxesData}
//                     onCheckboxChange={handleCheckboxChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-1/2 flex pr-2">
//                 <div className="flex flex-col w-full ">
//                   <div className="flex flex-col">
//                     <div className="flex gap-1 items-center justify-start ">
//                       <img src="/right.png" alt="" className="w-9 h-9" />
//                       <p className="">PORTRAIT</p>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full border-[4px] border-gray-300 py-2"
//                     />
//                   </div>
//                   <div className="flex flex-col mt-6">
//                     <div className="flex gap-1 items-center justify-start">
//                       <img src="/right.png" alt="" className="w-9 h-9" />
//                       <p>PORTRAIT</p>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full border-[4px] border-gray-300 py-2"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className=" w-full flex  gap-4 mt-5  border-gray-500">
//               <div className="w-1/2 flex">
//                 <div className="flex w-full gap-2">
//                   <div className="w-1/2">
//                     <p>afaq hussan</p>
//                     <div className="border-[4px]  border-gray-500 h-[630px]"></div>
//                     <p>afaq hussain</p>
//                   </div>
//                   <div className="w-1/2 ">
//                     <p>afaq hussan</p>
//                     <div className="border-[4px]  border-gray-500 h-[630px]"></div>
//                     <p>afaq hussain</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-1/2 flex flex-col mr-2 border-r-[4px] border-gray-500">
//                 <p className="w-full text-end">Some text</p>

//                 {data.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex w-full gap-4 items-center justify-center "
//                   >
//                     <p className="text-nowrap mt-8">{item.name}</p>
//                     <div className="pr-8 w-full">
//                       <input
//                         type="text"
//                         className="w-full border-b-[4px] border-gray-300 py-2 "
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </fieldset>
//         </div>
//         <div className="w-[25%] flex flex-col ">
//           <fieldset className="border-r-[4px] border-t-[4px] border-gray-300 pr-2">
//             <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </legend>
//             <div className="w-full flex flex-col  bg-slate-300 px-4 pb-10">
//               <div className="flex flex-col ">
//                 <label>Stage Name</label>
//                 <input
//                   type="text"
//                   className="w-full border-[4px] border-gray-300 py-2"
//                 />
//               </div>
//               <div className="flex flex-col w-full mt-2">
//                 <label>Stage Name</label>
//                 <div className="w-full h-[450px] ">
//                   <textarea className="w-full h-full border-2 resize-none" />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full mt-2">
//                 <label>Stage Name</label>
//                 <div className="w-full h-[250px] ">
//                   <textarea className="w-full h-full border-2 resize-none" />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full mt-2">
//                 <label>Stage Name</label>
//                 <div className="w-full h-[50px] ">
//                   <textarea className="w-full h-full border-2 resize-none" />
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </div>

//         <div className="w-[25%] flex flex-col ">
//           <fieldset className="border-r-[4px] border-t-[4px] border-gray-300 pr-2">
//             <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
//               <img src="/right.png" alt="" className="w-9 h-9" />
//               <p>PORTRAIT</p>
//             </legend>
//             <div className="w-full flex flex-col  bg-slate-300 px-4 pb-10">
//               <div className="flex flex-col w-full mt-2">
//                 <label>Stage Name</label>
//                 <div className="w-full h-[520px] ">
//                   <textarea className="w-full h-full border-2 resize-none" />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full mt-2">
//                 <label>Stage Name</label>
//                 <div className="w-full h-[330px] ">
//                   <textarea className="w-full h-full border-2 resize-none" />
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPage;





import Faction from "@/components/Faction";
import ImageUpload from "@/components/ImageUpload";
import Identity from "@/components/form/Identity";
import React, { useState } from "react";

const TestPage: React.FC = () => {
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
    <div className="w-full px-5 flex flex-col justify-center   items-center">
    <div className="w-[98%] px-5 flex flex-col justify-center  border-4 my-8  items-center">

      {/* Logo & Input */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:w-[40%] mb-2 md:mb-0">
          <p className="font-extrabold tracking-[3px] gap-2 whitespace-nowrap text-4xl">FLUX FANTASY.</p>
          <p>CHARACTER STARTER</p>
        </div>
        <div className="flex justify-center items-center gap-2 w-full md:w-[85%]">
          <p className="text-nowrap font-medium">Player Name</p>
          <input type="text" className="w-full border-2 py-2" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-2">

        {/* Image Upload */}
        <div className="flex flex-col w-full md:w-[32%] ">
          <div className="flex gap-1 items-center justify-start">
            <img src="/right.png" alt="" className="w-9 h-9" />
            <p className="font-semibold">PORTRAIT</p>
          </div>
          <ImageUpload
            className="w-full h-full"
            coverImageSrc={coverImageSrc}
            onCoverProfileImage={handleCoverProfileImage}
            imageClass="mt-48"
          />
        </div>

        <div className="flex flex-col w-full md:w-[67%] ">

          {/* Identity Form */}
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex flex-col w-full md:w-[70%] ">
              <div className="flex gap-1 items-center justify-start">
                <img src="/right.png" alt="" className="w-9 h-9" />
                <p className="font-semibold">IDENTITY</p>
              </div>
              <div className="">
                <Identity />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[30%]  ">
              <div className="flex gap-1 items-center justify-start">
                <img src="/right.png" alt="" className="w-9 h-9" />
                <p  className="font-semibold">GEAR OF DENSTINY</p>
              </div>
              <div className="flex justify-center">
                <img src="/system.png" alt="" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2 mt-[-40px]">

            {/* Faction Checkbox */}
            <div className="flex flex-col w-full md:w-[50%] mt-2">
              <div className="flex gap-1 items-center justify-start ">
                <img src="/right.png" alt="" className="w-9 h-9" />
                <p  className="font-semibold">FACTION</p>
              </div>
              <Faction
                checkboxes={checkboxesData}
                onCheckboxChange={handleCheckboxChange}
                className="py-5"
              />
            </div>

            {/* Text Area */}
            <div className="flex flex-col w-full md:w-[50%] mt-2">
              <div className="flex gap-1 items-center justify-start  ">
                <img src="/right.png" alt="" className="w-9 h-9" />
                <p  className="font-semibold">PERSONALITY</p>
              </div>
              <div className="w-full h-[100px] md:h-[85%]">
                <textarea className="w-full h-full border-2 resize-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex md:flex-row w-full items-center justify-center h-full md:h-[160px] gap-2  md:mt-0">
        <div className="flex flex-col w-full h-full md:w-[62%]  mt-4">
          <div className="flex gap-1 items-center justify-start">
            <img src="/right.png" alt="" className="w-9 h-9" />
            <p  className="font-semibold">BACKSTORY</p>
          </div>
          <div className="w-full h-[100px] md:h-[84%]">
            <textarea className="w-full h-full border-2 resize-none" />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[37%]  mt-[20px]">
          <div className="flex flex-col">
            <div className="flex gap-1 items-center justify-start">
              <img src="/right.png" alt="" className="w-9 h-9" />
              <p  className="font-semibold">STRENGTHS</p>
            </div>
            <input type="text" className="w-full border-2 py-2" />
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center justify-start">
              <img src="/right.png" alt="" className="w-9 h-9" />
              <p  className="font-semibold">FLAWS</p>
            </div>
            <input type="text" className="w-full border-2 py-2" />
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row w-full gap-2 mt-10">
  <div className="w-full md:w-1/2 flex flex-col px-2">
          <fieldset className="border-r-[4px] border-t-[4px] border-gray-300">
            <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
              <img src="/right.png" alt="" className="w-9 h-9" />
              <p  className="font-semibold">ESCAPE ARTISTS (ONLY)</p>
            </legend>

            <div className="flex flex-col pr-2">
              <label className="font-medium">Stage Name</label>
              <input
                type="text"
                className="w-full border-[4px] border-gray-300 py-2"
              />
            </div>

            <div className="w-full flex gap-2">
              <div className="w-1/2">
                <p  className="font-medium">Karmastry Specialization</p>
                <div className="mt-2">
                  <Faction
                    checkboxes={checkboxesData}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </div>
              </div>
              <div className="w-1/2 flex pr-2">
                <div className="flex flex-col w-full ">
                  <div className="flex flex-col">
                    <div className="flex gap-1 items-center justify-start ">
                      <img src="/right.png" alt="" className="w-9 h-9" />
                      <p className="font-medium">Signature Power</p>
                    </div>
                    <input
                      type="text"
                      className="w-full border-[4px] border-gray-300 py-2"
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    <div className="flex gap-1 items-center justify-start">
                      <img src="/right.png" alt="" className="w-9 h-9" />
                      <p className="font-medium">Tours Configuration</p>
                    </div>
                    <input
                      type="text"
                      className="w-full border-[4px] border-gray-300 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex  gap-4 mt-5  border-gray-500">
              <div className="w-1/2 flex">
                <div className="flex w-full gap-2">
                  <div className="w-1/2">
                    <p className="font-medium">Karma Required</p>
                    <div className="border-[4px]  border-gray-500 h-[630px]"></div>
                    <p className="font-medium">Karma Required  Increases</p>
                  </div>
                  <div className="w-1/2 ">
                    <p className="font-medium">Payback Required</p>
                    <div className="border-[4px] border-gray-500 h-[630px]"></div>
                    <p className="font-medium">Payback Required Intensifies</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col mr-2 border-r-[4px] border-gray-500">
                <p className="w-full text-end font-medium">Karmastry Power Profile</p>

                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-full gap-4 items-center justify-center "
                  >
                    <p className="text-nowrap mt-8">{item.name}</p>
                    <div className="pr-8 w-full">
                      <input
                        type="text"
                        className="w-full border-b-[4px] border-gray-300 py-2 "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </fieldset>
        </div>
         <div className="w-full md:w-1/2 flex flex-col">
          <fieldset className="border-r-[4px] border-t-[4px] border-gray-300 pr-2">
            <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
              <img src="/right.png" alt="" className="w-9 h-9" />
              <p  className="font-semibold">INK FIGHTERS (ONLY)</p>
            </legend>
            <div className="w-full flex flex-col  bg-[#EDEDED] px-4 pb-10">
              <div className="flex flex-col ">
                <label className="font-medium">Call Sign</label>
                <input
                  type="text"
                  className="w-full border-[4px] border-gray-300 py-2"
                />
              </div>
              <div className="flex flex-col w-full mt-2">
                <label className="font-medium">Sigil Design</label>
                <div className="w-full h-[450px] ">
                  <textarea className="w-full h-full border-2 resize-none" />
                </div>
              </div>

              <div className="flex flex-col w-full mt-2">
                <label className="font-medium">Sigil Power Overview</label>
                <div className="w-full h-[250px] ">
                  <textarea className="w-full h-full border-2 resize-none" />
                </div>
              </div>

              <div className="flex flex-col w-full mt-2">
                <label className="font-medium">Signature Move</label>
                <div className="w-full h-[50px] ">
                  <textarea className="w-full h-full border-2 resize-none" />
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <fieldset className="border-r-[4px] border-t-[4px] border-gray-300 pr-2">
            <legend className="font-bold mb-2 flex  gap-1 items-center justify-start">
              <img src="/right.png" alt="" className="w-9 h-9" />
              <p className="font-semibold">OTHERS (ONLY)</p>
            </legend>
            <div className="w-full flex flex-col bg-[#EDEDED] px-4 pb-10">
              <div className="flex flex-col w-full ">
                <label className="font-medium">Special Skills</label>
                <div className="w-full h-[520px] ">
                  <textarea className="w-full h-full border-2 resize-none" />
                </div>
              </div>

              <div className="flex flex-col w-full mt-2">
                <label className="font-medium">Special Equipment</label>
                <div className="w-full h-[330px] ">
                  <textarea className="w-full h-full border-2 resize-none" />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestPage;
