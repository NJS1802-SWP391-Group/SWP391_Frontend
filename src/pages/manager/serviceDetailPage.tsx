import { Grid, Paper } from "@mui/material";
import NavigationBar from "../../components/admin/NavigationBar";
import ServiceDetail from "../../components/manager/serviceDetail";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServiceDetailPage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
      <Grid container xs={12} sx={{ display: "flex", gap: 3 }}>
        <Grid item xs={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9.6}>
          <Paper>
            <ServiceDetail />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceDetailPage;
