"use client";

import {
  VscAccount,
  VscArchive,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";
import Dock from "@/components/ui/dock/Dock";

const DockWrapper = () => {
  const items = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () => alert("Home"),
    },
    {
      icon: <VscArchive size={20} />,
      label: "Archive",
      onClick: () => alert("Archive"),
    },
    {
      icon: <VscAccount size={20} />,
      label: "Profile",
      onClick: () => alert("Profile"),
    },
    {
      icon: <VscSettingsGear size={20} />,
      label: "Settings",
      onClick: () => alert("Settings"),
    },
  ];

  return <Dock items={items} className="" />;
};

export default DockWrapper;
