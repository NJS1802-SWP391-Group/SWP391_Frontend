import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneButton from "../../assets/DoneButton.png";
import NoButton from "../../assets/NoButton.png";
import SearchButton from "../../assets/Search.png";
import ViewImage from "../../assets/ViewImage.png";
import { ManagerApprovalResponse } from "../../interfaces/manager/managerResponse";
import certificateApi from "../../services/certificateService/certificateApi";
import managerAssignsApi from "../../services/managerService/managerApi";

const ApprovalManager = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedManagerResponse, setSelectedManagerResponse] =
    React.useState<ManagerApprovalResponse | null>(null);
  const [orderDetailIdToReject, setOrderDetailIdToReject] = useState<
    number | null
  >(null);

  const [orderDetailIdToDone, setOrderDetailIdToDone] = useState<number | null>(
    null
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
    setOrderDetailIdToReject(null);
  };

  const handleOpen = (managerResponse: ManagerApprovalResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
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
      state: managerResponse,
    });
  };

  const [managerResponseList, setManagerResponseList] = useState<
    ManagerApprovalResponse[]
  >([]);

  const fetchManagerApprovalList = async () => {
    const response: any = await managerAssignsApi.getAllCompledted();
    if (response && response.length > 0) {
      setManagerResponseList(response);
    }
  };

  useEffect(() => {
    const initUseEffect = async () => {
      await fetchManagerApprovalList();
    };
    initUseEffect();
  }, []);

  const handleReject = () => {
    if (orderDetailIdToReject !== null) {
      managerAssignsApi.changeStatusToReAssigning(orderDetailIdToReject).then(
        (response) => {
          alert("The order has been transformed to reassigning");
          fetchManagerApprovalList();
          handleClose();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const handleDoneClick = async (orderDetailId: number) => {
    try {
      const response = await certificateApi.changeStatusToCertificated(
        orderDetailId
      );
      console.log("res:", response);
      fetchManagerApprovalList();
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value);
  };

  const filteredManagerResponseList = managerResponseList
    .filter(
      (response) =>
        response.orderDetailCode
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        response.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (response) => filterStatus === "" || response.status === filterStatus
    );

  const paginatedManagerResponseList = filteredManagerResponseList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
        <TextField
          label="Search OD Code, ServiceName"
          variant="outlined"
          size="small"
          onChange={handleSearchChange}
          value={searchQuery}
          sx={{ marginRight: 2, width: "300px" }}
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
          }}
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
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
              <StyledTableRow key={managerResponse.orderDetailId}>
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
                    {managerResponse.status === "Failed" ? (
                      <>
                        <IconButton
                          onClick={() => {
                            setOrderDetailIdToReject(
                              managerResponse.orderDetailId
                            );
                            handleOpen(managerResponse);
                          }}
                        >
                          <img
                            src={NoButton}
                            width="35"
                            height="35"
                            alt="NoButton"
                          />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            handleDoneClick(managerResponse.orderDetailId)
                          }
                        >
                          <img
                            src={DoneButton}
                            width="35"
                            height="35"
                            alt="DoneButton"
                          />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton
                          onClick={() => {
                            setOrderDetailIdToReject(
                              managerResponse.orderDetailId
                            );
                            handleOpen(managerResponse);
                          }}
                        >
                          <img
                            src={NoButton}
                            width="35"
                            height="35"
                            alt="NoButton"
                          />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            handleNavigateToCertificate(
                              managerResponse.resultId,
                              managerResponse
                            )
                          }
                        >
                          <img
                            src={ViewImage}
                            width="35"
                            height="35"
                            alt="ViewImage"
                          />
                        </IconButton>
                      </>
                    )}
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
        count={filteredManagerResponseList.length}
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
            width: "35%",
            margin: "auto",
            marginTop: "10%",
            padding: "20px",
            boxShadow: 24,
            outline: "none",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Do you want to decline Order Detail Code:{" "}
            {selectedManagerResponse?.orderDetailCode}?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleReject}>
              Reject
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ApprovalManager;
