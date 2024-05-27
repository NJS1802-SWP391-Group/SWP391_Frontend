import {
  Box,
  IconButton,
  InputAdornment,
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
  //handle pagination
  const [selectedManagerResponse, setSelectedManagerResponse] =
    React.useState<ManagerAssignResponse | null>(null);

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

  //handle modal
  const [open, setOpen] = useState(false);
  const handleOpen = (managerResponse: ManagerAssignResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
  };

  //handle dropdown
  const [isMenu, setIsMenu] = React.useState(false);

  //handle style
  const styleTableHead = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "black",
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const [managerAssignList, setManagerAsignList] = useState<
    ManagerAssignResponse[]
  >([
    {
      orderDetail: "123450",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123451",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123452",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123453",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123454",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123455",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123456",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123457",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123458",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123459",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
    {
      orderDetail: "123470",
      diamond: "DIA01",
      service: "24h",
      price: "50$",
    },
  ]);

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
              <StyledTableCell sx={styleTableHead}>
                Order Detail
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Diamond</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Service</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Price</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Assign</StyledTableCell>
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
                  <Box>
                    <IconButton onClick={() => handleOpen(managerResponse)}>
                      <img
                        src={PlusButton}
                        width="35"
                        height="35"
                        alt="PlusButton"
                        className="Plusbutton"
                      />
                    </IconButton>
                  </Box>
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

      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{ backgroundColor: "white", borderRadius: "50px", width: "25%" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "350px",
              margin: "0 auto",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search order detail code"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img
                        src={SearchButton}
                        width="25"
                        height="25"
                        alt="SearchButton"
                        className="SearchButton"
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  height: "45px",
                  borderRadius: "25px",
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
          <Box></Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default AssignManager;
