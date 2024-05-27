import React from "react";
import "./Footer.css";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="">Diamond Check</a>
              </li>
              <li>
                <a href="">Calculate</a>
              </li>
              <li>
                <a href="">Valuate Diamond</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>More</h4>
            <ul>
              <li>
                <a href="">Guides</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>Contact us</h4>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        <Divider variant="middle" sx={{ margin: "10px 0 10px 0" }} />
        <div className="footer-information">
          © 2024 StoneAlgo, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
