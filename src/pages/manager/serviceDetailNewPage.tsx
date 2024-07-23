import { Grid, Paper } from "@mui/material";
import NavigationBar from "../../components/admin/NavigationBar";
import ServiceDetailNew from "../../components/manager/serviceDetailNew";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServiceDetailNewPage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
      <Grid container xs={12} sx={{ display: "flex", gap: 3 }}>
        <Grid item xs={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9.6}>
          <Paper>
            <ServiceDetailNew />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceDetailNewPage;
