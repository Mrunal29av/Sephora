import React from 'react';
import './TopBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Optional if already in index.js or App.js

const TopBar = () => {
  return (
            <div className="homepage-wrapper">

    <div className="top-bar">
      <div className="left-top">
        <a href="#">Sign In / Register</a>
        <a href="#">Beauty Pass</a>
      </div>
      <div className="right-top">
        <a href="#"><i className="fas fa-map-marker-alt"></i> Stores & Events</a>
        <a href="#"><i className="fas fa-heart"></i> Wishlist</a>
        <a href="#"><i className="fas fa-shopping-bag"></i> Bag</a>
      </div>
    </div>
    </div>
  );
};

export default TopBar;
