import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Diavan from "../../assets/Diavan.png";
const ManagerNavbar = () => {
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
          <Button
            color="inherit"
            component={Link}
            to="/manager/assign"
            sx={{ fontWeight: "bold" }}
          >
            Assign
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/manager/approval"
            sx={{ fontWeight: "bold" }}
          >
            Approval
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ManagerNavbar;
