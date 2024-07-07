import { Grid, Paper } from "@mui/material";
import NavigationBar from "../../components/admin/NavigationBar";
import Service from "../../components/manager/service";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServicePage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
      <Grid container xs={12} sx={{ display: "flex", gap: 4 }}>
        <Grid item xs={2} sx={{ height: "700px" }}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9.5}>
          <Paper>
            <Service />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicePage;
