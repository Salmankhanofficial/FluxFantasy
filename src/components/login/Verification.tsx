import React, { useRef, useState, useEffect } from 'react';
import Input from '../Input';
import Spinner from '../Spinner';

interface VerificationProps {
  mainClassName: string;
  next?: () => void;
}

const Verification: React.FC<VerificationProps> = ({ mainClassName, next }) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [timer, setTimer] = useState(5);
  const [resendClicked, setResendClicked] = useState(false);
  const [timerReset, setTimerReset] = useState(false);

  const correctCode = [1, 2, 3, 4];

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if ((timer > 0 && resendClicked && !timerReset) || !isCodeCorrect) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    // Stop the timer when the code is correct
    if (isCodeCorrect) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, isCodeCorrect, resendClicked, timerReset]);

  const handleResendClick = () => {
    setResendClicked(true);
    resetInputFields();

    // Check if the timer has reached zero before resetting
    if (timer === 0) {
      setTimer(5);
      setTimerReset(false);
    } else {
      setTimerReset(true);
    }
  };

  const resetInputFields = () => {
    inputRefs.current.forEach((input) => {
      if (input) {
        input.value = '';
      }
    });
    setError(false);
    setIsCodeCorrect(false);
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const enteredCode = inputRefs.current.map((input) => input?.value).join('');
    const isCorrectCode = enteredCode === correctCode.join('');

    setError(!isCorrectCode);
    setIsCodeCorrect(isCorrectCode);

    if (index === inputRefs.current.length - 1) {
      setLoading(true); // Show loader only on the last input

      setTimeout(() => {
        const button = document.getElementById(
          'submitButton'
        ) as HTMLButtonElement;
        button?.click();
        setLoading(false);
      }, 1000);
    }
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.currentTarget.value;

    if (event.key === 'Backspace' && value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className={`flex justify-center  items-center w-full ${mainClassName}`}
    >
      <div className="w-full flex flex-col px-10 py-14 bg-[#FFFFFF] shadow-xl rounded-md">
        <div className="flex flex-col gap-3">
          <p className="text-[#153060] text-4xl md:text-[45px] font-OpenSans leading-[52px] ">
            Verification
          </p>
          <p className="text-sm sm:text-base font-OpenSans leading-6 text-[#828282] mt-3">
            Enter your 4 digits code that you received on your email.
          </p>
          <div className="flex justify-center w-11/12 mt-5">
            <div className="flex gap-2 md:gap-4 lg:gap-6">
              {[0, 1, 2, 3].map((_, index) => (
                <Input
                  key={index}
                  type="text"
                  onChange={(e) => changeHandler(e, index)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(e, index)
                  }
                  maxlength={1}
                  className="rounded-[5px] border border-[#9BADCA]"
                  inputClassName={`w-[60px] sm:w-[70px] md:w-[84px] h-[50px] sm:h-[60px] md:h-[76px] p-5 rounded-md text-center focus:outline-none focus:border-none ${
                    error ? 'border-red-500' : ''
                  }`}
                  ref={(input: HTMLInputElement | null) =>
                    (inputRefs.current[index] = input)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pr-12 mt-3">
          <p className="text-red-500">{`00:${
            timer < 10 ? `0${timer}` : timer
          }`}</p>
        </div>
        <button
          id="submitButton"
          className="bg-[#1E4178] rounded-[5px] text-[#FFFFFF] py-[16px] mt-4 text-base font-OpenSans font-semibold leading-6 relative"
          onClick={next}
        >
          {loading ? (
            <div className="spinner ">
              <Spinner />
            </div>
          ) : (
            'VERIFY'
          )}
        </button>
        <div className="flex text-sm font-OpenSans leading-5 text-[#828282] justify-center mt-4">
          <p>
            If you didn’t receive a code!{' '}
            <span
              className="text-red-400 cursor-pointer"
              onClick={handleResendClick}
            >
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
