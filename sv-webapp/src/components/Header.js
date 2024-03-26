// make event handler for if landing page - show different header
import React from 'react';
import '../styles/Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/sv-logoTM.png'


export default function Header() {
  // if landing page show different header
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <header className="primary-header display-flex">
      <div>
        {isLandingPage ? (
          <Link to="/" className="Welcome"></Link>
        ) : (
          <Link to="/">
            <img src={logo} alt="tinySkillVille"
            style={{  width: '250px', marginLeft: '1rem' }} />
          </Link> // ADD FADE IN and scoot it up???
        )}
        </div>

        <div className="header-bg"></div> 
        {/* i switched this with the above and i don't think it did anything */}
        

        <nav>
          <ul id="navigation" className="navigation display-flex">
            <li className="active">
              <Link to="/about" className="link">
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="link">
                <span>PORTFOLIO</span>
              </Link>
            </li>
            <li>
              <Link to="/credits" className="link">
                <span>CREDITS</span>
              </Link>
            </li>
          </ul>
        </nav>

    </header>
  )
}