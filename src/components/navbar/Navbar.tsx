import * as React from "react";
import "./Navbar.css";
import DiavanImage from "../../assets/Diavan.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={DiavanImage} alt="Diavan" className="logo" />
      </Link>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/diamond-check">
          <li>Diamond Check</li>
        </Link>
        <Link to="/calculate">
          <li>Calculate</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <div>
        <Link to="/login">
          <button className="btn_login">Login</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
