import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { DISCLAIMER } from '../../GraphQL/query'
import Company from '../../components/Company/Company'
import NetworkMessage from '../../components/NetworkMessage/NetworkMessage'

const Disclaimer = () => {
    const [disclaimer, setDisclaimer] = useState();

    const { data, loading } = useQuery(DISCLAIMER);

    useEffect(() => {
        if (data) setDisclaimer(data.disclaimer[0]);
      }, [data]);

    if (loading) return <NetworkMessage message="Loading..." />;

    return disclaimer? (
        <Company
        title="disclaimer"
        content={disclaimer.body}/>
    ):(
        <NetworkMessage message="Network error, Please check your internet connection." />
    )
}

export default Disclaimer
