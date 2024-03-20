import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo_transparent.png";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="home" className="nav-logo">
            <span className="logo">
              <img src={logo} alt="logo"/>
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="home"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="tracker"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tracker
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;