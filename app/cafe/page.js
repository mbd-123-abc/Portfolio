/*Mahika Bagri*/
/*August 1 2026*/   

"use client";
import { useState, useEffect } from "react";
import DesktopCafe from "./desktopCafe";
import MobileCafe from "./mobileCafe";

export default function Page() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    
    checkSize(); 
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile ? <MobileCafe /> : <DesktopCafe />;
}