import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header aria-label="Header with Little Lemon logo and navigation">
      <img src={logo} alt="Little Lemon restaurant logo" width="150" />
      <Nav />
    </header>
  );
}

export default Header;