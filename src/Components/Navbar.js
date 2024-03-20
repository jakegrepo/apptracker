import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from "./logo_transparent.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/home" className="nav-logo">
            {/* <i className="fas fa-code"></i> */}
            <span className="logo">
            <img src={logo}/>
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tracker"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tracker
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;