import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

export default function FloatingNav() {
  return (
    <div className='floating-nav'>
        <div className='floating-item'>
            <Link to="/home">
                <i className="fa-solid fa-circle-info"></i>
            </Link>
        </div>
        <div className='floating-item'>
            <Link to="/resume">
                <i className="fa-solid fa-file"></i>
            </Link>
        </div>
        <div className='floating-item'>
            <Link to="/portfolio">
                <i className="fa-solid fa-code"></i>
            </Link>
        </div>
        <div className='floating-item'>
            <Link to="/contact">
                <i className="fa-solid fa-address-book"></i>
            </Link>
        </div>
    </div>
  )
}
