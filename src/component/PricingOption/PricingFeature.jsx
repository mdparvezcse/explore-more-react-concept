import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ featureData }) => {
    console.log(featureData)
    return (
        <p className='flex gap-2 text-gray-400'><CircleCheckBig className='text-green-500'></CircleCheckBig>{featureData}</p>

    );
};

export default PricingFeature;