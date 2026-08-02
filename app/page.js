/*Mahika Bagri*/
/*August 1 2026*/   

"use client";
import { useState, useEffect } from "react";
import DesktopEntry from "./desktopEntry";
import MobileEntry from "./mobileEntry";

export default function Page() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    
    checkSize(); 
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile ? <MobileEntry /> : <DesktopEntry />;
}