import Image from 'next/image';
import React, { useRef } from 'react'; // Import useRef from React

interface ImageUpload {
  className: string;
  coverImageSrc: string | null;
  onCoverProfileImage: (imageUrl: string | null) => void;
  imageClass:string
}

const ImageUpload: React.FC<ImageUpload> = ({
  className,
  coverImageSrc,
  onCoverProfileImage,
  imageClass,
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
      className={`${className} group flex  border-2 border-gray-400  `}
    >
      <div className="relative w-full bg-gray-500 hover:opacity-90">
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
          <Image src={coverImageSrc} width={100} height={100} className='w-full h-full  object-cover z-30' alt={''}/>
        )}
        {!coverImageSrc && (
          <Image
            src={'/images/login/topright.png'}
            width={100}
            height={100}
            className="w-full h-full object-cover z-40"
            alt="\\\\group\\image"
          />
        )}
        <div
          className="hidden group-hover:flex absolute top-0 left-0 w-full  bg-transparent  p-4 flex-col justify-center items-center cursor-pointer "
          onClick={handleUploadImage}
        >
          <Image
            src={'/images/profile/Subtract.webp'}
            alt=""
            width={22}
            height={22}
            className={imageClass}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
