import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../components/manager/searchBar";
import NavBarSystem from "../../components/system/NavBarSystem";
import AssignValuationStaff from "../../components/valuationStaff/assignValuationStaff";

const AssignedValuationStaffPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
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
          marginTop: "5px",
        }}
      >
        <AssignValuationStaff />
      </Paper>
    </Grid>
  );
};

export default AssignedValuationStaffPage;
