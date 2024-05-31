import { Box, Grid, Paper } from "@mui/material";
import { useState } from "react";
import AssignManager from "../../components/manager/assignManager";
import SearchBar from "../../components/manager/searchBar";
import NavBarSystem from "../../components/system/NavBarSystem";

const ManagerAssignPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid>
      <NavBarSystem marginBottom="100px" />
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
