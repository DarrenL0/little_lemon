import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Nav() {
  // State to control the menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="Main navigation">
      {/* Hamburger menu button with aria-expanded for state management */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-controls="menu-list"
      >
        ☰
      </button>

      {/* Navigation menu with a list of links, added role and aria-labelledby */}
      <ul id="menu-list" className={isMenuOpen ? "active" : ""} role="menu">
        <li role="none">
          <Link to="/" aria-label="Go to homepage">
            <img className="logoIcon" src={logo} alt="Little Lemon restaurant logo" />
          </Link>
        </li>
        <li role="none">
          <Link to="/" role="menuitem" aria-label="Go to Home page">Home</Link>
        </li>
        <li role="none">
          <Link to="/menu" role="menuitem" aria-label="Go to Menu page">Menu</Link>
        </li>
        <li role="none">
          <Link to="/reservations" role="menuitem" aria-label="Go to Reservations page">Reservations</Link>
        </li>
        <li role="none">
          <Link to="/about" role="menuitem" aria-label="Go to About page">About</Link>
        </li>
        <li role="none">
          <Link to="/contact" role="menuitem" aria-label="Go to Contact page">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
