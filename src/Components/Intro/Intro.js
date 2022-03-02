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
                    <button className='btn btn-outline-secondary'>
                        <Link className='contact-btn' to="/contact">Contact</Link>
                    </button>
                    <ul className='footer-social-links'>
                        <li>
                            <a href='https://twitter.com/Bassil_Offical' target="_blank">Twitter</a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100004515360178' target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100004515360178' target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/bassil-alqadi-929164195' target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <a href='https://github.com/bassil-97' target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <SpaceDivider />
    </div>
  )
}
