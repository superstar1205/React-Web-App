import React from "react";
import "./Banner.css";
import { FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>easiest way to find your perfect job.</h1>
            <button className="btn"><FaGooglePlay style={style.icon}/> Download App</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const style = {
  icon:{
    marginRight: 10
  }
}

export default Banner;
