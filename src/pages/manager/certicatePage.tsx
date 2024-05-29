import { Grid, Paper } from "@mui/material";
import Certificate from "../../components/manager/certificate";
import Navbar from "../../components/navbar/Navbar";

const CerticatePage = () => {
  return (
    <Grid>
      <Navbar />
      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "5px",
        }}
      >
        <Certificate />
      </Paper>
    </Grid>
  );
};

export default CerticatePage;
