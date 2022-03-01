import React from 'react';

export default function FactBlock({ icon, text, number }) {
  return (
    <div className='fact-block'>
        {icon}
        <h4>{text}</h4>
        <span className='block-value'>{number}</span>
    </div>
  )
}
