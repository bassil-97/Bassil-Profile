import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Bassil Al-Qadi</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link active" aria-current="page">about me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link">resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">contact</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">extra</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
