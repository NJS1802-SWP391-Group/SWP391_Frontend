import { Grid, Paper } from "@mui/material";
import Service from "../../components/manager/service";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServicePage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />

      <Paper
        sx={{
          width: "1300px",
          marginLeft: "70px",
          marginTop: "5px",
        }}
      >
        <Service />;
      </Paper>
    </Grid>
  );
};

export default ServicePage;
