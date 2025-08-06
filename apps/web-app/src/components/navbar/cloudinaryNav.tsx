"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "../../lib/utils";

import {
  FaImage,
  FaPhotoVideo,
  FaFileVideo,
  FaClipboard,
} from "react-icons/fa";

const CloudinaryNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Upload Image",
      path: "/admin/cloudinary/image",
      icon: <FaImage size={18} />,
    },
    {
      name: "Upload Video",
      path: "/admin/cloudinary/video",
      icon: <FaFileVideo size={18} />,
    },
    {
      name: "View Assets",
      path: "/admin/cloudinary/assets",
      icon: <FaPhotoVideo size={18} />,
    },
    {
      name: "Audit Logs",
      path: "/admin/cloudinary/auditlog",
      icon: <FaClipboard size={18} />,
    },
  ];

  return (
    <div className="w-full p-4 px-10 fixed text-lg justify-between bg-[#848484] flex font-itim z-50">
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
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative flex items-center gap-2 py-1",
                "transition-all duration-300",
                isActive && "font-semibold text-white"
              )}
            >
              {item.icon}
              <p className="relative z-10">{item.name}</p>

              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300",
                  isActive ? "w-full" : "w-0"
                )}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CloudinaryNav;
