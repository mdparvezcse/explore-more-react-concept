import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan, price, duration, features} = pricing;
    return (
        <div className='border-none shadow-md md:p-6 rounded-xl bg-neutral-700'>
            <h1 className='text-3xl bg-blue-500 rounded-b-4xl p-4 text-center'>{plan}</h1>
            <div className='flex gap-2 justify-center my-5'>
                <p className='text-5xl text-blue-500'>${price}</p>
                <p>per{duration}</p>
            </div>
            <hr className='my-4' />
            <div className='bg-blue-950 p-5 rounded-xl'>
                {
                    features.map(featureData => <PricingFeature featureData={featureData}></PricingFeature>)
                }
            </div>
            <hr className='my-4'/>
            <div className='text-center'>
                <button className="btn btn-soft  border-none">Secondary</button>
            </div>
        </div>
    );
};

export default PricingCard;