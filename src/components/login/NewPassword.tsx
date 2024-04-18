import React, { ReactNode } from 'react';
import Input from '../Input';
import Button from '../Button';

interface NewPasswordProps {
  mainClassName: string;
  next?: () => void;
}

const NewPassword: React.FC<NewPasswordProps> = ({ mainClassName, next }) => {
  return (
    <div
      className={`flex justify-center  items-center w-full ${mainClassName}`}
    >
      <div className="w-full flex flex-col px-12 py-16 bg-[ #FFFFFF] shadow-xl rounded-md">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-[#153060] font-OpenSans leading-[22px]">
          New Password
        </p>
        <p className="text-sm sm:text-base font-OpenSans leading-6 py-6 text-[#828282]">
          Set the new password for your account so you can login and access all
          featuress.
        </p>

        <label className="text-[#153060] text-sm font-OpenSans leading-5">
          Enter new password
        </label>
        <Input
          placeholder="8 symbols at least"
          type="password"
          className="mt-1 px-2 py-3 bg-[#FAFAFA] rounded-[5px]"
          inputClassName="text-base leading-[24px] text-[#828282] focus:outline-none focus:border-none min-w-0 bg-transparent"
        />

        <label className="mt-4 text-[#153060] text-sm">Comfirm password</label>
        <Input
          placeholder="8 symbols at least"
          type="password"
          className="mt-1 px-2 py-3 bg-[#FAFAFA] rounded-[5px]"
          inputClassName="text-base leading-[24px] text-[#828282] focus:outline-none focus:border-none min-w-0 bg-transparent"
        />

        <Button
          className="bg-[#1E4178] rounded-[5px] text-white py-[14px] mt-4 font-semibold text-base font-OpenSans leading-6"
          type={'button'}
          onClick={next}
        >
          {' '}
          UPDATE PASSWORD
        </Button>
      </div>
    </div>
  );
};

export default NewPassword;
