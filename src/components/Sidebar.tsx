import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";


 export interface props{
  className?:string
  notificationLength:number
  menuItems:[]
 }
const Sidebar = ({className,menuItems,notificationLength}:props) => {

  // const [notificationCount, setNotificationCount] = useState(1); 
  const [color,setColor]=useState("white")
  const [sidebarIndex,setSidebarIndex]=useState(0)

 
  const handleClick=(index: number )=>{
    setSidebarIndex(index)

  }

  return (
    <div className={`${className} w-full bg-black px-4 md:px-10 min-h-screen text-white py-1`}>
      <div className='text-center '>
        <Image width={250} height={250} src="/images/sidebar/logo.png" alt='image'/>
      </div>

      <div className='flex w-full justify-between items-center'>
        <div className='text-yellow-500 text-xl'>Ella</div>
        <div className='flex gap-3 cursor-pointer'>
          <CiHeadphones className='text-white' />
          <MdOutlineMail/>
          <IoIosNotificationsOutline className={`${notificationLength > 0 ? 'text-yellow-500' : 'text-white'}`}/>
        </div>
      </div>

      <div className='py-8'>
        <ul className='space-y-2 text-sm md:text-2xl font-bold text-transform: capitalize'>
          {menuItems.map((item, index) => (
            <Link href='/' key={index}><li className={`cursor-pointer py-1 ${index==sidebarIndex ? "text-yellow-500":'text-white'}`} onClick={()=>{handleClick(index)}}>{item}</li></Link>   
          ))}
        </ul>
      </div>


      <div className='bg-gray-400 w-[300px] h-[600px] py-4'>
       
      </div>
        
    </div>
  );
};

export default Sidebar;
