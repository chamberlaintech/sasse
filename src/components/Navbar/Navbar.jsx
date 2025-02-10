import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">sassé</a>
      </div>
      <ul className="navbar-links">
        <li className="nav-text">
          <a href="#home">Home</a>
        </li>
        <li className="nav-text">
          <a href="#features">Features</a>
        </li>
        <li className="nav-text">
          <a href="#apply">Apply</a>
        </li>
        <li className="nav-text">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-text">
          <a href="#get-started">Get Started</a>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={28}
          onClick={() => setToggleMenu(true)}
          className="overlay-open"
        />
      </div>

      {toggleMenu && (
        <div
          className={`navbar-smallscreen-overlay flex-center ${
            toggleMenu ? "slide-bottom" : ""
          }`}
        >
          <MdClose
            fontSize={28}
            className="overlay-close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="navbar-smallscreen-links">
            <li className="nav-text">
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li className="nav-text">
              <a href="#features" onClick={() => setToggleMenu(false)}>
                Features
              </a>
            </li>
            <li className="nav-text">
              <a href="#apply" onClick={() => setToggleMenu(false)}>
                Apply
              </a>
            </li>
            <li className="nav-text">
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
            <li className="nav-text">
              <a href="#get-started" onClick={() => setToggleMenu(false)}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
