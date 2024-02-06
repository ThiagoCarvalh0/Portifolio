import React from "react";
import ThemeSwitch from "../themeSwitch/themeSwitch";

export default function Header() {
  return (
    <div className="w-full px-8 py-4">
      <div className="flex justify-end rounded-md p-4 bg-pallete-Lighter dark:bg-pallete-Dark">
        <ThemeSwitch />
      </div>
    </div>
  );
}
