// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";
// import Button from "@/components/Button";
// import Input from "@/components/Input";
// import Image from "next/image";
// import { useRouter } from "next/router";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   dateOfBirth: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   dateOfBirth?: string;
//   password?: string;
//   confirmPassword?: string;
//   agreeTerms?: string;
// }

// const Index: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dateOfBirth: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [agreeCommunications, setAgreeCommunications] = useState(false);
//   const [errors, setErrors] = useState<Errors>({});
//   const router = useRouter();

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTermsChange = () => {
//     setAgreeTerms(!agreeTerms);
//   };

//   const handleCommunicationsChange = () => {
//     setAgreeCommunications(!agreeCommunications);
//   };

//   const validate = (): Errors => {
//     const newErrors: Errors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.dateOfBirth)
//       newErrors.dateOfBirth = "Date of Birth is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";
//     if (!agreeTerms)
//       newErrors.agreeTerms = "You must agree to the Terms of Service";

//     if (!agreeCommunications)
//       newErrors.agreeTerms = "You must agree to the message recived";

//     return newErrors;
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       router.push("/user/login");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen relative font-kallisto font-medium tracking-wider text-[#E1E2E4]">
//       <div className="bg-black absolute inset-0 h-screen z-0">
//         <Image
//           src="/images/signup/background.jpg"
//           layout="fill"
//           objectFit="contain"
//           alt="Background"
//         />
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//       </div>
//       <div className="w-full md:w-[500px]   border border-gray-500 relative bg-black">
//         <div>
//           <Image
//             width={0}
//             height={0}
//             className="w-full h-full"
//             src="/images/signup/signupLogo.png"
//             alt="signuplogo"
//           />
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="mt-4 md:mt-0 lg:mt-1 sm:mt-1 flex flex-col justify-center px-6 items-center"
//         >
//           <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-2">
//             <div className="w-full">
//               <label
//                 htmlFor="firstName"
//                 className="text-[#EBEBEB] text-xs leading-2 "
//               >
//                 First Name
//               </label>
//               <Input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="First Name"
//                 className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
//                 inputClassName="focus:outline-none focus:border-none py-[6px] pb-2 md:pt-1 px-2 bg-transparent text-[#8897AD] placeholder:text-xs text-base  leading-4"
//               />
//               {errors.firstName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
//               )}
//             </div>
//             <div className="w-full">
//               <label
//                 htmlFor="lastName"
//                 className="text-[#EBEBEB] text-xs leading-2"
//               >
//                 Last Name
//               </label>
//               <Input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Last Name"
//                 className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
//                 inputClassName="focus:outline-none placeholder:text-xs focus:border-none px-2 py-[6px] pb-2 md:pt-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
//               />
//               {errors.lastName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
//               )}
//             </div>
//             <div className="w-full">
//               <label
//                 htmlFor="email"
//                 className="text-[#EBEBEB] text-xs leading-2"
//               >
//                 Email
//               </label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="chris@gmail.com"
//                 className="bg-[#F7FBFF]  border border-[#D4D7E3] rounded-[4px] mt-1"
//                 inputClassName="focus:outline-none placeholder:text-xs focus:border-none px-2 py-[6px] pb-2 md:pt-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>
//             <div className="w-full">
//               <label
//                 htmlFor="dateOfBirth"
//                 className="text-[#EBEBEB] text-xs leading-2"
//               >
//                 Date of Birth
//               </label>
//               <Input
//                 type="date"
//                 name="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleInputChange}
//                 className="bg-[#F7FBFF] border   border-[#D4D7E3] rounded-[4px] mt-1"
//                 inputClassName="focus:outline-none text-xs focus:border-none py-[6px] pb-2 md:pt-1 px-2 bg-transparent text-[#8897AD] text-base leading-4 input-placeholder"
//               />

//               {errors.dateOfBirth && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.dateOfBirth}
//                 </p>
//               )}
//             </div>
//             <div className="w-full">
//               <label
//                 htmlFor="password"
//                 className="text-[#EBEBEB] text-xs leading-2 tracking-wider"
//               >
//                 Password
//               </label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="At least 8 characters"
//                 className="bg-[#F7FBFF] placeholder:text-xs border border-[#D4D7E3] rounded-[4px] px-2 py-[6px] pb-2 md:pt-1 mt-1"
//                 inputClassName="focus:outline-none placeholder:text-xs focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-[10px] text-nowrap mt-1">{errors.password}</p>
//               )}
//             </div>
//             <div className="w-full">
//               <label
//                 htmlFor="confirmPassword"
//                 className="text-[#EBEBEB] text-xs leading-2 tracking-wider "
//               >
//                 Confirm Password
//               </label>
//               <Input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 placeholder="At least 8 characters"
//                 className="bg-[#F7FBFF]  border border-[#D4D7E3] rounded-[4px] px-2 py-[6px] pb-2 md:pt-1 mt-1"
//                 inputClassName="focus:outline-none placeholder:text-xs focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
//               />
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div className="w-full   py-[1px]">
//             <div className="w-full flex items-center text-white text-base">
//               <input
//                 type="checkbox"
//                 checked={agreeTerms}
//                 onChange={handleTermsChange}
//                 className="mr-2 placeholder:text-xs"
//               />
//               <div className="flex space-y-1"></div>
//               <p className="text-[12px] text-nowrap sm:text-[9px]">
//                 I agree to the Terms of Service
//               </p>
//               {errors.agreeTerms && (
//                 <p className="text-red-500 text-[10px] text-nowrap pl-2 ">
//                   {errors.agreeTerms}
//                 </p>
//               )}
//             </div>
//             <div className="w-full flex items-center gap-1 text-white text-base">
//               <input
//                 type="checkbox"
//                 checked={agreeCommunications}
//                 onChange={handleCommunicationsChange}
//                 className=""
//               />
//               <p className="text-[10px] text-nowrap sm:text-[11px]">
//                 I agree to receive Email & SMS Communications from FLUX FANTASY
//               </p>
//             </div>
//           </div>
//           <div className="w-full flex justify-center mt-1 mb-8">
//             <Button
//               type="submit"
//               className="bg-[#1E4178] hover:bg-slate-700 w-full rounded-md text-[#FFFFFF] text-sm font-bold font-NotoSans leading-5 py-2"
//             >
//               Sign Up
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Index;






import React, { useState, ChangeEvent, FormEvent } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { useRouter } from "next/router";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
  agreeCommunications?: string;
}

const Index: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeCommunications, setAgreeCommunications] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleTermsChange = () => {
    setAgreeTerms(!agreeTerms);
    setErrors({ ...errors, agreeTerms: undefined });
  };

  const handleCommunicationsChange = () => {
    setAgreeCommunications(!agreeCommunications);
    setErrors({ ...errors, agreeCommunications: undefined });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!agreeTerms)
      newErrors.agreeTerms = "You must agree to the Terms of Service";
    if (!agreeCommunications)
      newErrors.agreeCommunications = "You must agree to receive SMS communications";

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      router.push("/user/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative font-kallisto font-medium tracking-wider text-[#E1E2E4]">
      <div className="bg-black absolute inset-0 h-screen z-0">
        <Image
          src="/images/signup/background.jpg"
          layout="fill"
          objectFit="contain"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="w-full md:w-[500px] border border-gray-500 relative bg-black">
        <div>
          <Image
            width={0}
            height={0}
            className="w-full h-full"
            src="/images/signup/signupLogo.png"
            alt="signuplogo"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-4 md:mt-0 lg:mt-1 sm:mt-1 flex flex-col justify-center px-6 items-center"
        >
          <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-2">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="text-[#EBEBEB] text-xs leading-2 "
              >
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none focus:border-none py-[6px] pb-2 md:pt-1 px-2 bg-transparent text-[#8897AD] placeholder:text-xs text-base leading-4"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="text-[#EBEBEB] text-xs leading-2"
              >
                Last Name
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none placeholder:text-xs focus:border-none px-2 py-[6px] pb-2 md:pt-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-[#EBEBEB] text-xs leading-2"
              >
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="chris@gmail.com"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none placeholder:text-xs focus:border-none px-2 py-[6px] pb-2 md:pt-1 bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="dateOfBirth"
                className="text-[#EBEBEB] text-xs leading-2"
              >
                Date of Birth
              </label>
              <Input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] mt-1"
                inputClassName="focus:outline-none text-xs focus:border-none py-[6px] pb-2 md:pt-1 px-2 bg-transparent text-[#8897AD] text-base leading-4 input-placeholder"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="text-[#EBEBEB] text-xs leading-2 tracking-wider"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="At least 8 characters"
                className="bg-[#F7FBFF] placeholder:text-xs border border-[#D4D7E3] rounded-[4px] px-2 py-[6px] pb-2 md:pt-1 mt-1"
                inputClassName="focus:outline-none placeholder:text-xs focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
              {errors.password && (
                <p className="text-red-500 text-[10px] text-nowrap mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#EBEBEB] text-xs leading-2 tracking-wider"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="At least 8 characters"
                className="bg-[#F7FBFF] border border-[#D4D7E3] rounded-[4px] px-2 py-[6px] pb-2 md:pt-1 mt-1"
                inputClassName="focus:outline-none placeholder:text-xs focus:border-none bg-transparent text-[#8897AD] text-base font-roboto leading-4"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className="w-full py-[1px] mt-1">
            <div className="w-full flex items-center text-white text-base">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleTermsChange}
                className="mr-2 placeholder:text-xs"
              />
              <p className="text-[12px] text-nowrap sm:text-[9px]">
                I agree to the Terms of Service
              </p>
              {errors.agreeTerms && (
                <p className="text-red-500 text-[10px] text-nowrap pl-2 mt-1">
                  {errors.agreeTerms}
                </p>
              )}
            </div>
            <div className="w-full flex items-center gap-1 text-white text-base mt-1">
              <input
                type="checkbox"
                checked={agreeCommunications}
                onChange={handleCommunicationsChange}
                className=""
              />
              <p className="text-[10px] text-nowrap sm:text-[11px]">
                I agree to receive Email & SMS Communications from FLUX FANTASY
              </p>
            </div>
            {errors.agreeCommunications && (
              <p className="text-red-500 text-[10px] text-nowrap pl-2 ">
                {errors.agreeCommunications}
              </p>
            )}
          </div>
          <div className="w-full flex justify-center mt-1 mb-8">
            <Button
              type="submit"
              className="bg-[#1E4178] hover:bg-slate-700 w-full rounded-md text-[#FFFFFF] text-sm font-bold font-NotoSans leading-5 py-2"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
