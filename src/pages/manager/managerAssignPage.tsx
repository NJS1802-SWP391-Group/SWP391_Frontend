import { Box, Grid, Paper } from "@mui/material";
import AssignManager from "../../components/manager/assignManager";
import SearchBar from "../../components/manager/searchBar";

const ManagerAssignPage = () => {
  return (
    <Grid>
      <Box sx={{ marginLeft: "900px" }}>
        <SearchBar />
      </Box>
      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "5px",
        }}
      >
        <AssignManager />
      </Paper>
    </Grid>
  );
};

export default ManagerAssignPage;
