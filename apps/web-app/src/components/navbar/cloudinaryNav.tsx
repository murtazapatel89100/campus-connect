import React from "react";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa";

const CloudinaryNav = () => {
  return (
    <>
      <div className="w-full p-4 px-10 fixed text-lg justify-between bg-[#848484] flex font-itim">
        <div className="flex items-center gap-3">
          <Image
            src={`/assets/cloudinary-logo.svg`}
            alt="Cloudinary Logo"
            height={40}
            width={40}
          />
          <p>Cloudinary Manager</p>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <FaImage height={20} width={20} />
            <p>Upload Image</p>
          </div>

          <div className="flex items-center gap-2">
            <FaFileVideo height={20} width={20} />
            <p>Upload Video</p>
          </div>

          <div className="flex items-center gap-2">
            <FaPhotoVideo height={20} width={20} />
            <p>View Assets</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudinaryNav;
