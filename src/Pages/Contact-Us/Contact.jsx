import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Loader from "../../components/Loader/Loader";
/* For Server
import { useQuery } from "@apollo/client";
import { CONTACT } from "../../GraphQL/query";
*/
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const Contact = () => {
  const [contact, setContact] = useState();

  /* For Server
  const { data, loading } = useQuery(CONTACT);

  useEffect(() => {
    if (data) setContact(data.contact[0]);
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
    setContact(data?.contact);
  };
  //

  // For Github
  if (contact == null) return <Loader />;
  //

  return contact ? (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Company title="contact" content={contact.body} />
    </>
  ) : (
    <NetworkMessage message="Network error, Please check your internet connection." />
  );
};

export default Contact;
