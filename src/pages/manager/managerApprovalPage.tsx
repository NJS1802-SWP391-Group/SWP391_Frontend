import { Box, Grid, Paper } from "@mui/material";

import ApprovalManager from "../../components/manager/approvalManager";
import SearchBar from "../../components/manager/searchBar";

const ManagerApprovalPage = () => {
  return (
    <Grid>
      <Box sx={{ marginLeft: "900px" }}>
        <SearchBar />
      </Box>
      <Paper
        sx={{
          width: "1300px",
          marginLeft: "250px",
          marginTop: "15px",
        }}
      >
        <ApprovalManager />
      </Paper>
    </Grid>
  );
};

export default ManagerApprovalPage;
