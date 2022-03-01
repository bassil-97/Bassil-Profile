import React from 'react';

export default function TimelineItem({ period, company, title, text }) {
  return (
    <div className='timeline-item'>
        <h5 className='item-period'>{period}</h5>
        <span className='item-company'>{company}</span>
        <div className='item-content'>
            <h5 className='item-title'>{title}</h5>
            <div className='text'>
                {text}
            </div>
        </div>
    </div>
  )
}
