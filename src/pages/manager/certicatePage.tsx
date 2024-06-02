import { Grid, Paper } from "@mui/material";
import Certificate from "../../components/manager/certificate";
import NavBarSystem from "../../components/system/NavBarSystem";

const CertificatePage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
      <Paper
        sx={{
          width: "1300px",
          height: "10%",
          marginLeft: "250px",
          marginTop: "5px",
          marginBottom: "500px",
          backgroundColor: "white",
        }}
      >
        <Certificate />
      </Paper>
    </Grid>
  );
};

export default CertificatePage;
