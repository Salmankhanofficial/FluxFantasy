import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { TbBrandTiktok } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className: string;
}
function Footer({className}: Props) {
  return (
    <div className={`w-full flex justify-center items-center bg-slate-900 sticky bottom-0 left-0 ${className}`}>
        <div className='w-full sm:flex sm:flex-row flex-col md:py-4  justify-between items-center text-base sm:text-[10px] md:text-sm lg:text-base'>
            <div className='w-full py-4 sm:py-0 gap-7 sm:gap-0 sm:w-1/6 flex justify-center items-center sm:justify-between  '>
               <Link href={''}> <FaSquareFacebook className='text-white'/></Link>
                <Link href={''}><FaInstagramSquare className='text-white'/></Link>
               <Link href={''}> <FaSquareTwitter className='text-white'/></Link>
               <Link href={''}> <FaSquareYoutube className='text-white'/></Link>
                <Link href={''}><TbBrandTiktok className='text-white'/></Link>
            </div>
            <div className='flex justify-center py-4 sm:py-0 items-center sm:justify-between  sm:flex sm:flex-row flex-col  w-full px-8 text-white text-nowrap'>
                <Link href={''}>
                <p>© FLUXFANTASY</p>
                </Link>

                <Link href={''}>
                <p className='flex gap-2 mb-1'><span className='hidden sm:block'>|</span> <span className='mt-[2px]'>TERM AND CONDITIONS</span></p>
                </Link>

                <Link href={''}>
                <p className='flex gap-2 mb-1'><span className='hidden sm:block'>|</span>  <span className='mt-[2px]'>FOLLWER</span></p>
                </Link>

                <Link href={''}>
                <p className='flex gap-2 mb-1'><span className='hidden sm:block'>|</span>  <span className='mt-[2px]'>HOME</span></p>
                </Link>

                <Link href={''}>
                <p className='flex gap-2 mb-1'><span className='hidden sm:block'>|</span>  <span className='mt-[2px]'>CONTACT US</span></p>
                </Link>
               

            </div>
            <div className='w-full sm:w-1/5  flex justify-center sm:justify-end text-white'>
             <Link href={''}> <p className=' py-4 sm:py-0 sm:text-base md:text-xl font-bold'>FLUX FANTASY</p>
                </Link>  
            </div>

        </div>
    </div>
  )
}

export default Footer
