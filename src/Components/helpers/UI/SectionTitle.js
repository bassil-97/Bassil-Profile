import React from 'react';

export default function SectionTitle(props) {
  return (
    <div className='section-title'>
        <h2>{props.children}</h2>
    </div>
  )
}
