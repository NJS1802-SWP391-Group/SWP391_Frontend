import "./Footer.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <h4>Features</h4>
            <ul>
              <li>
                <Link to="">Diamond Check</Link>
              </li>
              <li>
                <Link to="">Calculate</Link>
              </li>
              <li>
                <Link to="">Valuate Diamond</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>More</h4>
            <ul>
              <li>
                <Link to="">Guides</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <h4>Contact us</h4>
            <ul>
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">Instagram</Link>
              </li>
              <li>
                <Link to="">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider variant="middle" sx={{ margin: "10px 0 10px 0" }} />
        <div className="footer-information">
          © 2024 Diavan, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
