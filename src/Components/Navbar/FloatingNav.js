import React, { useEffect } from "react";

import "./Floating-nav.css";

import { Link } from "react-router-dom";

export default function FloatingNav() {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  }, []);

  return (
    <div className="navigation">
      <ul>
        <li className="list active">
          <Link to="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/resume">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Resume</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/portfolio">
            <span className="icon">
              <ion-icon name="camera-outline"></ion-icon>
            </span>
            <span className="text">Portfolio</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/contact">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/pricing">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Pricing</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
