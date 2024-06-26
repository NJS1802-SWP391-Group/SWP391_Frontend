import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Diavan from "../../assets/Diavan.png";
import AvatarBoy from "../../assets/boy_12894580.png";

const ManagerNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [activeButton, setActiveButton] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("Logout successfully");
    navigate("/system");
  };

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, height: "90px" }}
          >
            <Box
              component={Link}
              to="/manager/managing"
              sx={{
                paddingBottom: "20px",
                display: "flex",
                paddingTop: "20px",
              }}
            >
              <Box sx={{ height: "15px" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  DIAVAN
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    fontFamily: "revert",
                    fontStyle: "italic",
                  }}
                >
                  Manager Dashboard
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={Diavan}
                  width="50"
                  height="50"
                  alt="Diavan"
                  className="Diavan"
                />
              </Box>
            </Box>
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "40px",
              marginRight: "15px",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/manager/assign"
              sx={{
                fontWeight: "bold",
                color: activeButton === "assign" ? "grey" : "black",
                width: "110px",
                "&:hover": {
                  color: activeButton === "approval" ? "black" : "grey",
                },
              }}
              onClick={() => handleButtonClick("assign")}
            >
              Assign
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/manager/approval"
              sx={{
                fontWeight: "bold",
                color: activeButton === "approval" ? "grey" : "black",
                width: "110px",
                "&:hover": {
                  color: activeButton === "assign" ? "black" : "grey",
                },
              }}
              onClick={() => handleButtonClick("approval")}
            >
              Approval
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
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
              <MenuItem key="logout" onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ManagerNavbar;
