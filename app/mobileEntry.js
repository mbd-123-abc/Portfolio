/*Mahika Bagri*/
/*August 1 2025*/

import Link from "next/link";
import Footer from "./components/Footer";

export default function MobileEntry() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <img
          src="/PortfolioEntryMobile.png"
          alt="Portfolio Entrance"
          className="w-full h-full object-contain fixed top-0 left-0 block"
          priority
        />

        <Link
          href="/cafe"
          className="absolute z-10"
          style={{
            top: "50%",
            left: "45%",
            width: "25%",
            height: "12%",
          }}
        />
      </div>

      <footer className="top-160 fixed">
        <Footer />
      </footer>
      
    </div>
  );
}
