import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function FloatingNav() {
  return (
    <div className="floating-nav" data-aos="fade-right">
      <div className="floating-item">
        <Link to="/" className="floating-nav-link">
          <i className="fa-solid fa-circle-info"></i>
        </Link>
      </div>
      <div className="floating-item">
        <Link to="/resume" className="floating-nav-link">
          <i className="fa-solid fa-file"></i>
        </Link>
      </div>
      <div className="floating-item">
        <Link to="/portfolio" className="floating-nav-link">
          <i className="fa-solid fa-code"></i>
        </Link>
      </div>
      <div className="floating-item">
        <Link to="/contact" className="floating-nav-link">
          <i className="fa-solid fa-address-book"></i>
        </Link>
      </div>
      <div className="floating-item">
        <Link to="/pricing" className="floating-nav-link">
          <i className="fa-solid fa-tag"></i>
        </Link>
      </div>
    </div>
  );
}
