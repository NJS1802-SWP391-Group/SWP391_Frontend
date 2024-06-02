import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  Modal,
  Paper,
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
import React, { useState } from "react";
import PlusButton from "../../assets/PlusButton.png";
import SearchButton from "../../assets/Search.png";
import { ManagerAssignResponse } from "../../interfaces/manager/managerResponse";

const AssignManager = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [selectedManagerResponse, setSelectedManagerResponse] =
    useState<ManagerAssignResponse | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (managerResponse: ManagerAssignResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [managers, setManagers] = useState([
    { id: "7749", name: "Nguyen Gia Bao" },
    { id: "7750", name: "Nguyen Gia Tri" },
    { id: "7755", name: "Nguyen Gia Linh" },
    { id: "7777", name: "Nguyen Gia Bi" },
    { id: "7779", name: "Nguyen Gia Bo" },
  ]);

  const [managerAssignList, setManagerAssignList] = useState<
    ManagerAssignResponse[]
  >([
    {
      orderDetail: "001",
      diamond: "DIA01",
      service: "5h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
    {
      orderDetail: "002",
      diamond: "DIA02",
      service: "24h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
    {
      orderDetail: "003",
      diamond: "DIA01",
      service: "5h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
    {
      orderDetail: "004",
      diamond: "DIA02",
      service: "5h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
    {
      orderDetail: "005",
      diamond: "DIA01",
      service: "48h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
    {
      orderDetail: "006",
      diamond: "DIA02",
      service: "24h",
      price: "50$",
      estimateLength: 3.5,
      valuationStaff: null,
    },
  ]);

  const handleManagerSelect = (valuationStaff: {
    id: string;
    name: string;
  }) => {
    if (selectedManagerResponse) {
      setManagerAssignList((prevList) =>
        prevList.map((item) =>
          item.orderDetail === selectedManagerResponse.orderDetail
            ? { ...item, valuationStaff }
            : item
        )
      );
      handleCloseMenu();
    }
  };

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    managerResponse: ManagerAssignResponse
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedManagerResponse(managerResponse);
    setMenuPosition({ top: event.clientY, left: event.clientX });
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedManagerResponse(null);
  };

  const filteredValuationStaffs = managers.filter((valuationStaff) =>
    valuationStaff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedManagerResponseList = managerAssignList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Order Code
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Diamond
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Service
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Price
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "black",
                  width: "20%",
                }}
              >
                Estimate Length
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                Assign
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedManagerResponseList.map((managerResponse) => (
              <StyledTableRow key={managerResponse.orderDetail}>
                <StyledTableCell>{managerResponse.orderDetail}</StyledTableCell>
                <StyledTableCell>{managerResponse.diamond}</StyledTableCell>
                <StyledTableCell>{managerResponse.service}</StyledTableCell>
                <StyledTableCell>{managerResponse.price}</StyledTableCell>
                <StyledTableCell>
                  {managerResponse.estimateLength}
                </StyledTableCell>
                <StyledTableCell>
                  {managerResponse.valuationStaff ? (
                    managerResponse.valuationStaff.name
                  ) : (
                    <IconButton
                      onClick={(event) =>
                        handleOpenMenu(event, managerResponse)
                      }
                    >
                      <img
                        src={PlusButton}
                        width="35"
                        height="35"
                        alt="PlusButton"
                      />
                    </IconButton>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={managerAssignList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorReference="anchorPosition"
        anchorPosition={{ top: menuPosition.top, left: menuPosition.left }}
      >
        <Box sx={{ padding: 2, height: "60px" }}>
          <TextField
            variant="outlined"
            placeholder="Search Valuation Staff"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <img
                      src={SearchButton}
                      width="25"
                      height="25"
                      alt="SearchButton"
                    />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                height: "45px",
                width: "250px",
                borderRadius: "65px",
                border: "0.5px solid #000",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000",
                },
                paddingRight: "8px",
              },
            }}
          />
        </Box>
        <Box sx={{ maxHeight: "200px", overflow: "auto", marginTop: 2 }}>
          {filteredValuationStaffs.map((valuationStaff) => (
            <Box
              key={valuationStaff.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={() => handleManagerSelect(valuationStaff)}
            >
              <Box>
                <Box>ID: {valuationStaff.id}</Box>
                <Box>{valuationStaff.name}</Box>
              </Box>
              <IconButton>
                <img src={PlusButton} width="20" height="20" alt="PlusButton" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Menu>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            borderRadius: "10px",
            width: "300px",
            padding: 2,
            marginLeft: "1200px",
          }}
        >
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search Valuation Staff"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img
                        src={SearchButton}
                        width="25"
                        height="25"
                        alt="SearchButton"
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  height: "45px",
                  width: "250px",
                  borderRadius: "15px",
                  border: "0.5px solid #000",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                  paddingRight: "8px",
                },
              }}
            />
          </Box>
          <Box sx={{ maxHeight: "200px", overflow: "auto", marginTop: 2 }}>
            {filteredValuationStaffs.map((valuationStaff) => (
              <Box
                key={valuationStaff.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
                onClick={() => handleManagerSelect(valuationStaff)}
              >
                <Box>
                  <Box>ID: {valuationStaff.id}</Box>
                  <Box>{valuationStaff.name}</Box>
                </Box>
                <IconButton>
                  <img
                    src={PlusButton}
                    width="20"
                    height="20"
                    alt="PlusButton"
                  />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default AssignManager;
