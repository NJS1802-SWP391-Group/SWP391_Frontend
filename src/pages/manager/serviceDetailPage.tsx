import { Grid } from "@mui/material";
import NavigationBar from "../../components/admin/NavigationBar";
import ServiceDetail from "../../components/manager/serviceDetail";

const ServiceDetailPage = () => {
  return (
    <Grid>
      <Grid container xs={12} sx={{ display: "flex", gap: 3 }}>
        <Grid item xs={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9}>
          <ServiceDetail />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceDetailPage;
