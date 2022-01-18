import React from "react";
import "./SectionThree.css";
import Section from "../Section/Section";
import filterImg from "../../assets/images/Filter.png";

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <Section
              title="filter based on your passion."
              sTitle="match your jobs with various filters"
              desc="we provide you with various filters to find your perfect jobs. currently we supports filters based on job sectors, job locations, job category and post type. still we are figuring out with different filters to serve you better."
              btnTxt="Match Now"
            />
          </div>
          <div className="col-lg-6 text-center my-auto">
            <img
              alt="section one"
              className="img-fluid"
              width="90%"
              src={filterImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
