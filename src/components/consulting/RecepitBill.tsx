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
import { useLocation, useNavigate } from "react-router-dom";
import { OrderResponse } from "../../interfaces/order/orderResponse";
import orderApi from "../../services/orderApi";
import SuccessfullAlert from "../SuccessfullAlert";
import BackButton from "../BackButton";

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
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const location = useLocation();
  const data: OrderResponse = location.state;
  const fetchData: OrderResponse = data;
  // console.log("Data:", data);

  const onSubmitPrintBill = () => {
    const orderId = fetchData.orderID;
    orderApi.pay(orderId, payment).then(
      (response: any) => {
        console.log("Response", response);
        setShowAlert(true);
        setTimeout(() => {
          navigate("/consulting-page");
        }, 4000);
      },
      (error) => {
        console.log(error);
      }
    );
  };

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
                      <StyledTableRow key={item.orderDetailId}>
                        <StyledTableCell align="left">
                          {item.code}
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
            {showAlert && (
              <div>
                <SuccessfullAlert message="Successfully print bill, you will back Order List Page" />
                <Loading />
              </div>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                margin: "15px 0",
              }}
            >
              <BackButton />
              <Button
                variant="contained"
                onClick={onSubmitPrintBill}
                sx={{
                  backgroundColor: "#4F46E5",
                  borderRadius: "25px",
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
