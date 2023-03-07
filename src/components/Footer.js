import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-text">
        <p> Made with &nbsp;❤️&nbsp; By DSDL</p>
      </div>
      <div className="social-links footer-text">
        <p>Ping us on</p>
        <Link to="https://www.linkedin.com/company/dsdl-club/" id="linkedin">
          <BsLinkedin />
        </Link>
        <Link to="https://www.instagram.com/dsdl_club/" id="instagram">
          <BsInstagram />
        </Link>
        <Link to="mailto:dsdl@gmail.com" id="gmail">
          <SiGmail />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
