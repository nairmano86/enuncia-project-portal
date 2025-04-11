import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home.jsx</Link>
      <Link to="/about">About.jsx</Link>
    </nav>
  );
}

export default Navbar;
