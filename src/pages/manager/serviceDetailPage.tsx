import { Grid, Paper } from "@mui/material";
import ServiceDetail from "../../components/manager/serviceDetail";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServiceDetailPage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />

      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "5px",
        }}
      >
        <ServiceDetail />;
      </Paper>
    </Grid>
  );
};

export default ServiceDetailPage;
