import React from "react";

/* styles and images */
import '../styles/Landing.css';
import logo from '../assets/images/sv-logoTM.png';

export default function Landing() {
  return (
    <div className="Landing">
      <div className="Cloud-background"></div> 
      <div className="Content">
        <img src={logo} className="Landing-logo" alt="SkillVille" />
        <p className="Learn">Learn and Grow</p>
      </div>
      <div className="Content">
        <a href="https://github.com/teylorchapman" target="_blank" rel="noreferrer">
          <button className="Play-btn" alt="Play-button">PLAY</button>
        </a>
      </div>
    </div>
  )
}