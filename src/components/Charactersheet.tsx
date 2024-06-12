import Faction from "@/components/Faction";
import ImageUpload from "@/components/ImageUpload";
import Identity from "@/components/form/Identity";
import Image from "next/image";
import React, { useState } from "react";
import ProfileImageUpdate from "./ProfileImageUpdate";
const Charactersheet: React.FC = () => {
  const [coverImageSrc, setCoverImageSrc] = useState<string | null>(null);
  const handleCoverProfileImage = (imageUrl: string | null) => {
    setCoverImageSrc(imageUrl);
  };
  const [clickedInputs, setClickedInputs] = useState<number[]>([]);

  const handleInputClick = (index: number) => {
    if (!clickedInputs.includes(index)) {
      setClickedInputs([...clickedInputs, index]);
    }
  };

  const inputClasses = (index: number) => {
    const isClicked = clickedInputs.includes(index);
    const isLeftUpper = index < 5;
    const isLeftLower = index >= 10 && index < 15;
    const colorClass = isClicked ? "bg-red-400 point" : "bg-black";
    const leftColorClass = isClicked ? "bg-green-400" : "bg-black";
    return `w-[45px] h-[50px] ${
      isLeftUpper || isLeftLower ? leftColorClass : colorClass
    } border-[1px] text-white border-gray-500`;
  };

  return (
    <div className="w-full px-5 py-5 flex flex-col justify-center items-center font-kallisto">
      <div className="w-full flex flex-col md:flex md:flex-row md:justify-between">
        <div className="w-full md:w-1/4 flex flex-col">
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
          <div className="h-[300px]">
            <ImageUpload
              className="w-full h-full  border-[2px]"
              coverImageSrc={coverImageSrc}
              onCoverProfileImage={handleCoverProfileImage}
              imageClass="mt-36 lg:mt-48"
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col">
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
          <div className="">
            <Identity />
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col">
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
                STRENGTHS
              </p>
            </div>
            <input
              type="text"
              className="w-full py-2 bg-black border-[2px] text-white border-gray-500"
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
                FLAWS
              </p>
            </div>
            <input
              type="text"
              className="w-full  py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex md:flex-row md:justify-between">
        <div className="w-full md:w-1/4 flex flex-col">
          <div className="flex flex-col mt-2">
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
            <textarea
              // type="text"
              className="w-full h-[130px] resize-none py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>

          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center justify-start">
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
            <input
              type="text"
              className="w-full  py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>

          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                MED+ KIT #
              </p>
            </div>
            <input
              type="text"
              className="w-full  py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>

          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                SEPCIAL ITEMS
              </p>
            </div>
            <textarea
              // type="text"
              className="w-full h-[130px] resize-none py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>

          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center justify-start">
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
            <textarea
              // type="text"
              className="w-full h-[80px] resize-none py-2 bg-black border-[2px] text-white border-gray-500"
            />
          </div>
        </div>

        <div className="w-full mt-0 md:-mt-[80px] md:w-[45%]">
          <div className="w-full flex flex-col">
            <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                TALENTS
              </p>
            </div>
            <div className="w-full">
              <img
                src="/Untitled_design-removebg-preview.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex gap-1 items-center justify-start">
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

            <div className="w-full flex gap-y-[10px] lg:gap-y-0 flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Basic Attack:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between -mt-3">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    <p className="text-white text-[8px]">Damage</p>
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center">
                    <p className="text-white text-[8px]">Range</p>
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Basic Defense:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p>
            <input
              type="text"
              className="w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
            /> */}
                    <p className="text-white text-[8px]">Modifier</p>
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Basic Combo:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px] mt-1 lg:mt-0 py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                    {/* <p className="text-white text-[8px]">Modifier</p> */}
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">
                    Basic Signature Move:
                  </p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px] mt-1 lg:mt-0  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                    {/* <p className="text-white text-[8px]">Modifier</p> */}
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Locomotion:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    {/* <input
              type="text"
              className="w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
            /> */}
                    <p className="text-white text-[8px]">Modifier</p>
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center  py-2">
              <div className="w-[97%] border-b-2 border-dashed py-[1px] "></div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Adv. Attack:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px] mt-1 lg:mt-0  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                    {/* <p className="text-white text-[8px]">Modifier</p> */}
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Adv. Defense:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    {/* <input
              type="text"
              className="w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
            /> */}
                    <p className="text-white text-[8px]">Modifier</p>
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">Adv. Combo:</p>
                </div>
                <div className="w-[40%] py-1 lg:py-0 mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px] mt-1 lg:mt-0  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                    {/* <p className="text-white text-[8px]">Modifier</p> */}
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-[25%]">
                  <p className="text-white text-[10px]">
                    Advanced Signature Move:
                  </p>
                </div>
                <div className="w-[40%] mt-1">
                  <input
                    type="text"
                    className="w-full py-0 bg-black border-[2px] text-white border-gray-500"
                  />
                </div>

                <div className="w-[32%] flex justify-between ">
                  <div className=" w-1/2 flex flex-col justify-center items-center">
                    {/* <p className="text-white text-[8px]">Damage</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px] mt-1 lg:mt-0  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                    {/* <p className="text-white text-[8px]">Modifier</p> */}
                  </div>

                  <div className="w-1/2 flex flex-col justify-center items-center mt-1">
                    {/* <p className="text-white text-[8px]">Range</p> */}
                    <input
                      type="text"
                      className="w-[30px] x-4-903:w-[30px] lg:w-[40px]  py-0 bg-black border-[2px] text-white border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-0 md:-mt-[150px] md:w-1/4">
          <div className="w-full flex flex-col">
            <div className="flex gap-1 items-center justify-start">
              <Image
                width={0}
                height={0}
                src="/arrow (1).png"
                alt=""
                className="w-9 h-9"
              />
              <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                GEAR OF DESTINY
              </p>
            </div>
            <div className="w-full">
              <img
                src="/Untitled_design-removebg-preview.png"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full flex flex-col">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  width={0}
                  height={0}
                  src="/arrow (1).png"
                  alt=""
                  className="w-9 h-9"
                />
                <p className="font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                  KARMA POOL
                </p>
              </div>
              <div className="w-full">
                {/* <img src="/Untitled_design-removebg-preview.png" alt="" className="w-full object-cover" /> */}
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-[40%] flex flex-col">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-between gap-4 items-center"
                  >
                    <div>
                      <p className="text-white">100</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        className={inputClasses(index)}
                        onClick={() => handleInputClick(index)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-[20%] flex justify-center pl-1">
                <img
                  src="/Screenshot_22-5-2024_4839_miro.com.jpeg"
                  className="w-[30px] h-[160px]"
                  alt=""
                />
              </div>

              <div className="w-[40%] flex flex-col">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index + 5}
                    className="w-full flex justify-between gap-4 items-center"
                  >
                    <div>
                      <input
                        type="text"
                        className={inputClasses(index + 5)}
                        onClick={() => handleInputClick(index + 5)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-center text-white py-2">
              <div className="w-[80%] border-b-2 border-t-2 border-dashed py-[1px]"></div>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-[40%] flex flex-col mb-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index + 10}
                    className="w-full flex justify-between gap-4 items-center"
                  >
                    <div>
                      <p className="text-white">100</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        className={inputClasses(index + 10)}
                        onClick={() => handleInputClick(index + 10)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-[20%]"></div>

              <div className="w-[40%] flex flex-col mb-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index + 15}
                    className="w-full flex justify-between gap-4 items-center"
                  >
                    <div>
                      <input
                        type="text"
                        className={inputClasses(index + 15)}
                        onClick={() => handleInputClick(index + 15)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Charactersheet;
