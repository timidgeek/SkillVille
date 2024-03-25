import React from "react";

/* styles and images */
import '../styles/Landing.css';
import logo from '../assets/images/sv-logoTM.png';
import cloud from '../assets/game_pngs/Cloud.png'
import lag from '../assets/images/sv-lag.png';
import play from '../assets/game_pngs/navigation/pink_play.png';
import pb from '../assets/game_pngs/navigation/pink_brown.png';
import yellow from '../assets/game_pngs/navigation/btn_play.png';

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