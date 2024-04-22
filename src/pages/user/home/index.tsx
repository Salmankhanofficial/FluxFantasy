import Header from "@/components/Header";
import { AffiliteIcon } from "@/components/icon";
import React from "react";
import { FaLandmarkFlag } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

const Index = () => {
  return (
    <div className="bg-black ">
      <Header />
      {/* Banner Image */}
      <div className="relative">
        <img
          src="/images/bg1.jpg"
          className="w-full h-[400px] object-cover"
          alt="Game Banner"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-16 left-20 text-white">
          <div className="text-4xl font-bold">Hi, Chris Moujaes</div>
          <div className="text-base leading-6 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum<br/>
            totam, libero dolorem nam aliquam veniam sint fuga minus amet M <br/>
            excepturi rem sunt eaque, suscipit dolorum nobis unde corrupti<br/>
            veritatis quos.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum<br/>
            totam, libero dolorem nam aliquam veniam sint fuga minus amet M <br/>
            excepturi rem sunt eaque, suscipit dolorum nobis unde corrupti<br/>
            veritatis quos.
          </div>
        </div>
      </div>
      {/* Player Details */}
      <div className="w-full py-12 flex  bg-black ">
        <div className="ml-8 w-[40%]">
          <img
            src="/images/about.png"
            className="w-[400px] h-auto rounded shadow-4xl"
            alt="Player Profile"
          />
        </div>
        <div className="text-white py-4">
          <h1 className="text-2xl  text-green-500 font-bold">
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <div>
            <div className="flex gap-2 py-2">
              <IoGameController className="w-16 text-green-500  h-16 " />
              <div>
                <p className="text-base">Lorem ipsum dolor sit amet,</p>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  maxime eaque itaque non.
                </p>
              </div>
            </div>

            <div className="flex gap-2 py-2">
              <IoGameController className="w-16 text-green-500  h-16 " />
              <div>
                <p className="text-base">Lorem ipsum dolor sit amet,</p>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  maxime eaque itaque non.
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-2">
              <IoGameController className="w-16 text-green-500  h-16 " />
              <div>
                <p className="text-base">Lorem ipsum dolor sit amet,</p>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  maxime eaque itaque non.
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-2">
              <IoGameController className="w-16 text-green-500  h-16 " />
              <div>
                <p className="text-base">Lorem ipsum dolor sit amet,</p>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  maxime eaque itaque non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full px-8 justify-between items-center">
        <h1 className="text-white text-center ml-20 content-center text-4xl flex-auto">
          Character Library
        </h1>

        <button onClick={()=>router?.push('/user/charactersheet')} className="text-white px-2 text-base font-bold py-2 mt-4 rounded-md bg-green-500 hover:bg-green-800 hover:font-norml">
          Create New Character
        </button>
      </div>

      <div className="flex justify-between bg-black py-8 flex-wrap  w-[70%] mx-auto gap-4">
        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-100">
          <img
            src="/images/character1.png"
            className="rounded-xl hover:w-full"
          />
          <h1 className="text-white text-center py-1 text-xl hover:text-green-500 cursor-pointer transition-colors duration-300 delay-100">
            Lorem ipsum dolor
          </h1>
        </div>
        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-200">
          <img src="/images/feature2.png" className="rounded-xl hover:w-full" />
          <h1 className="text-white text-center py-2 text-xl transition-colors duration-300 delay-200">
            Lorem ipsum dolor
          </h1>
        </div>
        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300">
          <img
            src="/images/character3.png"
            className="rounded-xl hover:w-full"
          />
          <h1 className="text-white text-center py-2 text-xl transition-colors duration-300 delay-300">
            Lorem ipsum dolor
          </h1>
        </div>

        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300">
          <img
            src="/images/character3.png"
            className="rounded-xl hover:w-full"
          />
          <h1 className="text-white text-center py-2 text-xl transition-colors duration-300 delay-300">
            Lorem ipsum dolor
          </h1>
        </div>
        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300">
          <img
            src="/images/character3.png"
            className="rounded-xl hover:w-full"
          />
          <h1 className="text-white text-center py-2 text-xl transition-colors duration-300 delay-300">
            Lorem ipsum dolor
          </h1>
        </div>
        <div className="border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300">
          <img
            src="/images/character3.png"
            className="rounded-xl hover:w-full"
          />
          <h1 className="text-white text-center py-2 text-xl transition-colors duration-300 delay-300">
            Lorem ipsum dolor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
