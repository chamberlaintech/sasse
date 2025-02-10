import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer flex-center">
      <div className="footer-icons flex-center">
        <FaFacebookF />
        <FaInstagram />
        <BsTwitterX />
      </div>
      <div className="footer-text flex-center">
        <div className="footer-links">
          <ul className="links">
            <li className="footer-text">
              <a href="#home">Home</a>
            </li>
            <li className="footer-text">
              <a href="#features">Features</a>
            </li>
            <li className="footer-text">
              <a href="#apply">Apply</a>
            </li>
            <li className="footer-text">
              <a href="#contact">Contact</a>
            </li>
            <li className="footer-text">
              <a href="#get-started">Get Started</a>
            </li>
          </ul>
        </div>
        <div className="line" />
        <div className="footer-copyright">
          <p className="footer-text">© 2025 Sassé. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
