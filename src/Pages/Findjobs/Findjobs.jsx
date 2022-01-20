import React from "react";
import Helmet from "react-helmet";
import JobSection from "../../components/JobSection/JobSection";

const Findjobs = () => {
  return (
    <>
      <Helmet>
        <title>Explore Jobs</title>
        <meta name="description" content="We take all your oppurtunities very seriously that's why we provide you with latest job notifications in simpler and fastest way as possible." />
      </Helmet>
      <JobSection />
    </>
  );
};

export default Findjobs;
