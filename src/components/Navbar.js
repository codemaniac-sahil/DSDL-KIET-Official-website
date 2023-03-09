import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
function Navbar() {
  useEffect(() => {
    const menu = document.getElementById("menu");
    menu.onclick = () => {
      menu.classList.toggle("fa-xmark");
      handleNav();
      console.log("yash varshney");
    };
  });
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("mavi");
    console.log(nav);
    setNav(!nav);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={require("../../src/assets/images/logo.png")} alt="logo" />
        </div>
        <ul className="navlinks">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="buttonDiv">
          <button className="join-btn">Join Us</button>
          <i class="fa-solid fa-bars yash" id="menu" onclick={handleNav}></i>
        </div>
      </div>
      <div className={nav ? "pure" : "unpure"}>
        <ul className="resnav">
          <li>
            <NavLink to="/" className="links_">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="links_">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="links_">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="links_">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="links_">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="links_">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
