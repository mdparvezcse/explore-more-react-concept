import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div className='text-center md:mx-25'>
            <h1 className='text-5xl'>Choose Your Package</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:mt-10'>
                {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;