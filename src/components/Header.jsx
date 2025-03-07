import React from "react";
import logo from "../assets/Logo.svg";


function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" width="150" />
      <h1>Little Lemon Restaurant</h1>
    </header>
  );
}

export default Header;