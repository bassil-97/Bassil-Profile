import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

export default function FloatingNav() {
  return (
    <div className='floating-nav'>
        <div className='floating-item'>
            <Link to="/home" className='floating-nav-link'>
                <i className="fa-solid fa-circle-info"></i>
            </Link>
            <span className='item-title'>Home</span>
        </div>
        <div className='floating-item'>
            <Link to="/resume">
                <i className="fa-solid fa-file"></i>
            </Link>
            <span className='item-title'>resume</span>
        </div>
        <div className='floating-item'>
            <Link to="/portfolio">
                <i className="fa-solid fa-code"></i>
            </Link>
            <span className='item-title'>portfolio</span>
        </div>
        <div className='floating-item'>
            <Link to="/contact">
                <i className="fa-solid fa-address-book"></i>
            </Link>
            <span className='item-title'>contact</span>
        </div>
    </div>
  )
}
