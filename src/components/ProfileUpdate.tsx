import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ProfileImageUpdate from './ProfileImageUpdate';

interface ProfileUpdateProps {
  className: string;
  coverImageUrl: string | null;
  onCoverImageChange: (imageUrl: string | null) => void;
}

const ProfileUpdate: React.FC<ProfileUpdateProps> = ({
  className,
  coverImageUrl,
  onCoverImageChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl, 'image2');
      onCoverImageChange(imageUrl); // Call the callback function with the new image URL
    }
  };
  const [coverImageSrc, setCoverImageSrc] = useState<string | null>(null);

  const handleCoverImageChange = (imageUrl: string | null) => {
    setCoverImageSrc(imageUrl);
  };

  return (
    <>
      <div
        className={`${className}  group w-full flex card-shadow background  rounded-lg`}
      >
        <div className="relative w-full bg-[#3A5670] hover:opacity-80">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          {coverImageUrl && (
            // <img
            //   src={coverImageUrl}
            //   alt=""
            //   width={50}
            //   height={50}
            //   className="w-full h-full object-cover z-10"
            // />
            <Image
              src={coverImageUrl}
              width={50}
              height={40}
              className="w-full h-[176px] object-cover z-10"
              alt={''}
            />
          )}
          <div
            className="hidden group-hover:flex absolute 
          top-0 left-0 w-full h-[200px] bg-transparent
          rounded-lg shadow-lg p-4 flex-col justify-center 
          items-center cursor-pointer"
            onClick={handleUploadClick}
          >
            <Image
              src="/images/profile/image-fill.webp"
              alt=""
              width={22}
              height={22}
              className=""
            />
            <p className="text-[#431a1a] text-sm font-semibold">
              {coverImageUrl ? '' : 'Add your header image'}
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute top-28 left-14 sm:left-20">
        <ProfileImageUpdate
          className={''}
          coverImageSrc={coverImageSrc}
          onCoverProfileImage={handleCoverImageChange}
        />
      </div>
    </>
  );
};

export default ProfileUpdate;
