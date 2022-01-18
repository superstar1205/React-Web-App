import React from "react";
import "./SectionTwo.css";
import Section from "../Section/Section";
import homeImg from "../../assets/images/Home.png";

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center my-auto">
            <img
              alt="section one"
              className="img-fluid"
              width="90%"
              src={homeImg}
            />
          </div>
          <div className="col-lg-6 my-auto">
            <Section
              title="giving value to your time."
              sTitle="never miss any opurtunites you could!"
              desc="we know how important your time is and reading through all job recruitment articles to know whether you are eligble or not sounds very difficult, that's why we are introducing Jobs Cue. the easiest way to match your perfect jobs. Here we will sort the notification in such a way that you will get everything you are eager to know."
              btnTxt="Explore Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
