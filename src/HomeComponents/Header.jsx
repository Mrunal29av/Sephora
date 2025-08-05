import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="homepage-wrapper">
      <div className="header">
        <div className="logo">SEPHORA</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for brands and products" />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="shipping">FREE SHIPPING ABOVE ₹999</div>
      </div>
    </div>

  );
};

export default Header;