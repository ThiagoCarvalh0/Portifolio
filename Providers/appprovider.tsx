"use client";
import { SidebarProvider } from "@/app/contexts/sideBarContext";
// Importe os provedores necessários
import { ThemeProvider } from "next-themes";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
      {children}
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
