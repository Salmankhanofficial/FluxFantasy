//@ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Data = {
  img: string;
  name: string;
  email: string;

  logo: { logo: string; title: string; link?: string }[];
};

type Props = {
  data: Data[];
};

function AccountSetup({ data }: Props) {
  const [themeView, setThemeView] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const wrapperRef = useRef(null);
  const router = useRouter();

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    if (theme === 'light') {
      document.body.style.backgroundColor = '#FFFFFF';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  };
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setThemeView(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleView = () => {
    setThemeView(!themeView);
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex shadow-md w-full rounded-md  items-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full gap-2 py-4  justify-center items-center"
          >
            <div className="flex rounded-md gap-2 h-[73px] bg-[#EEEEEE] w-full justify-center items-center">
              <Image
                src={item.img}
                alt="ProfileImage"
                width={59}
                height={59}
                className="rounded-full"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-[#80848E] text-[10.5px]">{item.email}</p>
              </div>
            </div>
            {item.logo.map((log, indx) => (
              <div
                key={indx}
                className={`flex flex-col w-full justify-center items-center ${indx == 3 ? 'border-t-2 border-[#D0D0D2] mt-4' : ''}`}
              >
                <div
                  key={indx}
                  className={`flex h-[30px] rounded-md hover:bg-[#EEEEEE] w-full justify-center items-center cursor-pointer`}
                  onClick={() => router.push(`${log.link}`)}
                >
                  <div className="flex  relative w-11/12 gap-2 items-center">
                    {/* <Image
                      src={log.logo}
                      alt="profileIcon"
                      width={10}
                      height={10}
                      className="rounded-full"
                    /> */}
                    <Image
                      src={log.logo}
                      alt="profileIcon"
                      width={10}
                      height={10}
                      className="rounded-full"
                      style={{ width: 'auto' }}
                    />
                    <p>{log.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountSetup;
