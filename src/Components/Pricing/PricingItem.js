import React from 'react';

import { Link } from 'react-router-dom';

export default function PricingItem({ rank, fee }) {

    let silverRankBtn = (
        <button className='btn btn-outline-secondary'>
            <Link className='contact-btn' to="/contact">Free Trial</Link>
        </button>
    );

    let blueRankBtn = (
        <button className='btn btn-outline-primary'>
            <Link className='contact-btn' to="/contact">Free Trial</Link>
        </button>
    );

    return (
        <div className={rank === 'silver' ? 'pricing-item silver' : (rank === 'gold' ? 'pricing-item gold' : 'pricing-item plutinum')}>
            <div className='heading-row'>
                <span className={rank === 'gold' ? 'span-highlight' : ''}>{rank}</span>
            </div>
            <div className='pricing-row'>
                <span>$ {fee}</span>
            </div>
            <div className='pricing-button'>
                {silverRankBtn}
            </div>
            <div className='row-default'>
                Lorem ipsum dolor	
            </div>
            <div className='row-default'>
                Pellentesque scelerisque
            </div>
            <div className='row-default'>
                Morbi eu sagittis
            </div>
        </div>
  )
}
