import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/Logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <NavLink to="/">
              <img src={Logo} alt="logo" width={95}/>
            </NavLink>
          </div>
        </div>
        <div className="row links">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>company</h4>
            <NavLink to="/about">
              <p>about us</p>
            </NavLink>
            <NavLink to="/jobs">
              <p>explore jobs</p>
            </NavLink>
            <NavLink to="/contact">
              <p>contact us</p>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>social</h4>
            <p>
              <i className="fab fa-facebook" />
              facebook
            </p>
            <p>
              <i className="fab fa-instagram" />
              instagram
            </p>
            <p>
              <i className="fab fa-twitter" />
              twitter
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>policy</h4>
            <NavLink to="/privacy">
              <p>privacy policy</p>
            </NavLink>
            <NavLink to="/terms">
              <p>terms & conditions</p>
            </NavLink>
            <NavLink to="/disclaimer">
              <p>disclaimer</p>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>downloads</h4>
            <p>
              <i className="fab fa-google-play" />
              android
            </p>
            <p>
              <i className="fab fa-apple" />
              apple
            </p>
          </div>
        </div>
        <div className="row copyright">
          <hr />
          <div className="col-lg-6 col-md-8 col-sm-8 col-9 text-start">
            <p>© 2022 apnicareer. All rights reserved</p>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 col-3 text-end">
            <p>
              <i className="fas fa-globe" />
              English
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
