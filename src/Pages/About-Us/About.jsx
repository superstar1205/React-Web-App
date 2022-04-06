import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loader from "../../components/Loader/Loader";
/* For Server
import { useQuery } from "@apollo/client";
import { ABOUT } from "../../GraphQL/query";
*/
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const About = () => {
  const [about, setAbout] = useState();

  /*For Server
  const { data, loading } = useQuery(ABOUT);

  useEffect(() => {
    if (data) setAbout(data.about[0]);
  }, [data]);
  */

  //For Github
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://api.apnicareer.com");
    const data = await response.json();
    setAbout(data?.about);
  };
  //

  /* For Server
  if (loading) return <Loader />;
  */

  // For Github
  if (about == null) return <Loader />;
  //

  return about ? (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Company title="about" content={about.body} />
    </>
  ) : (
    <NetworkMessage message="Network error, Please check your internet connection." />
  );
};

export default About;
