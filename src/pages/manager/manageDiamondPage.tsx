import { Grid, Paper } from "@mui/material";
import ManageDiamond from "../../components/manager/manageDiamond";
import NavBarSystem from "../../components/system/NavBarSystem";

const ManageDiamondPage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="130px" />

      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "5px",
        }}
      >
        <ManageDiamond />
      </Paper>
    </Grid>
  );
};

export default ManageDiamondPage;
