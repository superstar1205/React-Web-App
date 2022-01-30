import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "@apollo/client";
import { DISCLAIMER } from "../../GraphQL/query";
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const Disclaimer = () => {
  const [disclaimer, setDisclaimer] = useState();

  const { data, loading } = useQuery(DISCLAIMER);

  useEffect(() => {
    if (data) setDisclaimer(data.disclaimer[0]);
  }, [data]);

  if (loading) return <Loader />;

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
