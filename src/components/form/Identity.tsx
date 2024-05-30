import React from 'react'
import Input from '../Input'
const Identity = () => {
  return (
    <div className='w-full font-mediumbg-black text-gray-200 px-4 pb-8 text-xs sm:text-sm md:text-base'>
        <h1 className='mb-2 '>character Name</h1>
        <input type='text ' className='py-1 px-2 bg-[#343A40] border-[2px] border-gray-500 w-full rounded-sm  ' />
      <div className='flex  flex-col md:flex-row justify-between py-2  gap-2 items-center w-full'>
        <div className='w-full flex gap-1 md:w-1/2'>
        <div className='w-1/2'>
          <h1 className='mb-2 text-gray-200'>Age</h1>
          <input type='text ' className='py-1  w-full rounded-sm bg-[#343A40] border-[2px] border-gray-500'  />
        </div>
        <div  className='w-1/2 '>
          <h1 className='mb-2 text-gray-200'>Gender</h1>
          <input type='text ' className='py-1  w-full rouded-sm bg-[#343A40] border-[2px] border-gray-500'  />
        </div>
        </div>
      <div className='w-full  flex md:w-1/2'>
      <div className='w-1/2   '>
          <h1 className='mb-2 text-gray-200'>Height</h1>
          <input type='text ' className='py-1 w-full rounded-sm bg-[#343A40] border-[2px] border-gray-500'  />
        </div>
        <div  className='w-1/2 '>
          <h1 className='mb-2 text-gray-200'>weight</h1>
          <input type='text ' className='py-1 ml-1 w-full rounded-sm bg-[#343A40] border-[2px] border-gray-500'  />
        </div>
      </div>
      </div>
      <div className='flex w-full gap-2 items-center jusitfy-between '>
        <div className='w-1/2 mx-auto'>
          <h1 className='font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200'>origin</h1>
          <input type='text ' className='py-1 w-full rounded-sm bg-[#343A40] border-[2px] border-gray-500' />
        </div>
        <div className='w-1/2 mx-auto'>
          <h1 className='font-medium text-xs sm:text-sm md:text-base mb-2 text-gray-200'>Role/Rank</h1>
          <input type='text ' className='py-1 w-full rounded-sm bg-[#343A40] border-[2px] border-gray-500'/>
        </div>
      </div>
    </div>
  )
}
export default Identity