import { Grid, Paper } from "@mui/material";
import Certificate from "../../components/manager/certificate";

const CertificatePage = () => {
  return (
    <Grid>
      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "5px",
          backgroundColor: "red",
        }}
      >
        <Certificate />
      </Paper>
    </Grid>
  );
};

export default CertificatePage;
