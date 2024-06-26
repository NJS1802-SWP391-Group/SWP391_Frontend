import NavBarSystem from "../../components/system/NavBarSystem";
import NavigationBar from "../../components/admin/NavigationBar";
import { Grid } from "@mui/material";
import AdminSection from "../../components/admin/AdminSection";

const AdminPage = () => {
  return (
    <div>
      <NavBarSystem marginBottom="80px" />
      <Grid container xs={12} sx={{ display: "flex", gap: 3 }}>
        <Grid item xs={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={9}>
          <AdminSection />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
