import React from 'react';
import './Certificates.css';

export default function Certificates() {
  return (
    <div className='certificate-item'>
        <div className='certi-logo'>
            <img src='https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client-7.png' alt='logo' />
        </div>
        <div className='certi-content'>
            <div className='certi-title'>
                <h5>Psyhology of Intertnation Design</h5>
            </div>
            <div className='certi-level'>
                <span>Membership ID: XXXX</span>
            </div>
            <div className='certi-date'>
                <span>19 April 2020</span>
            </div>
        </div>
    </div>
  )
}
