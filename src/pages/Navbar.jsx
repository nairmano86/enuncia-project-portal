import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
