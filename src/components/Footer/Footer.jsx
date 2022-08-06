import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer darkmode-ignore w-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <NavLink to="/">
              <img src={Logo} alt="logo" width={95} />
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
              <FaFacebook style={style.icons} />
              facebook
            </p>
            <p>
              <FaInstagram style={style.icons} />
              instagram
            </p>
            <p>
              <FaTwitter style={style.icons} />
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
              <a
                href="https://play.google.com/store/apps/details?id=apnicareer.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaGooglePlay style={style.icons} />
                android
              </a>
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
              <FaGlobe style={style.icons} />
              English
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const style = {
  icons: {
    marginRight: 10,
  },
};

export default Footer;
