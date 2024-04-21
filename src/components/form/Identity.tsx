import React from 'react'
import Input from '../Input'

const Identity = () => {
  return (
    <div className='w-full font-semibold text-lg bg-[#EDEDED] px-4 pb-8 '>

      <div>
        <h1 className='mb-2'>character Name</h1>
        <input type='text ' className='py-3 px-2 bg-white w-full rounded-sm bordeinputClassName=' />
      </div>

      <div className='flex  flex-col md:flex-row justify-between py-2  gap-2 items-center w-full'>
        <div className='w-full flex gap-1 md:w-1/2'>
        <div className='w-1/2'>
          <h1 className='mb-2'>Age</h1>
          <input type='text ' className='py-3 bg-white w-full rounded-sm'  />
        </div>

        <div  className='w-1/2 '>
          <h1 className='mb-2'>Gender</h1>
          <input type='text ' className='py-3 bg-white w-full rouded-sm'  />
        </div>
        </div>

      <div className='w-full  flex md:w-1/2'>
      <div className='w-1/2   '>
          <h1 className='mb-2'>Height</h1>
          <input type='text ' className='py-3 bg-white w-full rounded-sm'  />
        </div>

        <div  className='w-1/2 '>
          <h1 className='mb-2'>weight</h1>
          <input type='text ' className='py-3 ml-1 bg-white w-full rounded-sm'  />
        </div>
      </div>
        

       

      </div>
      <div className='flex w-full gap-2 items-center jusitfy-between'>
        <div className='w-1/2 mx-auto'>
          <h1 className='font-semibold text-lg'>origin</h1>
          <Input type='text ' className='py-3 bg-white w-full rounded-sm' inputClassName='bg-white' />
        </div>

        <div className='w-1/2 mx-auto'>
          <h1 className='font-semibold text-lg'>Role/Rank</h1>
          <Input type='text ' className='py-3 bg-white w-full rounded-sm' inputClassName='bg-white' />
        </div>
      </div>


    </div>
  )
}

export default Identity