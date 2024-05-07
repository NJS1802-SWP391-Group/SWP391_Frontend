import { yupResolver } from "@hookform/resolvers/yup";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import * as yup from "yup";
import {
  ROLE_ID_KEY,
  USER_FULLNAME_KEY,
  USER_ID_KEY,
  USER_TOKEN_KEY,
} from "../../constants";

import DiavanImage from "../../assets/Diavan.png";
import ErrorMessage from "../../errors/errorMessage";
import { LoginRequest } from "../../interfaces/login/loginRequest";
import loginAPI from "../../services/loginApi";
import { addErrorIntoField } from "../../utils/utils";

// const usernameRegExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
// const passwordRegExp =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;

const validationSchema = yup.object({
  username: yup.string().required("Cannot empty in the Account blank!"),
  // .matches(usernameRegExp, "Cannot start or end with the special word"),

  password: yup.string().required("Please, input your password!"),
  // .matches(
  //   passwordRegExp,
  //   "Password have al least 8 word, an uppercase, a lowercase, a digit and a special word!"
  // ),
});
const leftGridStyle = {
  marginTop: "20px",
};

const rightGridStyle = {
  marginTop: "20px",
  width: "100%",
};

const titleStyle = {
  fontWeight: "bolder",
};

const gridStyle = {
  marginTop: "10px",
  marginBottom: "10px",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<LoginRequest>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
    try {
      const response: any = await loginAPI.login({
        username: data.username,
        password: data.password,
      });
      if (response.user) {
        localStorage.setItem(USER_ID_KEY, response.user.id);
        localStorage.setItem(ROLE_ID_KEY, response.role.id);
        localStorage.setItem(USER_FULLNAME_KEY, response.user.fullName);
        localStorage.setItem(USER_TOKEN_KEY, response.token);
        switch (response.role.id) {
          case 1:
            navigate("/admin");
            console.log("Go to Admin Page");
            break;

          case 2:
            navigate("/manager");
            console.log("Go to Manager Page");
            break;

          case 3:
            navigate("/valuationStaff");
            console.log("Go to Valuation Staff Page");
            break;

          case 4:
            navigate("/consultingStaff");
            console.log("Go to Consulting Staff Page");
            break;
          case 5:
            navigate("/customer");
            console.log("Go to Customer Page");
            navigate("/");
            break;
          default:
            console.log("default!");
        }
      }
      if (response === "Cannot find user") {
        toast.error("Login Failed! Wrong username or password!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Login Failed!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log("Error at login Form", error);
      toast.error("Login Failed!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const handleClickShowPassword = () => setShowPassword((show: any) => !show);
  const handleMouseDownPassword = () => (event: any) => {
    event.preventDefault();
  };

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ width: "100%", marginTop: "80px" }}
    >
      <Box width={140} height={140} margin="0 auto">
        <img width="100%" height="100%" src={DiavanImage} alt="Logo" />
      </Box>
      <Box width={450} height={240} margin="0 auto" marginTop={5}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={3}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Username
              </Typography>
            </Grid>
            <Grid item style={rightGridStyle} xs={9}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["username"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("username")}
                    id="outlined-start-adornment"
                    type="text"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors["username"] ? (
                <ErrorMessage message={errors["username"].message} />
              ) : null}
            </Grid>
          </Grid>
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={3}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Password
              </Typography>
            </Grid>
            <Grid item style={rightGridStyle} xs={9}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["password"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("password")}
                    id="outlined-start-adornment"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors["password"] ? (
                <ErrorMessage message={errors["password"].message} />
              ) : null}
            </Grid>
          </Grid>

          <FormGroup sx={{ marginTop: "8px" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              sx={{ fontWeight: "bolder" }}
              label="Remember me?"
            />
          </FormGroup>

          <Grid container justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              type="submit"
              style={{
                width: "50%",
                marginTop: "24px",
                backgroundColor: "#111827",
              }}
            >
              Sign in
            </Button>
          </Grid>
        </form>
      </Box>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "350px" }}
      />
    </Grid2>
  );
};

export default LoginForm;
