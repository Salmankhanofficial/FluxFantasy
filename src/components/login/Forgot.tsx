import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Input = dynamic(() => import('@/components/Input'), { ssr: false });

interface Props {
  className?: string;
  next?: () => void;
}

const ForgotPassword: React.FC<Props> = ({ className, next }) => {
  return (
    <div
      className={`flex w-full justify-center items-center px-2 py-4 md:px-14 md:py-8 bg-[#FFFFFF] shadow-2xl rounded-xl ${className}`}
    >
      <div className="w-full flex flex-col py-8">
        <p className="text-4xl sm:text-[45px] whitespace-nowrap font-OpenSans leading-[54px] text-[#153060]">
          Forgot password
        </p>
        <p className="text-base font-OpenSans leading-6 text-[#828282] mt-5">
          Enter your email for the verification proccess,we will send 4 digits
          code to your email.
        </p>

        <label className="text-sm font-OpenSans leading-5 text-[#153060] mt-4">
          Email{' '}
        </label>
        <Input
          placeholder="email@example.com"
          type="email"
          className="border-[#9BADCA] rounded-[5px] px-2 py-4 mt-1"
          inputClassName="focus:border-none focus:outline-none min-width-0 bg-transparent text-[#1E4178] text-base font-OpenSans leading-[24px] placeholder:text-[#1E4178] "
        />

        <button
          className="bg-[#1E4178] rounded-[5px] text-white py-[18px] mt-6 text-base font-semibold font-OpenSans leading-6"
          onClick={next}
        >
          {' '}
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
