import { Grid, Paper } from "@mui/material";
import Certificate from "../../components/manager/certificate";
import NavBarSystem from "../../components/system/NavBarSystem";

const CertificatePage = () => {
  return (
    <Grid sx={{ height: "100%" }}>
      <NavBarSystem marginBottom="100px" />
      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",

          backgroundColor: "white",
        }}
      >
        <Certificate />
      </Paper>
    </Grid>
  );
};

export default CertificatePage;
