import React from 'react';

import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Facts from '../Facts/Facts';

export default function Home() {
  return (
    <div>
        <Intro />
        <Services />
        <Testimonials />
        <Facts />
    </div>
  )
}
