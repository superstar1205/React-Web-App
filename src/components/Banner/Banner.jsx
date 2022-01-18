import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>easiest way to find your perfect job.</h1>
            <button className="btn"><i className='fab fa-google-play'/>Download App</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
