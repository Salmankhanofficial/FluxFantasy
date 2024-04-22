import Image from 'next/image';
import React, { useRef } from 'react'; // Import useRef from React

interface ProfileImageUpdateProps {
  className: string;
  coverImageSrc: string | null;
  onCoverProfileImage: (imageUrl: string | null) => void;
}

const ProfileImageUpdate: React.FC<ProfileImageUpdateProps> = ({
  className,
  coverImageSrc,
  onCoverProfileImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onCoverProfileImage(imageUrl);
    }
  };

  return (
    <div
      className={`${className} group flex mt-[0px] sm:mt-[0px] md:mt-0 lg:mt-0 h-[135px] w-[135px] border-2 border-white  rounded-full`}
    >
      <div className="relative w-full rounded-full bg-gray-500 hover:opacity-90">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
        {coverImageSrc && (
          // <img
          //   src={coverImageSrc}
          //   alt=""
          //   width={50}
          //   height={50}
          //   className="w-full h-full rounded-full object-cover z-30"
          // />
          <Image
            src={coverImageSrc}
            width={50}
            height={50}
            className="w-full h-full rounded-full object-cover z-30"
            alt={''}
          />
        )}
        {!coverImageSrc && (
          <Image
            src={'/images/profile/Lafayette-Cruickshank.webp'}
            width={100}
            height={100}
            className="w-full h-full rounded-full object-cover z-40"
            alt="\\\\group\\image"
          />
        )}
        <div
          className="hidden group-hover:flex absolute top-0 left-0 w-full h-[200px] bg-transparent  p-4 flex-col justify-center items-center cursor-pointer rounded-full"
          onClick={handleUploadImage}
        >
          <Image
            src={'/images/profile/Subtract.webp'}
            alt=""
            width={22}
            height={22}
            className="mb-14"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUpdate;
