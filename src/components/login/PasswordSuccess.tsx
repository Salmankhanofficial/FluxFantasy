import React from 'react';
import next from 'next';
import Image from 'next/image';

interface PasswordSuccessProps {
  mainClassName: string;
  next?: () => void;
}

const PasswordSuccess: React.FC<PasswordSuccessProps> = ({
  mainClassName,
  next,
}) => {
  return (
    <div className={`flex justify-center items-center w-full ${mainClassName}`}>
      <div className="w-full flex flex-col px-14 py-14 bg-[ #FFFFFF] shadow-xl rounded-[10px]">
        <div className="flex flex-col gap-3 items-center">
          <Image
            src="/images/login/tickpassword.png"
            className="w-24 sm:w-36 lg:w-[164px]"
            alt={'tickpassword'}
            width={0}
            height={0}
          />
          <p className="text-[#153060] text-3xl lg:text-[45px] font-OpenSans leading-[54px]">
            Successfully
          </p>
          <p className="text-[#828282] text-base font-OpenSans leading-6">
            Your password has been reset successfully
          </p>
        </div>

        <button
          className="bg-[#1E4178] rounded-md text-white py-3 mt-4 text-base font-semibold font-OpenSans leading-6"
          onClick={next}
        >
          {' '}
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default PasswordSuccess;
