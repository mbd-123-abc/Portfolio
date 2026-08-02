/*Mahika Bagri*/ 
/*August 1 2026*/ 
import Link from "next/link";

export default function MobileCafe() {
  return (
    <div 
      className="w-full overflow-x-auto overflow-y-hidden" 
      style={{ height: "675px" }}
    > 
    
      <div className="relative inline-block h-full min-w-full">
        
        <img 
          src="/Cafe.png" 
          alt="Cafe Projects" 
          className="h-full max-w-none block" 
          style={{ height: "675px" }}
          priority 
        />

   
        <Link 
          href="/coding" 
          className="absolute z-10" 
          style={{ top: "38%", left: "54%", width: "12%", height: "10%" }} 
        />
        <Link 
          href="/writing" 
          className="absolute z-10" 
          style={{ top: "30%", left: "1%", width: "15%", height: "15%" }} 
        />
        <Link 
          href="/contact" 
          className="absolute z-10" 
          style={{ top: "50%", left: "80%", width: "8%", height: "10%" }} 
        />
        
      </div>
    </div>
  );
}
