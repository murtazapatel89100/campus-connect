"use client";

import {
  VscAccount,
  VscArchive,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";
import Dock from "@/components/ui/dock/Dock";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DockWrapper = () => {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/registration")) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);

  const { isSignedIn } = useUser();
  const items = [
    {
      icon: <VscHome size={20} className="font-extrabold" color="black" />,
      label: "Home",
      onClick: () => alert("Home"),
    },
    {
      icon: <VscArchive size={20} color="black" />,
      label: "Archive",
      onClick: () => alert("Archive"),
    },
    {
      icon: <VscAccount size={20} color="black" />,
      label: "Profile",
      onClick: () => alert("Profile"),
    },
    {
      icon: <VscSettingsGear size={20} color="black" />,
      label: "Settings",
      onClick: () => alert("Settings"),
    },
  ];
  return (
    <>
      <div className={cn(hide ? "hidden" : "block")}>
        {isSignedIn && <Dock items={items} className="" />}
      </div>
    </>
  );
};

export default DockWrapper;
