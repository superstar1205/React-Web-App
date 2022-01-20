import React from "react";
import Helmet from "react-helmet";
import Banner from "../../components/Banner/Banner";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Easiest Tool to Find Your Perfect Job Online | apnicareer.com</title>
      </Helmet>
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
