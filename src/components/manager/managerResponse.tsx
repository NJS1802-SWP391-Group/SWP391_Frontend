import {
  Box,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import NoButton from "../../assets/NoButton.png";
import YesButton from "../../assets/YesButton.png";

import { ManagerResponse } from "../../interfaces/manager/managerResponse";
const ManagerList = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedManagerResponse, setSelectedManagerResponse] =
    React.useState<ManagerResponse | null>(null);
  const handleOpen = (managerResponse: ManagerResponse) => {
    setSelectedManagerResponse(managerResponse);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedManagerResponse(null);
  };

  const styleTableHead = {
    fontWeight: "bold",
    fontSize: "20px",
    border: "5px",
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const [managerResponseList, setManagerResponseList] = useState<
    ManagerResponse[]
  >([
    {
      orderDetail: "DIA01",
      service: "5h",
      valuationStaff: "Nguyen Gia Tri",
      valuingPrice: "18,254$",
      status: "Submited",
    },
    {
      orderDetail: "DIA02",
      service: "24h",
      valuationStaff: "Nguyen Gia Tri",
      valuingPrice: "20,000$",
      status: "Pending",
    },
    {
      orderDetail: "DIA03",
      service: "24h",
      valuationStaff: "Nguyen Gia Tri",
      valuingPrice: "20,000$",
      status: "Submited",
    },
    {
      orderDetail: "DIA03",
      service: "24h",
      valuationStaff: "Nguyen Gia Tri",
      valuingPrice: "20,000$",
      status: "Submited",
    },
  ]);
  return (
    <TableContainer sx={{ height: "50vh" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#4F46E5" }}>
            <TableCell sx={styleTableHead}>Order Detail</TableCell>
            <TableCell sx={styleTableHead}>Service</TableCell>
            <TableCell sx={styleTableHead}>Valuation Staff</TableCell>
            <TableCell sx={styleTableHead}>Valuing Price</TableCell>
            <TableCell sx={styleTableHead}>Status</TableCell>
            <TableCell sx={styleTableHead}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {managerResponseList.map((managerResponse) => (
            <StyledTableRow
              key={managerResponse.orderDetail}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {managerResponse.orderDetail}
              </TableCell>
              <TableCell>{managerResponse.service}</TableCell>
              <TableCell>{managerResponse.valuationStaff}</TableCell>
              <TableCell>{managerResponse.valuingPrice}</TableCell>
              <TableCell>{managerResponse.status}</TableCell>
              <TableCell>
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
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "White",
            borderRadius: "30px",
            width: "37%",
            marginLeft: "560px",
            marginTop: "40px",
          }}
        >
          <Typography
            sx={{
              paddingLeft: "50px",
              paddingTop: "20px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Do you want to decline Diamond:
            {selectedManagerResponse?.orderDetail} with Price:
            {selectedManagerResponse?.valuingPrice} ?
          </Typography>
          <Box sx={{ marginTop: "10px", paddingLeft: "500px" }}>
            <IconButton sx={{}}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Yes
              </Typography>
            </IconButton>
            <IconButton>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                No
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default ManagerList;
