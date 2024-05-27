import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import NoButton from "../../assets/NoButton.png";
import YesButton from "../../assets/YesButton.png";
import { ManagerAssignResponse } from "../../interfaces/manager/managerResponse";

const AssignManager = () => {
  const [selectedManagerResponse, setSelectedManagerResponse] =
    React.useState<ManagerAssignResponse | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const [Open, setOpen] = useState(false);
  const handleOpen = (managerResponse: ManagerAssignResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
      orderDetail: "004",
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
                        src={NoButton}
                        width="35"
                        height="35"
                        alt="NoButton"
                        className="Nobutton"
                      />
                    </IconButton>
                    <IconButton>
                      <img
                        src={YesButton}
                        width="35"
                        height="35"
                        alt="YesButton"
                        className="YesButton"
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
    </Box>
  );
};

export default AssignManager;
