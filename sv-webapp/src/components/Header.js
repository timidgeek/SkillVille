// make event handler for if landing page - show different header
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="primary-header display-flex">
      <div className="header-bg"></div>
        <div>
          <Link to="/" className="Welcome">Welcome!</Link>
        </div>

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