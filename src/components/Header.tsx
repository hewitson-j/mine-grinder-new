import { useEffect, useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Countdown from "./Countdown";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <h1>
        MINE GRINDER:
        <br />A LEGACY OF HORROR
      </h1>
      {windowWidth >= 730 ? <Navbar /> : <MobileNavbar />}
      <Countdown />
    </div>
  );
}
