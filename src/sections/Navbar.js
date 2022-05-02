import { HiOutlineSearch } from "react-icons/hi";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <nav className="top-nav">
        <NavLink to="/">
          <img
            className="brand-logo"
            src={logo}
            style={{ height: 150, width: 200 }}
            alt="logo"
          />
        </NavLink>
        <ul className="nav-items">
          <li className="home-item">
            <NavLink className="home-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="routine-item">
            <NavLink className="generate-routine-link" to="routinegenerator">
              Generate my routine
            </NavLink>
          </li>
          <li className="search">
            <div className="search-box">
              <button className="search-button">
                <HiOutlineSearch />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Search..."
              />
            </div>
          </li>
          <li className="login">
            <NavLink className="login-link" to="login">
              <button className="login-button">Log In</button>
            </NavLink>
          </li>
          <li className="sign-up">
            <NavLink className="sign-up-link" to="signup">
              <button className="signup-button">Sign Up</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
