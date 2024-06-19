import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import { DiamondResponse } from "../../interfaces/manager/diamondResponse";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.MuiTableCell-head`]: {
    backgroundColor: "lightblue",
    color: theme.palette.common.black,
    fontWeight: "bold",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  [`&.MuiTableCell-body`]: {
    fontSize: 14,
    padding: "8px",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageDiamond = () => {
  const [diamond, setDiamond] = useState<DiamondResponse[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [newDiamond, setNewDiamond] = useState<DiamondResponse | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddDiamond = () => {
    setNewDiamond({
      diamondId: 0,
      origin: "",
      shape: "",
      carat: "",
      color: "",
      clarity: "",
      fluorescence: "",
      symmetry: "",
      polish: "",
      cutGrade: "",
      value: 0,
      source: "",
      status: "",
    });
  };

  const handleExportData = () => {
    // Logic to export data
  };

  const handleSaveMember = () => {
    if (newDiamond) {
      setDiamond((prevDiamond) => [
        ...prevDiamond,
        {
          ...newDiamond,
          DiamondID: `Diamond${prevDiamond.length + 1}`,
        },
      ]);
      setNewDiamond(null);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (newDiamond) {
      setNewDiamond((prevDiamond) =>
        prevDiamond ? { ...prevDiamond, [name]: value } : null
      );
    }
  };

  const handleCloseDialog = () => {
    setNewDiamond(null);
  };

  // const handleDeleteMember = (memberId: string) => {
  //   setMembers((prevMembers) => prevMembers.filter((m) => m.FeID !== memberId));
  // };

  const filteredDiamond = diamond.filter((diamond) => {
    const keyword = searchKeyword.toLowerCase();
    const originLower = diamond.origin.toLowerCase();
    const colorLower = diamond.color.toLowerCase();
    const source = diamond.source;

    return (
      (originLower.includes(keyword) ||
        colorLower.includes(keyword) ||
        source.includes(searchKeyword)) &&
      (filterStatus === "" || diamond.status === filterStatus)
    );
  });

  const displayedDiamond = filteredDiamond.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <TextField
            label="🔎 Search by Username, Email, or Phone"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            value={searchKeyword}
            sx={{ marginRight: 2, width: "300px" }}
          />
          <FormControl variant="outlined" size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={handleFilterChange}
              label="Status"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ marginRight: 2 }}
            onClick={handleAddDiamond}
          >
            New Diamond
          </Button>
          <Button variant="contained" onClick={handleExportData}>
            Export Data
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell>Member ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedDiamond.map((diamond, index) => (
              <StyledTableRow key={diamond.diamondId}>
                <StyledTableCell>
                  {page * rowsPerPage + index + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {diamond.diamondId}
                </StyledTableCell>
                <StyledTableCell>{diamond.diamondId}</StyledTableCell>
                <StyledTableCell>{diamond.origin}</StyledTableCell>
                <StyledTableCell>{diamond.shape}</StyledTableCell>
                <StyledTableCell>{diamond.fluorescence}</StyledTableCell>
                {/* <StyledTableCell>{member.Email}</StyledTableCell>
                  <StyledTableCell>{member.Phone}</StyledTableCell>
                  <StyledTableCell>{member.CreatedTime}</StyledTableCell>
                  <StyledTableCell>{member.Status}</StyledTableCell> */}
                {/* <StyledTableCell>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleEditDiamond(diamond)}
                      sx={{
                        marginRight: 1,
                        backgroundColor: "lightgrey",
                        color: "black",
                        opacity: "90%",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleDeleteMember(member.FeID)}
                      sx={{ backgroundColor: "ButtonShadow", color: "black" }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredDiamond.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {newDiamond && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>New Member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details of the new member.
            </DialogContentText>
            <TextField
              margin="dense"
              label="Origin"
              type="text"
              fullWidth
              name="Origin"
              value={newDiamond.origin}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Shape"
              type="text"
              fullWidth
              name="Shape"
              value={newDiamond.shape}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Carat"
              type="text"
              fullWidth
              name="Carat"
              value={newDiamond.carat}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Color"
              type="text"
              fullWidth
              name="Color"
              value={newDiamond.color}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Clarity"
              type="email"
              fullWidth
              name="Clarity"
              value={newDiamond.clarity}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Fluorescence"
              type="text"
              fullWidth
              name="Fluorescence"
              value={newDiamond.fluorescence}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Symmetry"
              type="text"
              fullWidth
              name="Symmetry"
              value={newDiamond.symmetry}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveMember} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ManageDiamond;
