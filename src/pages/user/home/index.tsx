// import Footer from "@/components/Footer";
// import Layout from "@/components/Layout";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React from "react";

// const Index = () => {
//   const router = useRouter();
//   const characterData = [
//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character1.png",
//     },

//     {
//       title: "Lorem ipsxum doldor",
//       img: "/images/feature2.png",
//     },

//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character3.png",
//     },
//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character1.png",
//     },

//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character3.png",
//     },
//     {
//       title: "Lore",
//       img: "/images/feature2.png",
//     },
//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character3.png",
//     },
//     {
//       title: "Lore",
//       img: "/images/feature2.png",
//     },
//     {
//       title: "Lorem ipsum dolor",
//       img: "/images/character3.png",
//     },

  
//   ];
//   return (
//     <Layout>
//       <div className="flex w-full bg-black  justify-end  mx-auto px-4 md:px-8  items-center">
//         <button
//           onClick={() => router?.push("/user/charactersheet")}
//           className="text-white px-1 sm:px-2 text-[12px] sm:text-base font-bold py-2 mt-4 rounded-md bg-gray-500 hover:bg-green-800  text-nowrap hover:font-norml"
//           style={{ fontFamily: 'Kallisto'   }}
//       >
//           Create New Character
//         </button>
//       </div>
//       <h1 className="text-[#F1D347] text-end pr-28  bg-black pt-4 md:mt-0 text-nowrap font-bold  text-2xl "  style={{ fontFamily: 'Kallisto'   }}>
//         Character Library
//       </h1>
//       <div className="flex flex-wrap justify-center bg-black pt-10 pb-32 w-full gap-y-8 px-20    gap-3">
//         {characterData?.map((character, index) => (
//           <div
//             key={index}
//             className=" flex flex-col justify-center items-center rounded-xl px-4 py-4 w-full md:w-[48%] lg:w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-100"
//           >
//             <Image
//               width={0}
//               height={0}
//               src={character?.img}
//               className="rounded-xl  w-[400px]  sm:w-[200px] sm:h-[200px] "
//               alt={""}
//             />
//             <h1 className="text-white text-center py-1 text-xl cursor-pointer">
//               {character?.title}
//             </h1>
//           </div>
//         ))}
//       </div>
//       <div className="">
//         <Footer className={"sm:!absolute "} />
//       </div>
//     </Layout>
//   );
// };

// export default Index;




import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const characterData = [
    {
      title: "Lorem ipsum dolor",
      img: "/images/character1.png",
    },
    {
      title: "Lorem ipsxum doldor",
      img: "/images/feature2.png",
    },
    {
      title: "Lorem ipsum dolor",
      img: "/images/character3.png",
    },
    {
      title: "Lorem ipsum dolor",
      img: "/images/character1.png",
    },
    {
      title: "Lorem ipsum dolor",
      img: "/images/character3.png",
    },
    {
      title: "Lore",
      img: "/images/feature2.png",
    },
    {
      title: "Lorem ipsum dolor",
      img: "/images/character3.png",
    },
    {
      title: "Lore",
      img: "/images/feature2.png",
    },
    {
      title: "Lorem ipsum dolor",
      img: "/images/character3.png",
    },
  ];

  return (
    <Layout>
      <div className="flex w-full bg-black justify-end mx-auto px-4 md:px-8 items-center">
        <button
          onClick={() => router?.push("/user/charactersheet")}
          className="text-white px-1 sm:px-2 text-[12px] sm:text-base font-bold py-2 mt-4 rounded-md bg-gray-500 hover:bg-green-800 text-nowrap hover:font-norml"
          style={{ fontFamily: 'Kallisto' }}
        >
          Create New Character
        </button>
      </div>
      <h1 className="text-[#F1D347] text-end pr-28 bg-black pt-4 md:mt-0 text-nowrap font-bold text-2xl" style={{ fontFamily: 'Kallisto' }}>
        Character Library
      </h1>
      <div className="flex flex-wrap justify-center bg-black pt-10 pb-32 w-full gap-y-8 px-20 gap-3">
        {characterData?.map((character, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center rounded-xl px-4 py-4 w-full md:w-[48%] lg:w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-100"
          >
            <Image
              width={0}
              height={0}
              src={character?.img}
              className="rounded-xl w-[400px] sm:w-[200px] sm:h-[200px]"
              alt=""
            />
            <h1 className="text-white text-center py-1 text-xl cursor-pointer">
              {character?.title}
            </h1>
          </div>
        ))}
      </div>
      <div>
        <Footer className="sm:!absolute" />
      </div>
    </Layout>
  );
};

export default Index;

