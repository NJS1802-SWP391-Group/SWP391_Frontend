import { Grid } from "@mui/material";
import NavigationBar from "../../components/admin/NavigationBar";
import Service from "../../components/manager/service";
import NavBarSystem from "../../components/system/NavBarSystem";

const ServicePage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
      <Grid container xs={12} sx={{ display: "flex", gap: 3 }}>
        <Grid item xs={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9}>
          <Service />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicePage;
