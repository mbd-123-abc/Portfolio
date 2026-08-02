/*Mahika Bagri*/ 
/*August 1 2025*/ 
import Link from "next/link"; 

export default function MobileEntry() { 
  return ( 
    /* Added 'flex justify-center' here to center the 365px column */
    <div className="h-full w-full flex justify-center overflow-y-auto overflow-x-hidden"> 
      
      {/* Kept your explicit width container */}
      <div className="relative h-full" style={{ width: "365px" }} > 
        <img 
          src="/PortfolioEntryMobile.png" 
          alt="Portfolio Entrance" 
          className="w-full max-h-none block" 
          style={{ width: "365px" }}
          priority 
        /> 
        <Link 
          href="/cafe" 
          className="absolute z-10" 
          style={{ 
            top: "40%", 
            left: "45%", 
            width: "25%", 
            height: "12%", 
          }} 
        /> 
      </div>

    </div> 
  ); 
}
