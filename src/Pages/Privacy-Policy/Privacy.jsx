import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import { PRIVACY } from '../../GraphQL/query';
import Company from '../../components/Company/Company'
import NetworkMessage from '../../components/NetworkMessage/NetworkMessage';

const Privacy = () => {
    const [privacy, setPrivacy] = useState();

    const { data, loading } = useQuery(PRIVACY);

    useEffect(() => {
        if (data) setPrivacy(data.privacy[0]);
      }, [data]);

    if (loading) return <NetworkMessage message="Loading..." />;

    return privacy? (
        <Company
        title="privacy policy"
        content={privacy.body}/>
    ):(
        <NetworkMessage message="Network error, Please check your internet connection." />
    )
}

export default Privacy
