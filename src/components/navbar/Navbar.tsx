import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import DiavanImage from "../../assets/Diavan.png";
import AvatarBoy from "../../assets/boy_12894580.png";
import "./Navbar.css";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleValuationOrder = () => {
    navigate("/valuation-order");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    toast.success("Logout successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setTimeout(() => {
      localStorage.removeItem("role");
      localStorage.removeItem("customerId");
      localStorage.removeItem("token");
      localStorage.setItem("loggedIn", "false");
      sessionStorage.clear();
      navigate("/");
    }, 4000);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="navbar">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer />
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
          <li>Our Services</li>
        </Link>
        <Link to="/contact">
          <li>Valuate Diamond</li>
        </Link>
      </ul>

      <div>
        {localStorage.getItem("loggedIn") === "true" ? (
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
              <MenuItem key="profile" onClick={handleProfile}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="account" onClick={handleValuationOrder}>
                <Typography textAlign="center">Valuation Order</Typography>
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
