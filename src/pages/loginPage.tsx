import { Box, Grid, Paper } from "@mui/material";
import BackButton from "../components/buttons/backButton";

const paperStyle = {
  width: 600,
  height: 800,
  margin: "0 auto",
};

const LoginPage = () => {
  return (
    <Grid
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
          {/* <LoginForm /> */}
        </Box>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
