'use client'
import React from 'react';

import { SidebarClose, SidebarOpen } from 'lucide-react';
import { useSidebarContext } from '@/app/contexts/sideBarContext';

const SideBarToggle = () => {
  const { open, toggleSidebar } = useSidebarContext();

  return (
    <div className="flex justify-end absolute top-6 left-[-1rem]">
      {!open ? (
        <SidebarOpen className="w-10 h-10 fill-white dark:stroke-pallete-Lighter dark:fill-pallete-Darker" onClick={toggleSidebar} />
      ) : (
        <SidebarClose className="w-12 h-12 fill-white dark:stroke-pallete-Lighter dark:fill-pallete-Darker" onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default SideBarToggle;
