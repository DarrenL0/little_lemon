import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header aria-label="Header with Little Lemon logo and navigation">
      <div className="pageWidth">
        <Nav />
      </div>
    </header>
  );
}

export default Header;