import {
  Box,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoButton from "../../assets/NoButton.png";
import YesButton from "../../assets/YesButton.png";
import { ManagerApprovalResponse } from "../../interfaces/manager/managerResponse";
import managerAssignsApi from "../../services/managerService/managerApi";

const ApprovalManager = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedManagerResponse, setSelectedManagerResponse] =
    React.useState<ManagerApprovalResponse | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpen = (managerResponse: ManagerApprovalResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();
  const handleNavigateToCertificate = (
    resultId: number,
    managerResponse: ManagerApprovalResponse
  ) => {
    navigate(`/manager/approval/${resultId}`, {
      state: { managerResponse },
    });
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

  const [managerResponseList, setManagerResponseList] = useState<
    ManagerApprovalResponse[]
  >([]);
  useEffect(() => {
    const fetchManagerApprovalList = async () => {
      const response: any = await managerAssignsApi.getAllCompledted();
      console.log("FetchData", response);
      if (response && response.length > 0) {
        setManagerResponseList(response);
      }
    };

    const initUseEffect = async () => {
      await fetchManagerApprovalList();
    };
    initUseEffect();
  }, []);
  console.log("first");

  const paginatedManagerResponseList = managerResponseList.slice(
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
                Order Detail Code
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Service</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>
                Valuation Staff
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>
                Valuing Price
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Status</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedManagerResponseList.map((managerResponse) => (
              <StyledTableRow key={managerResponse.orderDetailID}>
                <StyledTableCell>
                  {managerResponse.orderDetailCode}
                </StyledTableCell>
                <StyledTableCell>{managerResponse.serviceName}</StyledTableCell>
                <StyledTableCell>
                  {managerResponse.valuationStaffName}
                </StyledTableCell>
                <StyledTableCell>
                  {managerResponse.valuatingPrice}
                </StyledTableCell>
                <StyledTableCell>{managerResponse.status}</StyledTableCell>
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
                    <IconButton
                      onClick={() =>
                        handleNavigateToCertificate(
                          managerResponse.orderDetailID,
                          managerResponse
                        )
                      }
                    >
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
        count={managerResponseList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "White",
            borderRadius: "10px",
            width: "40%",
            margin: "auto",
            marginTop: "10%",
            padding: "20px",
            boxShadow: 24,
            outline: "none",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Do you want to decline Diamond:{" "}
            {selectedManagerResponse?.orderDetailCode} with Price:{" "}
            {selectedManagerResponse?.valuatingPrice}?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              marginTop: "20px",
              paddingRight: "20px",
            }}
          >
            <IconButton onClick={handleClose}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Yes
              </Typography>
            </IconButton>
            <IconButton onClick={handleClose}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                No
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ApprovalManager;
