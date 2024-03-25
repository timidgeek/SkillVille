import React from "react";

/* styles and images */
import '../styles/Landing.css';
import logo from '../assets/images/sv-logoTM.png';
import cloud from '../assets/game_pngs/Cloud.png'

export default function Landing() {
  return (
    <div className="Landing">
      <img src={logo} className="Landing-logo" alt="SkillVille" />
      <p className="Learn">Learn and Grow</p>
    </div>
  )
}