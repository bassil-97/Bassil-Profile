import React from 'react';
import './Pricing.css';

import PricingItem from './PricingItem';

export default function Pricing() {
  return (
    <div className='pricing'>
        <div className='page-title' data-aos="fade-right">
            <h1>Pricing</h1>
        </div>
        <div className='container'>
            <div className='row pricing-section'>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                    <PricingItem rank={"silver"} fee={"10"} />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                    <PricingItem rank={"gold"} fee={"20"} />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                    <PricingItem rank={"Plutinum"} fee={"30"} />
                </div>
            </div>
        </div>
        
    </div>
  )
}
