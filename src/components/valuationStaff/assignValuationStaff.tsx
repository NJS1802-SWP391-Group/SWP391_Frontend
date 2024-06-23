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
import DoneButton from "../../assets/DoneButton.png"; // Import DoneButton image
import PlusButton from "../../assets/PlusButton.png";
import SendButton from "../../assets/SendButton.png";
import { AssignValuationStaffResponse } from "../../interfaces/valuationStaff/valuationStaffResponse";
import accountApi from "../../services/accountApi";
import valuationStaffApi from "../../services/managerService/valuationStaffApi";

export interface RequetsBody {
  orderDetailID: number;
  valuationStaffID: number | undefined;
}

const AssignValuationStaff = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedValuationStaffResponse, setSelectedValuationStaffResponse] =
    useState<AssignValuationStaffResponse | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [
    assignValuationStaffResponseList,
    setAssignValuationStaffResponseList,
  ] = useState<AssignValuationStaffResponse[]>([]);
  const [clickedOrderDetailId, setClickedOrderDetailId] = useState<
    number | null
  >(null);

  const handleOpen = (valuationStaffResponse: AssignValuationStaffResponse) => {
    setSelectedValuationStaffResponse(valuationStaffResponse);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValuationStaffResponse(null);
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

  const handleSend = (orderDetailID: number) => {
    valuationStaffApi.changeStatusToCompleted(orderDetailID).then(
      (response) => {
        console.log("response:", response);
        alert(`Send successfully`);
        // Reload the page after successful save
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handlePlusButtonClick = (
    orderDetailId: number,
    assignValuationStaffResponse: AssignValuationStaffResponse
  ) => {
    if (clickedOrderDetailId === orderDetailId) {
      setClickedOrderDetailId(null); // Toggle back to PlusButton
    } else {
      setClickedOrderDetailId(orderDetailId); // Set to DoneButton
      navigate(`/diamond/${orderDetailId}`, {
        state: assignValuationStaffResponse,
      });
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

  useEffect(() => {
    const getAccount = async () => {
      const account: any = await accountApi.getAccountInfo();
      console.log("account api: ", account);

      const list: any =
        await valuationStaffApi.getOrderDetailByValuationStaffId(
          account.result.user.accountId
        );
      console.log("list", list);
      setAssignValuationStaffResponseList(list);
    };
    getAccount();
  }, []);
  console.log("Log Asign:", assignValuationStaffResponseList);

  const paginatedAssignValuationStaffResponseList =
    assignValuationStaffResponseList.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4F46E5" }}>
              <StyledTableCell sx={styleTableHead}>Order Code</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Service</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Status</StyledTableCell>
              <StyledTableCell sx={styleTableHead}>
                Input Figure
              </StyledTableCell>
              <StyledTableCell sx={styleTableHead}>Send Result</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAssignValuationStaffResponseList.map(
              (valuationStaffResponse) => (
                <StyledTableRow key={valuationStaffResponse.orderDetailId}>
                  <StyledTableCell>
                    {valuationStaffResponse.orderDetailCode}
                  </StyledTableCell>
                  <StyledTableCell>
                    {valuationStaffResponse.serviceName}
                  </StyledTableCell>
                  <StyledTableCell>
                    {valuationStaffResponse.status}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <IconButton
                        onClick={() =>
                          handlePlusButtonClick(
                            valuationStaffResponse.orderDetailId,
                            valuationStaffResponse
                          )
                        }
                      >
                        <img
                          src={
                            clickedOrderDetailId ===
                            valuationStaffResponse.orderDetailId
                              ? DoneButton
                              : PlusButton
                          }
                          width="30"
                          height="30"
                          alt="PlusButton"
                          className="Plusbutton"
                        />
                      </IconButton>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <IconButton
                        onClick={() => handleOpen(valuationStaffResponse)}
                      >
                        <img
                          src={SendButton}
                          width="30"
                          height="30"
                          alt="SendButton"
                          className="Sendbutton"
                        />
                      </IconButton>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={assignValuationStaffResponseList.length}
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
          <Typography sx={{ fontWeight: "bold " }}>
            (Order Code:
            {selectedValuationStaffResponse?.orderDetailId})
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Do you want to send Diamond:
            {selectedValuationStaffResponse?.orderDetailCode} ?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              marginTop: "20px",
            }}
          >
            <IconButton
              onClick={() =>
                handleSend(selectedValuationStaffResponse?.orderDetailId!)
              }
            >
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

export default AssignValuationStaff;
