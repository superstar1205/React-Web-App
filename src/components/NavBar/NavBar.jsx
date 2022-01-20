import React from "react";
import "./NavBar.css";
import Logo from "../../assets/images/Logo.png"
import { FaBars } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="logo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><FaBars/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">
                  explore
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn">Download App</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
