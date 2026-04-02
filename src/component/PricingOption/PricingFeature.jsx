import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ featureData }) => {
    console.log(featureData)
    return (
        <p className='flex gap-2'><CircleCheckBig></CircleCheckBig>{featureData}</p>

    );
};

export default PricingFeature;