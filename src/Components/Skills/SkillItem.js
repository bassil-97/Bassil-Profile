import React from 'react';
import './Skills.css';

export default function SkillItem({ skill, level }) {
  return (
    <div className='skill-item border-primary' id="skill-item">
        <h1>{skill}</h1>
        <h4>{level}%</h4>
    </div>
  )
}
