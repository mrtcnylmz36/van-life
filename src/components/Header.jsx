import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANSLIFE
      </Link>
      <nav>
        <Link to="about">About</Link>
        <Link to="/">Vans</Link>
      </nav>
    </header>
  );
}

export default Header;
