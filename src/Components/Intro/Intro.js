import React from 'react';
import './Intro.css';

import { Link } from 'react-router-dom';

import SpaceDivider from '../helpers/UI/SpaceDivider';

export default function Intro() {
  return (
    <div className='intro'>
        <div className='container'>
            <div className='avatar' data-aos="zoom-in">
                <img 
                    src='https://avatars.githubusercontent.com/u/61696257?v=4'
                    className='img-responsive'
                    alt="Bassil Alqadi"
                />
            </div>
            <div className='home-info'>
                <h4>web developer</h4>
                <h1 className='mb-4'>Bassil Alqadi</h1>
                <p>
                    Experienced Web Developer working in the Computer Software industry. Skilled in Soft Skills, Team
                    Motivation, Computer Literacy, and Creativity Skills. Strong Frontend and Backend experience with a
                    Bachelor and Master degrees focused in Computer and Information Systems from Yarmouk University.
                </p>
                <div className='home_buttons'>
                    <button className='btn btn-outline-primary me-3'>
                        <Link className='resume-download-btn' to='.../../../public/assets/Bassil-resume.pdf' target="_blank" download>Download CV</Link>
                    </button>
                    <button className='btn btn-outline-secondary'>
                        <Link className='contact-btn' to="/contact">Contact</Link>
                    </button>
                </div>
            </div>
        </div>
        <SpaceDivider />
    </div>
  )
}
