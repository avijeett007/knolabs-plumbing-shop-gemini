import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

export function Header() {
  const location = useLocation();
  const isKnoBotPage = location.pathname === '/knobot';

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Knolabs Plumber Shop</h1>
          <span className="tagline">Your Smart Plumbing Solution</span>
        </Link>
        <nav className="navigation">
          <Link to="/">Shop</Link>
          <Link to="/knobot" className={isKnoBotPage ? 'active' : ''}>KnoBot Assistant</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
