import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import DiavanLogo from "../../assets/Diavan.png";
import { LOGIN_SUCCESS } from "../../constants";
import { LoginRequest } from "../../interfaces/login/loginRequest";
import loginAPI from "../../services/loginApi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";

// const validationSchema = yup.object({
//   username: yup.string().required("Can't empty in the Account blank"),
// });

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Diavan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginSystem() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const onChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginData: LoginRequest = {
      username: data.get("userName") as string,
      password: data.get("password") as string,
    };

    loginAPI.login(loginData).then(
      (response: any) => {
        console.log(response);
        if (response.success == true) {
          localStorage.setItem("customerId", response.result.customerId);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem(`token`, response.result.accessToken);
          localStorage.setItem("role", response.result.roleName);
          switch (response.result.roleName) {
            case "Customer":
              alert(LOGIN_SUCCESS);
              navigate("/");
              break;
            case "ConsultingStaff":
              alert(LOGIN_SUCCESS);
              navigate("/consulting-page");
              break;
            case "ValuationStaff":
              alert(LOGIN_SUCCESS);
              navigate("/valuationStaff/assigned");
              break;
            case "Manager":
              alert(LOGIN_SUCCESS);
              navigate("/manager/managing");
              break;
            case "Admin":
              alert(LOGIN_SUCCESS);
              navigate("/admin/service");
              break;
            default:
              alert("You do not have permission to access this page");
              navigate("/home");
              break;
          }
        } else {
          alert(response.result.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <img src={DiavanLogo} alt="" width="70px" height="70px" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={onChangeUsername}
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="userName"
              autoFocus
              error={username ? false : true}
              helperText={username ? "" : "User name cannot empty"}
            />
            <TextField
              onChange={onChangePassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              error={password ? false : true}
              helperText={password ? "" : "Please input password"}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <VisibilityIcon />
              </IconButton>
            </div>

            <Button
              disabled={username && password ? false : true}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
