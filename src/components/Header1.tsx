import React, { useState } from 'react';
import Input from '@/components/Input';
import { TiMessage } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineBell } from 'react-icons/ai';

import { GoDotFill } from 'react-icons/go';
import NotificationModel from './NotificationModel';
import { RxCross2 } from 'react-icons/rx';
import Modal from './Modal';
import Image from './Image';
import Link from 'next/link';
import AccountSetup from './AccountSetup';
// const imgurl=require('./')
export interface Props {
  className?: string;
}
const Header = ({ className }: Props) => {
  const [showNotification, setshowNotification] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  const data = [
    {
      icon: '/images/notification/readicon.webp',
      title:
        '1 Salman by a week: Schedule first meeting between CS, Product,  and Engineering',
      name: '. Basecamp',
      department: '. DesignDrops',
      date: '· Feb 24',
      crossicon: <RxCross2 />,
    },
    {
      icon: '/images/notification/readicon.webp',
      title:
        '2 jan by a week: Schedule first meeting between Computer, Product,  and Engineering',
      name: '. Basecamp',
      department: '. DesignDrops',
      date: '· Feb 24',
      crossicon: <RxCross2 />,
    },
    {
      icon: '/images/notification/readicon.webp',
      title:
        '1 Salman by a week: Schedule first meeting between CS, Product,  and Engineering',
      name: '. Basecamp',
      department: '. DesignDrops',
      date: '· Feb 24',
      crossicon: <RxCross2 />,
    },
    {
      icon: '/images/notification/readicon.webp',
      title:
        '2 jan by a week: Schedule first meeting between Computer, Product,  and Engineering',
      name: '. Basecamp',
      department: '. DesignDrops',
      date: '· Feb 24',
      crossicon: <RxCross2 />,
    },
    {
      icon: '/images/notification/readicon.webp',
      title:
        '1 Salman by a week: Schedule first meeting between CS, Product,  and Engineering',
      name: '. Basecamp',
      department: '. DesignDrops',
      date: '· Feb 24',
      crossicon: <RxCross2 />,
    },
  ] as any;

  const Profiledata = [
    {
      img: '/images/profile.webp',
      name: 'Alimcosoft SMC PVT',
      email: 'Alimcosoft0000@gmail.com',
      logo: [
        {
          logo: '/images/profile/profileIcon.webp',
          title: 'Profile',
          link: '/employee/profile',
        },
        {
          logo: '/images/profile/accountSetting.webp',
          title: 'Account settings',
          link: '/about',
        },
        { logo: '/images/profile/theme.webp', title: 'Theme', link: '' },
        {
          logo: '/images/profile/switchAccount.webp',
          title: 'Switch account',
          link: '',
        },
        { logo: '/images/profile/logout.webp', title: 'Logout', link: '' },
      ],
    },
  ];
  return (
    <div
      className={`w-full shadow-lg z-50  rounded bg-[#F8F8F8] sticky top-0  py-2 px-1 md:px-4 flex justify-between items-center ${className}`}
    >


      <div className=' text-3xl font-bold text-blue-500'>Flux Fantacy</div>
      {/* Search Input */}
      {/* <div className=" flex  md:justify-end w-[30%] md:w-[50%]  ">
        <Input
          type="text"
          placeholder="Search here"
          className="border-none w-[20%] md:w-[70%] "
          inputClassName="w-28 sm:w-auto placeholder:text-xs sm:placeholder:text-sm ml-8 sm:ml-14 md:ml-0 px-2 py-1  !bg-[#D0D0D240]  rounded-l-md   border-none"
          sufix={<CiSearch className="w-5 h-5  rounded-xl text-white " />}
          sufixClass=" bg-[#092C4C] flex justify-center items-center  w-8 !h-full cursor-pointer rounded-r-md "
        />
      </div> */}

      {/* Icons */}
      <div className="flex space-x-1 md:space-x-3 items-center flex-end">
        <span className="p-1 bg-[#092C4C] rounded-full">
          <TiMessage className=" w-3 h-3 md:w-6 md:h-6 text-white  cursor-pointer" />
        </span>

        <span className="p-1 bg-[#092C4C] rounded-full">
          <AiOutlineBell
            onClick={() => setshowNotification(!showNotification)}
            className="w-3 h-3 md:w-6 md:h-6 text-white  cursor-pointer"
          />
        </span>
        <Link
          href={''}
          onClick={() => setshowProfile(!showProfile)}
          className="p-1 rounded-full flex relative"
        >
          <Image
            src="/images/profileImage.webp"
            alt="profile image"
            width={0}
            height={0}
            className="sm:w-[40px] w-[25px] aspect-square text-white cursor-pointer rounded-full "
          />
          <GoDotFill className="w-3 h-3 sm:w-5 sm:h-5 text-[#2AB930] bg-white border-2 border-white rounded-full bg absolute top-5 left-5 sm:top-7 sm:left-7 cursor-pointer" />
        </Link>
      </div>
      {/* {showNotification && (
        // <Modal show={true} onClose={() => setshowNotification(false)} containerClass='!right-0'>
        <>
          <div className="absolute right-10 sm:right-24 top-16 z-20  rounded-md  bg-white w-1/2  ">
            <NotificationModel data={data} />
          </div>
          <div
            onClick={() => setshowNotification(false)}
            className="fixed inset-0 bg-black z-10 opacity-60 "
          />
        </>
        // </Modal>
      )}
      {showProfile && (
        <Modal
          show={true}
          onClose={() => setshowProfile(false)}
          containerClass="!right-0"
        >
          <div className="absolute right-10 sm:right-16 top-[-240px] rounded-md   bg-white w-[70%] sm:w-[60%] md:w-1/2">
            <AccountSetup data={Profiledata} />
          </div>
        </Modal>
      )} */}
    </div>
  );
};

export default Header;
