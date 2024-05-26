import { Box, Grid, Paper } from "@mui/material";
import ManagerList from "../../components/manager/managerResponse";
import SearchBar from "../../components/manager/searchBar";

const paperStyle = {
  width: 1200,
  height: 500,
  margin: "0 auto",
};

const ManagerPage = () => {
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
        <ManagerList />
      </Paper>
    </Grid>
  );
};

export default ManagerPage;
