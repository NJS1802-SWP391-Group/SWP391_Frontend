import { Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BackButton from "../components/buttons/backButton";
import LoginForm from "../components/forms/loginForm";

const paperStyle = {
  width: 600,
  height: 800,
  margin: "0 auto",
};

const LoginPage = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(25, 118, 210, 0.04)",
      }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="column">
          <BackButton />
          <LoginForm />
        </Box>
      </Paper>
    </Grid2>
  );
};

export default LoginPage;
