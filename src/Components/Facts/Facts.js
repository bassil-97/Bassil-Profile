import React from 'react';
import './Facts.css';

import SectionTitle from '../helpers/UI/SectionTitle';
import FactBlock from './FactBlock';

export default function Facts() {
  return (
    <div className='Facts'>
        <div className='container'>
            <SectionTitle>
                Fun Facts
            </SectionTitle>
            <div className='row'>
                <div className='col-xs-12 col-sm-3'>
                    <FactBlock icon={<i className="fa-solid fa-heart"></i>} text={'happy clients'} number={'578'} />
                </div>
                <div className='col-xs-12 col-sm-3'>
                    <FactBlock icon={<i className="fa-solid fa-clock"></i>} text={'Working Hours'} number={'4,780'} />
                </div>
                <div className='col-xs-12 col-sm-3'>
                    <FactBlock icon={<i className="fa-solid fa-star"></i>} text={'Awards Won'} number={'15'} />
                </div>
                <div className='col-xs-12 col-sm-3'>
                    <FactBlock icon={<i className="fa-solid fa-mug-hot"></i>} text={'Coffee Consumed'} number={'1,286'} />
                </div>
            </div>
        </div>
    </div>
  )
}
