import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar1.css";
import logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navigationBar">
      <div
        className="mobileMenuIcon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MenuIcon />
      </div>
      <nav className="topNavigationBar">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <ul className={!showNav ? "navItems hideItem" : "navItems"}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <CloseIcon />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="routinegenerator"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Generate my routine
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
