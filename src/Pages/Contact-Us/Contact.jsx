import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/client";
import { CONTACT } from "../../GraphQL/query";
import Company from "../../components/Company/Company";
import NetworkMessage from "../../components/NetworkMessage/NetworkMessage";

const Contact = () => {
  const [contact, setContact] = useState();

  const { data, loading } = useQuery(CONTACT);

  useEffect(() => {
    if (data) setContact(data.contact[0]);
  }, [data]);

  if (loading) return <NetworkMessage message="Loading..." />;

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
