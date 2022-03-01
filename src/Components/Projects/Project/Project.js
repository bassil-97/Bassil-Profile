import React from 'react';
import './Project.css';

export default function Project({ project }) {
  return (
    <div className='project' data-aos="zoom-in">
        <h4>{project.name}</h4>
        <div className='project-content'>
          <span className='language'>{project.language ? project.language : '-'}</span>
          <a href={project.html_url} target="_blank" className='visibility'>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
    </div>
  )
}
