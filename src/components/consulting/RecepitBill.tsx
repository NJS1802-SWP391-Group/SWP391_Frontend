import React, { useContext, useState } from "react";
import DiavanLogo from "../../assets/Diavan.png";
import "./OrderDetail.css";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import Loading from "../Loading";
import { useLocation } from "react-router-dom";
import { OrderResponse } from "../../interfaces/order/orderResponse";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const RecepitBill: React.FC = () => {
  const [payment, setPayment] = useState("direct");

  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };
  const location = useLocation();
  const data: OrderResponse = location.state;
  const fetchData: OrderResponse = data;
  console.log("Data:", data);

  return (
    <div>
      {data == undefined ? (
        <Card sx={{ margin: "20px 0", padding: "10px 5%" }}>
          <div style={{ marginTop: "20px" }}>
            <div className="recepit-bill-header">
              <span>
                <img src={DiavanLogo} alt="" width="75px" height="75px"></img>
              </span>
              <div className="receipt-bill-title">
                <h1>Diavan</h1>
                <h2>Receipt bill</h2>
              </div>
            </div>
            <Typography variant="overline">
              Click "Detail" button and click "Submit" to view all information
            </Typography>
          </div>
          <Loading />
        </Card>
      ) : (
        <Card sx={{ margin: "20px 0", padding: "0 5%" }}>
          <div style={{ marginTop: "20px" }}>
            <div className="recepit-bill-header">
              <span>
                <img src={DiavanLogo} alt="" width="75px" height="75px"></img>
              </span>
              <div className="receipt-bill-title">
                <h1>Diavan</h1>
                <h2>Receipt bill</h2>
              </div>
            </div>
            <div className="receipt-bill-info">
              Order Code: {fetchData.code}
              <br />
              Customer name: {fetchData.customerId}
              <br />
              Consulting staff: Vo Mong Luan
              <br />
              Date Created: {fetchData.time}
            </div>
            <Divider />
            <div className="receipt-bill-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">
                        Order detail code
                      </StyledTableCell>
                      <StyledTableCell align="center">Service</StyledTableCell>
                      <StyledTableCell align="center">Size(mm)</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fetchData.detailValuations.map((item) => (
                      <StyledTableRow key={fetchData.orderID}>
                        <StyledTableCell align="left">
                          {item.orderDetailId}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.serviceName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.estimateLength}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.price}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Divider />
            <Box
              sx={{
                padding: "20px 6%",
                width: "30%",
                margin: "20px 0",
                backgroundColor: "#4F46E5",
                borderRadius: "25px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "white" }}
                variant="h5"
                textAlign={"center"}
              >
                Total Price: {fetchData.totalPay} $
              </Typography>
            </Box>
            <div className="receipt-bill-payment">
              <FormControl>
                <FormLabel id="radio-payment">Payment</FormLabel>
                <RadioGroup row value={payment} onChange={handleChangePayment}>
                  <FormControlLabel
                    value="direct"
                    control={<Radio />}
                    label="Direct"
                  />
                  <FormControlLabel
                    value="online"
                    control={<Radio />}
                    label="Online"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <Typography textAlign={"center"} fontStyle={"italic"} margin=" 0">
              Thank you! See you next time
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4F46E5",
                  borderRadius: "25px",
                  margin: "15px 0",
                }}
              >
                Print bill
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RecepitBill;
