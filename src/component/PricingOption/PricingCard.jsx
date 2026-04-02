import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan, price, duration, features} = pricing;
    return (
        <div className='border p-4 rounded-xl bg-neutral-800'>
            <h1>{plan}</h1>
            <div className='flex'>
                <p>${price}</p>
                <p>per{duration}</p>
            </div>
            <div>
                {
                    features.map(featureData => <PricingFeature featureData={featureData}></PricingFeature>)
                }
            </div>
            <hr className='my-4'/>
            <button className="btn btn-soft  border-none">Secondary</button>
        </div>
    );
};

export default PricingCard;