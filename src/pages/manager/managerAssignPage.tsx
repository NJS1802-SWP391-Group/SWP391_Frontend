import { Grid, Paper } from "@mui/material";
import AssignManager from "../../components/manager/assignManager";
import ManagerNavbar from "../../components/manager/manageNavbar";

const ManagerAssignPage = () => {
  return (
    <Grid>
      <ManagerNavbar />
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
