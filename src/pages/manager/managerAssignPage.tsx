import { Grid, Paper } from "@mui/material";
import AssignManager from "../../components/manager/assignManager";
import NavBarSystem from "../../components/system/NavBarSystem";

const ManagerAssignPage = () => {
  return (
    <Grid>
      <NavBarSystem marginBottom="130px" />

      <Paper
        sx={{
          width: "1300px",
          marginLeft: "60px",
          marginTop: "5px",
        }}
      >
        <AssignManager />
      </Paper>
    </Grid>
  );
};

export default ManagerAssignPage;
