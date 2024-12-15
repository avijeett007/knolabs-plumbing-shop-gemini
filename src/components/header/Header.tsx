import React from 'react';
import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Knolabs Plumber Shop</h1>
          <span className="tagline">Your Smart Plumbing Solution</span>
        </div>
        <nav className="navigation">
          <a href="#featured">Featured Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
