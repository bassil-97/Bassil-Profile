import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

export default function FloatingNav() {
  return (
    <div className='floating-nav'>
        <div className='floating-item'>
            <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className='floating-item'>
            <i className="fa-solid fa-file"></i>
        </div>
        <div className='floating-item'>
            <i className="fa-solid fa-code"></i>
        </div>
        <div className='floating-item'>
            <i className="fa-solid fa-address-book"></i>
        </div>
    </div>
  )
}
