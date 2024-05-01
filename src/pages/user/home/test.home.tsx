import Header from "@/components/Header1";
import { AffiliteIcon } from "@/components/icon";
import { useRouter } from "next/router";
import React from "react";
import { FaLandmarkFlag } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

const Index = () => {
  const router = useRouter();
  const characterData=[
    {
      title:"Lorem ipsum dolor",
      img:"/images/character1.png"
    },

     {
      title:"Lorem ipsum dolor",
      img:"/images/feature2.png"
    },

     {
      title:"Lorem ipsum dolor",
      img:"/images/character3.png"
    },
     {
      title:"Lorem ipsum dolor",
      img:"/images/character1.png"
    },

     {
      title:"Lorem ipsum dolor",
      img:"/images/character3.png"
    },
    {
      title:"Lorem ipsum dolor",
      img:"/images/feature2.png"
    },

  ]
  return (
    <div className="bg-black  ">
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
        <div className="absolute top-24 left-20 text-white">
          <div className="text-4xl font-bold">Hi, Chris Moujaes</div>
          <div className="text-base leading-6 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum<br/>
            totam, libero dolorem nam aliquam veniam sint fuga minus amet M <br/>
            excepturi rem sunt eaque, suscipit dolorum nobis unde corrupti<br/>
            veritatis quos.
           
           
          </div>
        </div>
      </div>
      {/* Player Details */}
      <div className="w-full py-12 flex  flex-col md:flex-row bg-black ">
        <div className="w-full md:ml-8 md:w-[40%]">
          <img
            src="/images/about.png"
            className="w-full md:w-[400px] h-auto rounded shadow-4xl"
            alt="Player Profile"
          />
        </div>
        <div className="text-white px-4  md:px-1 py-4">
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

      <div className="flex w-full  justify-between  mx-auto px-4 md:px-8  items-center">
        <h1 className="text-green-500  md:pl-[160px] mt-4 md:mt-0 text-nowrap content-center text-2xl md:text-3xl ">
          Character Library
        </h1>

        <button onClick={()=>router?.push('/user/charactersheet')} className="text-white px-1 sm:px-2 text-[12px] sm:text-base font-bold py-2 mt-4 rounded-md bg-green-500 hover:bg-green-800  text-nowrap hover:font-norml">
          Create New Character
        </button>
      </div>

      <div className="flex flex-wrap justify-center bg-black py-4 w-full gap-y-8 px-6 md:px-1 sm:w-full lg:w-[70%] mx-auto gap-3">
  {characterData?.map((character,index)=>(
    <div  key={index} className="border border-green-500 rounded-xl px-4 py-4 w-full md:w-[48%] lg:w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-100">
      <img
        src={character?.img}
        className="rounded-xl w-full hover:w-full"
      />
      <h1 className="text-white text-center py-1 text-xl hover:text-green-500 cursor-pointer transition-colors duration-300 delay-100">
        {character?.title}
      </h1>
    </div>
  ))}
</div>

    </div>
  );
};

export default Index;
