import AdbIcon from "@mui/icons-material/Adb";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Diavan.png";

import AvatarBoy from "../../assets/boy_12894580.png";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(2.5, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// const settings = ["Profile", "Logout"];

export default function NavBarSystem(marginBottom: { marginBottom: string }) {
  const navigate = useNavigate();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  console.log("setOpen", setOpen);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  //   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //     null
  //   );

  //   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("Logout successfully");
    navigate("/system");
  };
  return (
    <Box sx={{ display: "flex", marginBottom: marginBottom }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton> */}
          <span style={{ marginRight: "10px" }}>
            <img
              src={Logo}
              alt=""
              width="74px"
              height="74px"
              style={{ padding: "10px 10px" }}
            />
          </span>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Diavan
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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
              <MenuItem key="logout" onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography
          sx={{
            backgroundColor: "grey",
            borderRadius: "25px",
            width: "90%",
            marginLeft: "5%",
          }}
          variant="h6"
          marginTop="10px"
          textAlign="center"
          color="whitesmoke"
        >
          Staff Services
        </Typography>
        <List>
          {["Consulting Staff", "Valuation Staff"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <img
                      src={ConsultingIcon}
                      alt=""
                      width="64px"
                      height="64px"
                      style={{ padding: "10px 10px" }}
                    />
                  ) : (
                    <img
                      src={ValuationStaffIcon}
                      alt=""
                      width="64px"
                      height="64px"
                      style={{ padding: "10px 10px" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography
          sx={{
            backgroundColor: "grey",
            borderRadius: "25px",
            width: "90%",
            marginLeft: "5%",
          }}
          variant="h6"
          marginTop="10px"
          textAlign="center"
          color="whitesmoke"
        >
          Manager Services
        </Typography>
        <List>
          {["Assign", "Approval"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <img
                      src={AssignIcon}
                      alt=""
                      width="64px"
                      height="64px"
                      style={{ padding: "10px 10px" }}
                    />
                  ) : (
                    <img
                      src={ApproveIcon}
                      alt=""
                      width="64px"
                      height="64px"
                      style={{ padding: "10px 10px" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography
          sx={{
            backgroundColor: "grey",
            borderRadius: "25px",
            width: "90%",
            marginLeft: "5%",
          }}
          variant="h6"
          marginTop="10px"
          textAlign="center"
          color="whitesmoke"
        >
          Admin Services
        </Typography>
        <List>
          {["Dashboard"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <img
                      src={DashboardIcon}
                      width="64px"
                      height="64px"
                      style={{ padding: "10px 10px" }}
                    />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
    </Box>
  );
}
