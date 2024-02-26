import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  open: boolean;
  toggleSidebar: () => void;
}

const defaultContextValues: SidebarContextType = {
  open: false,
  toggleSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextType>(defaultContextValues);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = (): SidebarContextType => useContext(SidebarContext);
