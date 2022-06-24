import React from "react";
import travis_port from "./travis_port.jpg";
import "./Landing.css";
import { FaInstagramSquare, FaGithub, FaTwitter } from "react-icons/fa";

const Landing = () => {
  const handleIgClick = () => {
    window.location.href = "https://www.instagram.com/skkyfallen_/";
  };
  return (
    <div>
      <section className="introduction">
        <div className="intro-text">
          <h1 className="intro-hi">Hi,</h1>
          <p className="my-name">My name is Kenechukwu</p>
          <p className="job">I'm a Front-end Developer and Video Editor</p>
          <div className="icons">
            <p className="ig-icon" onClick={handleIgClick}>
              {" "}
              <FaInstagramSquare />
            </p>
            <p className="git-icon">
              {" "}
              <FaGithub />
            </p>
            <p className="twitter-icon">
              <FaTwitter />
            </p>
          </div>
          <button>Hire me</button>
        </div>
        <img className="introduction-img" src={travis_port} />
      </section>
    </div>
  );
};

export default Landing;
