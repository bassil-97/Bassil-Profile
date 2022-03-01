import React from 'react';

export default function TestimonialItem({ imgSrc, text, author, frim }) {
  return (
    <div className='testimonial-item'>
        <div className='testimonial-content'>
        <img src={imgSrc} className='testimonial-picture ' />
        <div className='testimonial-text'>
            <p>
            {text}
            </p>
        </div>
        <div className='testimonial-author-info'>
            <h5 className='testimonial-author'>{author}</h5>
            <p className='testimonial-firm'>{frim}</p>
        </div>
        <div className='testimonial-icon-big'>
            <i className="fa fa-quote-right"></i>
        </div>
        </div>
    </div>
  )
}
