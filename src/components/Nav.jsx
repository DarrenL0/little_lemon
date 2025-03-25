import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><Link to="/"><img src={logo} alt="Little Lemon restaurant logo" width="150" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
