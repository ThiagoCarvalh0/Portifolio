"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarClose, SidebarOpen } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeUrl, setActiveUrl] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);

  return (
    <div
      className={`flex flex-col gap-4 px-2 bg-pallete-Lighter dark:bg-pallete-Dark transition-all min-h-screen max-h-fit ${
        open ? `w-[20vw]` : `w-[10vw]`
      }`}
    >
      <div className={`flex justify-end`}>
        {open ? (
          <SidebarOpen className="w-12 h-12" onClick={() => setOpen(!open)} />
        ) : (
          <SidebarClose className="w-10 h-10" onClick={() => setOpen(!open)} />
        )}
      </div>
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className={`${
            activeUrl === "/"
              ? `bg-pallete-Light dark:bg-pallete-Darker`
              : `bg-inherit`
          } rounded-md p-2 transition-all`}
        >
          Home
        </Link>
        <Link
          href="/Tecnologias"
          className={`${
            activeUrl.startsWith("/Tecnologias")
              ? `bg-pallete-Light dark:bg-pallete-Darker`
              : `bg-inherit`
          } rounded-md p-2 transition-all`}
        >
          Tecnologias utilizadas
        </Link>
        <Link
          href="/Conquistas"
          className={`${
            activeUrl.startsWith("/Conquistas")
              ? `bg-pallete-Light dark:bg-pallete-Darker`
              : `bg-inherit`
          } rounded-md p-2 transition-all`}
        >
          Conquistas
        </Link>
        <Link
          href="/Projetos"
          className={`${
            activeUrl.startsWith("/Projetos")
              ? `bg-pallete-Light dark:bg-pallete-Darker`
              : `bg-inherit`
          } rounded-md p-2 transition-all`}
        >
          Projetos
        </Link>
        <Link
          href="/Curriculo"
          className={`${
            activeUrl.startsWith("/Curriculo")
              ? `bg-pallete-Light dark:bg-pallete-Darker`
              : `bg-inherit`
          } rounded-md p-2 transition-all`}
        >
          Curriculos
        </Link>
      </nav>
    </div>
  );
}
