import Header from '@/components/Header';
import { AffiliteIcon } from '@/components/icon';
import React from 'react';
import { FaLandmarkFlag } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5"

const Index = () => {
  return (
    <div className='bg-black '>
      <Header />
      {/* Banner Image */}
      <div className='relative'>
        <img src='/images/bg1.jpg' className='w-full h-[400px] object-cover' alt='Game Banner' />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      {/* Player Details */}
      <div className='w-full py-12 flex  bg-black '>
        <div className='ml-8 w-[40%]'>
          <img src='/images/about.png' className='w-[400px] h-auto rounded shadow-4xl' alt='Player Profile' />
        </div>
         <div className='text-white py-4'>
            <h1 className='text-2xl  text-green-500 font-bold'>About our gaminng side</h1>
            <div>
                <div className='flex gap-2 py-2'>
                    <IoGameController className='w-16 text-green-500  h-16 '/>
                    <div>
                        <p className='text-sm'>Over 1k+ Affiliate Game Programs</p>
                        <p className='text-[12px]'>
                        Keep users informed about the gaming industry with news articles on releases, updates, and events
                        </p>
                        
                        </div>    

                  
                </div>


                <div className='flex gap-2 py-2'>
                    <IoGameController className='w-16 text-green-500  h-16 '/>
                    <div>
                        <p className='text-sm'>Great Tournaments</p>
                        <p className='text-[12px]'>
                        Keep users informed about the gaming industry with news articles on releases, updates, and events
                        </p>
                        
                        </div>    

                  
                </div>


                <div className='flex gap-2 py-2'>
                    <IoGameController className='w-16 text-green-500  h-16 '/>
                    <div>
                        <p className='text-sm'>Get Online Supports</p>
                        <p className='text-[12px]'>
                        Keep users informed about the gaming industry with news articles on releases, updates, and events
                        </p>
                        
                        </div>  
                          

                  
                </div>

                <div className='flex gap-2 py-2'>
                    <IoGameController className='w-16 text-green-500  h-16 '/>
                    <div>
                        <p className='text-sm'>Over 1k+ Affiliate Game Programs</p>
                        <p className='text-[12px]'>
                        Keep users informed about the gaming industry with news articles on releases, updates, and events
                        </p>
                        
                        </div>    

                  
                </div>
            </div>
         </div>
      </div>

   
      <div className='flex w-full px-8 justify-between items-center'>

<h1 className='text-white text-center ml-20 content-center text-4xl flex-auto'>Character Library</h1>

<button className='text-white px-2 text-base font-bold py-2 mt-4 rounded-md bg-green-500 hover:bg-green-800 hover:font-norml'>Create Character</button>
</div>



 
      <div className='flex justify-between bg-black py-8 flex-wrap  w-[70%] mx-auto gap-4'>
  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-100'>
    <img src="/images/character1.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-1 text-xl hover:text-green-500 cursor-pointer transition-colors duration-300 delay-100'>The Hunter Killer</h1>
  </div>
  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-200'>
    <img src="/images/feature2.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-2 text-xl transition-colors duration-300 delay-200'>League of Legends</h1>
  </div>
  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300'>
    <img src="/images/character3.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-2 text-xl transition-colors duration-300 delay-300'>The Hunter Killer</h1>
  </div>

  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300'>
    <img src="/images/character3.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-2 text-xl transition-colors duration-300 delay-300'>The Hunter Killer</h1>
  </div>
  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300'>
    <img src="/images/character3.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-2 text-xl transition-colors duration-300 delay-300'>The Hunter Killer</h1>
  </div>
  <div className='border border-green-500 rounded-xl px-4 py-2 w-[32%] cursor-pointer hover:scale-105 transition-transform duration-300 delay-300'>
    <img src="/images/character3.png" className='rounded-xl hover:w-full'/>
    <h1 className='text-white text-center py-2 text-xl transition-colors duration-300 delay-300'>The Hunter Killer</h1>
  </div>
</div>

    </div>
  );
};

export default Index;
