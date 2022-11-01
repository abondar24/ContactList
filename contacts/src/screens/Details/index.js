import { useRoute } from '@react-navigation/native';
import React from 'react'
import DetailsComponent from '../../components/Details';

const Details = () => {

    const { params: { item = {} } = {} } = useRoute();
    return (
        <DetailsComponent contact={item} />
    );
};

export default Details;