import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loader from "../../components/Loader/Loader";
/* For Server
import { useQuery } from "@apollo/client";
import { TERMS } from "../../GraphQL/query";
*/
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const Terms = () => {
  const [terms, setTerms] = useState();

  /* For Server
  const { data, loading } = useQuery(TERMS);

  useEffect(() => {
    if (data) setTerms(data.terms[0]);
  }, [data]);

  if (loading) return <Loader/>;
  */

  //For Github
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://api.apnicareer.com");
    const data = await response.json();
    setTerms(data?.terms);
  };
  //

  // For Github
  if (terms == null) return <Loader />;
  //

  return terms ? (
    <>
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      <Company title="terms and conditions" content={terms.body} />
    </>
  ) : (
    <NetworkMessage message="Network error, Please check your internet connection." />
  );
};

export default Terms;
