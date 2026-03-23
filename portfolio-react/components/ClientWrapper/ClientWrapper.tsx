"use client";

import { useEffect, useState } from "react";
import "./ClientWrapper.css";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set dark mode by default on first load
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0078ff]"></div>
      </div>
    );
  }

  return <>{children}</>;
}
