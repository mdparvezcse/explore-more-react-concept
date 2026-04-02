import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div>
            <h1 className='text-5xl'>Choose Your Package</h1>
            <div className='grid md:grid-cols-3 md:gap-8'>
                {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;