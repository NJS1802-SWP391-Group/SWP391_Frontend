import { Grid, Paper } from "@mui/material";
import Certificate from "../../components/manager/certificate";
import NavBarSystem from "../../components/system/NavBarSystem";

const CertificatePage = () => {
  return (
    <Grid sx={{ height: "100%", width: "1300px" }}>
      <NavBarSystem marginBottom="100px" />
      <Paper
        sx={{
          width: "1150px",
          marginLeft: "100px",
          backgroundColor: "white",
          paddingLeft: "20px",
        }}
      >
        <Certificate />
      </Paper>
    </Grid>
  );
};

export default CertificatePage;
