import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "NEW", path: "/new" },
  { label: "BRANDS", path: "/brands" },
  { label: "MAKEUP", path: "/makeup" },
  { label: "SKINCARE", path: "/skincare" },
  { label: "HAIR", path: "/hair" },
  { label: "TOOLS & BRUSHES", path: "/toolsandbrushes" },
  { label: "BATH & BODY", path: "bathandbody" },
  { label: "FRAGRANCE", path: "/fragrance" },
  { label: "CLEAN", path: "/clean" },
  { label: "GIFTS", path: "/gifts" },
  { label: "SALE", path: "/sale" }
];

const Navbar = () => {
  return (
    <div className="homepage-wrapper">
      <nav className="navbar">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path}>{item.label}</Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
