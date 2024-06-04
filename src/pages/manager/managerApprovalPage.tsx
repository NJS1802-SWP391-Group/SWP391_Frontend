import { Box, Grid, Paper } from "@mui/material";

import { useState } from "react";
import ApprovalManager from "../../components/manager/approvalManager";
import SearchBar from "../../components/manager/searchBar";
import NavBarSystem from "../../components/system/NavBarSystem";

const ManagerApprovalPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
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
            marginLeft: "250px",
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
