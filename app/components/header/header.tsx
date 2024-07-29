import React from "react";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import Image from "next/image";
import ProfileImage from '@/public/assets/perfil.jpg'
import SideBarToggle from "../sidebar/components/sideBarToggle";

export default function Header() {
  return (
    <div className="w-full px-8 py-4">
      <div className="flex justify-end items-center rounded-md p-4 bg-pallete-light-secondary dark:bg-pallete-dark-secondary relative">
        <SideBarToggle/>
        <ThemeSwitch />
        <Image src={ProfileImage} className="w-full rounded-full max-w-[4rem] min-w-[2rem] max-h-[4rem] border-2 border-pallete-light-primary object-cover" alt=""></Image>
      </div>
    </div>
  );
}
