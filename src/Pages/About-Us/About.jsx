import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import { ABOUT } from '../../GraphQL/query';
import Company from '../../components/Company/Company'
import NetworkMessage from '../../components/NetworkMessage/NetworkMessage';

function About() {
    const [about, setAbout] = useState();

    const { data, loading } = useQuery(ABOUT);

    useEffect(() => {
        if (data) setAbout(data.about[0]);
      }, [data]);

    if (loading) return <NetworkMessage message="Loading..." />;

    return about? (
        <Company
        title="about"
        content={about.body}/>
    ):(
        <NetworkMessage message="Network error, Please check your internet connection." />
    )
}

export default About
