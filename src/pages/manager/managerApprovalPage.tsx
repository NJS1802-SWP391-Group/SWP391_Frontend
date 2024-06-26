import { Box, Grid, Paper } from "@mui/material";

import { useState } from "react";
import ApprovalManager from "../../components/manager/approvalManager";
import ManagerNavbar from "../../components/manager/manageNavbar";
import SearchBar from "../../components/manager/searchBar";

const ManagerApprovalPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid>
      <ManagerNavbar />
      <Grid sx={{}}>
        <Box sx={{ marginLeft: "900px" }}>
          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
        </Box>

        <Paper
          sx={{
            width: "1300px",
            marginLeft: "60px",
            marginTop: "15px",
          }}
        >
          <ApprovalManager />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManagerApprovalPage;
