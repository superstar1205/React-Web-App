import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loader from "../../components/Loader/Loader";
/* For Server
import { useQuery } from "@apollo/client";
import { DISCLAIMER } from "../../GraphQL/query";
*/
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const Disclaimer = () => {
  const [disclaimer, setDisclaimer] = useState();

  /*For Server
  const { data, loading } = useQuery(DISCLAIMER);

  useEffect(() => {
    if (data) setDisclaimer(data.disclaimer[0]);
  }, [data]);

  if (loading) return <Loader />;
  */

  //For Github
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://api.apnicareer.com");
    const data = await response.json();
    setDisclaimer(data?.disclaimer);
  };
  //

  // For Github
  if (disclaimer == null) return <Loader />;
  //

  return disclaimer ? (
    <>
      <Helmet>
        <title>Disclaimer</title>
      </Helmet>
      <Company title="disclaimer" content={disclaimer.body} />
    </>
  ) : (
    <NetworkMessage message="Network error, Please check your internet connection." />
  );
};

export default Disclaimer;
