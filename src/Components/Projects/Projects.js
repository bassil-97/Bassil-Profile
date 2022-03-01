import React, { useState, useEffect } from 'react';
import './Projects.css';
import Project from './Project/Project';

import axios from 'axios';

export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    fetchUserProjects();
  }, []);

  const fetchUserProjects = () => {
    setIsLoading(true);
    axios.get("https://api.github.com/users/bassil-97/repos")
    .then(res => {
      setProjects(res.data);
      setIsLoading(false);
    })
  };

  return (
    <div className='projects'>
        <div className='page-title' data-aos="fade-right">
            <h1>Portfolio</h1>
        </div>
        <div className='projects-container'>
          {projects && projects.map((project) => {
            return(
              <Project key={project.id} project={project}  />
            )
          })}
          {isLoading && <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
        </div>
    </div>
  )
}
