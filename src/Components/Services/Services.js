import React from 'react';
import './Services.css';

import SectionTitle from '../helpers/UI/SectionTitle';
import SpaceDivider from '../helpers/UI/SpaceDivider';

export default function Services() {
  return (
    <div className='container'>
        <div className='services'>
            <SectionTitle>
                What I Do
            </SectionTitle>
            <div className='row text-white'>
                <div className='co-xs-12 col-sm-6 col-lg-6'>
                    <div className='info-block'>
                        <i className="fa-solid fa-pencil"></i>
                        <div className='info-text'>
                            <h4 className='mb-3'>Copywrite</h4>
                            <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
                                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                                 vitae lacinia maximus, risus velit vehicula odio, a tincidunt 
                                 turpis turpis tempus ex.
                            </p>
                        </div>
                    </div>
                    <div className='info-block'>
                        <i className="fa-solid fa-laptop"></i>
                        <div className='info-text'>
                            <h4 className='mb-3'>Web Design</h4>
                            <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
                                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                                 vitae lacinia maximus, risus velit vehicula odio, a tincidunt 
                                 turpis turpis tempus ex.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='co-xs-12 col-sm-6 col-lg-6'>
                    <div className='info-block'>
                        <i className="fa-solid fa-store"></i>
                        <div className='info-text'>
                            <h4 className='mb-3'>Ecommerce</h4>
                            <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
                                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                                 vitae lacinia maximus, risus velit vehicula odio, a tincidunt 
                                 turpis turpis tempus ex.
                            </p>
                        </div>
                    </div>
                    <div className='info-block'>
                        <i className="fa-solid fa-bullhorn"></i>
                        <div className='info-text'>
                            <h4 className='mb-3'>Marketing</h4>
                            <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. 
                                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                                 vitae lacinia maximus, risus velit vehicula odio, a tincidunt 
                                 turpis turpis tempus ex.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SpaceDivider />
    </div>
  )
}
