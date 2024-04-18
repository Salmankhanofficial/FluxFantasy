import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { IoCloseOutline } from 'react-icons/io5';

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
const Forgot = dynamic(() => import('@/components/login/Forgot'), {
  ssr: false,
});
const Verification = dynamic(() => import('@/components/login/Verification'), {
  ssr: false,
});
const NewPassword = dynamic(() => import('@/components/login/NewPassword'), {
  ssr: false,
});
const PasswordSuccess = dynamic(
  () => import('@/components/login/PasswordSuccess'),
  { ssr: false }
);

function ForgotPassword({ open, setOpen }: any) {
  const [step, setStep] = useState(0);

  return (
    <Modal
      show={open}
      onClose={() => setOpen(false)}
      containerClass="py-10 !w-full md:!w-1/2 !px-4 md:!px-0"
    >
      <div className="mx-auto rounded-md bg-white relative">
        <div
          className="bg-[#E5E5E580] w-8 h-8 rounded-full flex justify-center items-center absolute top-4 right-5 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <IoCloseOutline />
        </div>
        <StepCase step={step} setStep={setStep} setOpen={setOpen} />
      </div>
    </Modal>
  );
}

export default ForgotPassword;

const StepCase = ({ step, setStep, setOpen }: any) => {
  switch (step) {
    case 1:
      return <Verification mainClassName={''} next={() => setStep(2)} />;
    case 2:
      return <NewPassword mainClassName={''} next={() => setStep(3)} />;
    case 3:
      return (
        <PasswordSuccess
          mainClassName={''}
          next={() => [setOpen(false), setStep(0)]}
        />
      );

    default:
      return <Forgot next={() => setStep(1)} />;
  }
};
