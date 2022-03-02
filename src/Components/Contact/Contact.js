import React from 'react';
import './Contact.css';

import SectionTitle from '../helpers/UI/SectionTitle';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='page-title' data-aos="fade-right">
            <h1>Contact</h1>
        </div>
        <div className='contact-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6'>
                        <div className='contact-list'>
                            <div className='contact-item'>
                                <div className='ci-icon'>
                                    <i className="fa-solid fa-mobile"></i>
                                </div>
                                <div className='ci-text'>
                                    <h4>0791-858-375</h4>
                                    <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <div className='ci-icon'>
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className='ci-text'>
                                    <h4>Jordan - Irbid</h4>
                                    <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <div className='ci-icon'>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className='ci-text'>
                                    <h4>bassilalqadi65@gmail.com</h4>
                                    <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <SectionTitle>How Can I Help You?</SectionTitle>
                        <form className='contact-form'>
                            <div className="mb-4">
                                <input type="text" className="form-control" id="user_fullname" placeholder='Full Name' />
                            </div>
                            <div class="mb-4">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-4">
                                <input type="text" className="form-control" id="subject" placeholder='Subject' />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
