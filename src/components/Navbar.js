import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="upper-navbar">
        <ul>
          <div className="navbar-left-item">
            <li>
              <Link style={{ textDecoration: "none" }} to="/notes">
                Notes
              </Link>
            </li>
          </div>
          <div className="navbar-right-item">
              Finding an Avenue through Post-Capitalistic Consumerism
          </div>
        </ul>
      </div>
      <div className="lower-navbar">
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
              <Link style={{ textDecoration: "none" }} to="/my-guide">
                My Guide
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
