import React from "react";
import "./Navbar.css";
import travis_port from "./travis_port.jpg";

const Navbar = () => {
  return (
    <div>
      <header className="navbar-header">
        <nav>
          <ul>
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              {" "}
              <a href="#">About Me</a>{" "}
            </li>
            <li className="nav-item">
              <a href="#">Resume</a>
            </li>
            <li className="nav-item">
              <a href="#">Portfolio</a>
            </li>
            <li className="contact-us">
              <a href="#">Contact Me </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
