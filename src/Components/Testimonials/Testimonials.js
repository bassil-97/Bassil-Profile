import React from 'react';
import './Testimonials.css';

import SectionTitle from '../helpers/UI/SectionTitle';
import SpaceDivider from '../helpers/UI/SpaceDivider';

import TestimonialItem from './TestimonialItem';

export default function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='container'>
        <SectionTitle>
          Testimonials
        </SectionTitle>
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <TestimonialItem 
              imgSrc={'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-3.jpg'}
              text={'Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.'}
              author={'Daniel Pringle'}
              frim={'Sagebrush'}
            />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <TestimonialItem 
              imgSrc={'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg'}
              text={'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.'}
              author={'Billy Adams'}
              frim={'Sagebrush'}
            />
          </div>
        </div>
      </div>
    <SpaceDivider />
    </div>
  )
}
