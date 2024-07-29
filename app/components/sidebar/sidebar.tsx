"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarClose, SidebarOpen } from "lucide-react";
import Link from "next/link";
import { useSidebarContext } from "@/app/contexts/sideBarContext";
import ProfileImage from '@/public/assets/perfil.jpg'
import Image from "next/image";

export default function Sidebar() {
  const { open, toggleSidebar } = useSidebarContext();
  const [activeUrl, setActiveUrl] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);

  return (
    <div
      className={`flex flex-col gap-4 px-2 bg-pallete-light-secondary dark:bg-pallete-dark-secondary transition-all min-h-screen max-h-fit ${
        open ? `w-[20vw]` : `w-[10vw]`
      }`}
    >
      <div className="flex w-full justify-center items-center p-4 flex-col gap-2">
        <Image src={ProfileImage} className="w-full border-2 border-pallete-light-primary rounded-full max-w-[8rem] min-w-[2rem] max-h-[8rem] object-cover" alt=""></Image>
        <span className={`text-xl text-pallete-light-primary ${open?'':'hidden'}`}>
          <span className="dark:text-pallete-dark-accent text-pallete-light-primary font-semibold">Oi,</span> me chamo 
          <span className="dark:text-pallete-dark-accent text-pallete-light-primary font-semibold"> Thiago Carvalho,</span> é um prazer em ter 
          <span className="dark:text-pallete-dark-accent text-pallete-light-primary font-semibold"> você aqui!</span></span>
      </div>
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className={`${
            activeUrl === "/"
              ? `bg-pallete-light-accent text-pallete-light-primary dark:bg-pallete-dark-primary`
              : `bg-inherit`
          } rounded-md p-2 transition-all text-pallete-light-primary`}
        >
          Home
        </Link>
        <Link
          href="/Tecnologias"
          className={`${
            activeUrl.startsWith("/Tecnologias")
              ? `bg-pallete-light-accent text-pallete-light-primary dark:bg-pallete-dark-primary`
              : `bg-inherit`
          } rounded-md p-2 transition-all text-pallete-light-primary`}
        >
          Tecnologias utilizadas
        </Link>
        <Link
          href="/Conquistas"
          className={`${
            activeUrl.startsWith("/Conquistas")
              ? `bg-pallete-light-accent text-pallete-light-primary dark:bg-pallete-dark-primary`
              : `bg-inherit`
          } rounded-md p-2 transition-all text-pallete-light-primary`}
        >
          Conquistas
        </Link>
        <Link
          href="/Projetos"
          className={`${
            activeUrl.startsWith("/Projetos")
              ? `bg-pallete-light-accent text-pallete-light-primary dark:bg-pallete-dark-primary`
              : `bg-inherit`
          } rounded-md p-2 transition-all text-pallete-light-primary`}
        >
          Projetos
        </Link>
        <Link
          href="/Curriculo"
          className={`${
            activeUrl.startsWith("/Curriculo")
              ? `bg-pallete-light-accent text-pallete-light-primary dark:bg-pallete-dark-primary`
              : `bg-inherit`
          } rounded-md p-2 transition-all text-pallete-light-primary`}
        >
          Curriculos
        </Link>
      </nav>
    </div>
  );
}
