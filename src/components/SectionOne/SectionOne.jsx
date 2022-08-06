import React from "react";
import "./SectionOne.css";
import Section from "../Section/Section";
import exploreImg from "../../assets/images/Explore.png";

const SectionOne = () => {
  return (
    <section className="sectionOne darkmode-ignore w-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <Section
              title="explore all jobs in one place."
              sTitle="1000's of jobs for you to explore"
              desc="we take all your oppurtunities very seriously that's why we provide you with latest job notifications in simpler and fastest way as possible. Explore a wide categories of jobs that match you interest and passion. Do what you love."
              btnTxt="Downlaod Now"
            />
          </div>
          <div className="col-lg-6 text-center my-auto">
            <img
              alt="section one"
              className="img-fluid"
              width="90%"
              src={exploreImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
