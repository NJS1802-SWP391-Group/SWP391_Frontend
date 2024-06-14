import * as React from "react";
import "./Navbar.css";
import DiavanImage from "../../assets/Diavan.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import AvatarBoy from "../../assets/boy_12894580.png";

function Navbar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("customerId");
    localStorage.removeItem("token");
    alert("Logout successfully");
    navigate("/");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={DiavanImage} alt="Diavan" className="logo" />
      </Link>
      <ul>
        <Link to="/">
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
        {localStorage.getItem("loggedIn") == "true" ? (
          <Box sx={{ flexGrow: 0, marginLeft: "80%" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={AvatarBoy} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="account" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Link to="/login">
            <button className="btn_login">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Navbar;
