import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

import Manager from "../../assets/Manager.png";
import ManagerNavbar from "../../components/manager/manageNavbar";

const ManagerNavbarPage = () => {
  return (
    <Grid>
      <ManagerNavbar />
      <Grid sx={{}}>
        <Paper
          sx={{
            width: "1300px",
            marginLeft: "60px",
            marginTop: "55px",
          }}
        >
          <Box
            sx={{
              paddingBottom: "20px",
              display: "flex",

              paddingTop: "30px",
              height: "40%",
            }}
          >
            <Box>
              <img src={Manager} height="380" width="380" />
            </Box>
            <Box sx={{ paddingLeft: "60px" }}>
              <Typography sx={{ fontSize: "40px", width: "380px" }}>
                Welcome !
              </Typography>
              <Typography
                sx={{
                  fontFamily: "revert-layer",
                  fontStyle: "italic",
                  fontSize: "20px",
                  paddingLeft: "150px",
                  width: "880px",
                }}
              >
                Determine the accurate value and reimburse the diamond's actual
                worth.
              </Typography>
              <Box sx={{ paddingTop: "60px", paddingLeft: "50px" }}>
                <Typography sx={{ fontSize: "20px" }}>Start here,</Typography>
                <Stack spacing={2} direction="row" sx={{ paddingLeft: "60px" }}>
                  <Typography>Go to Manager Assign:</Typography>
                  <Button
                    sx={{
                      backgroundColor: "rgb(251 146 60)",
                      color: "white",
                      fontSize: "12px",
                      width: "80px",
                    }}
                  >
                    Assign
                  </Button>
                  <Typography sx={{ paddingLeft: "40px" }}>
                    Go to Manager Appproval:
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "rgb(251 146 60)",
                      color: "white",
                      fontSize: "12px",
                      paddingLeft: "40px",
                    }}
                  >
                    Approval
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManagerNavbarPage;
