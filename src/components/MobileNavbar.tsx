import { useState } from "react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-buttons">
        <button id="mobile-hamburger-button" onClick={handleOpen}>
          ☰
        </button>
      </div>
      {isOpen ? (
        <div className="mobile-navbar-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About the Author</a>
            </li>
            <li>
              <a href="#art">Art</a>
            </li>
            <li>
              <a href="#buy">Buy Book</a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
