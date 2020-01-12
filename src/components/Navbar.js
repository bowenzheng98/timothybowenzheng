import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <div className="navbar-left-item">
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
        </div>
        <div className="navbar-right-item">
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
