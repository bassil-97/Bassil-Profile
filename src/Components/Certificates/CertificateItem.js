import React from 'react';
import './Certificates.css';

export default function CertificateItem({ language, title, level, date }) {
  return (
    <div className='certificate-item'>
        <div className='certi-logo'>
            <h4 className='text-center w-100'>{language}</h4>
        </div>
        <div className='certi-content'>
            <div className='certi-title'>
                <h5>{title}</h5>
            </div>
            <div className='certi-level'>
                <span>{level}</span>
            </div>
            <div className='certi-date'>
                <span>19 April 2020</span>
            </div>
        </div>
    </div>
  )
}
