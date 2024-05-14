import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  ROLE_ID_KEY,
  USER_FULLNAME_KEY,
  USER_ID_KEY,
  USER_TOKEN_KEY,
} from "../constants";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const NotFoundPageComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem(USER_FULLNAME_KEY);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(ROLE_ID_KEY);
    localStorage.removeItem(USER_TOKEN_KEY);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography>404 Not Found!</Typography>
      <BootstrapButton
        onClick={handleClick}
        size="large"
        variant="contained"
        disableRipple
      >
        Back
      </BootstrapButton>
    </Box>
  );
};

export default NotFoundPageComponent;
