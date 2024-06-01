import React, { useEffect, useState } from "react";
import { OrderInterface } from "../../interfaces/order/orderInterface";
import Modal from "react-modal";
import DiavanLogo from "../../assets/Diavan.png";
import "./OrderDetail.css";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Service } from "../../interfaces/servicess/Service";

type Props = {
  order: OrderInterface | null;
  closeModal: () => void;
  services: Service[];
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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

function OrderDetail({ order, closeModal, services }: Props) {
  const [payment, setPayment] = useState("direct");
  const [service, setService] = useState("1");
  const [size, setSize] = React.useState("");

  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const handleChangeService = (event: SelectChangeEvent) => {
    setService(event.target.value);
  };

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      {order != null ? (
        <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
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
              Order Code: {order.orderID} <br />
              Customer name: {order.customer} <br />
              Consulting staff: {order.code} <br />
              Date: {order.time.toString()}
            </div>
            <Divider />
            <div className="receipt-bill-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">STT</StyledTableCell>
                      <StyledTableCell align="center">Service</StyledTableCell>
                      <StyledTableCell align="center">Size(mm)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(order.quantity)].map((_, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <FormControl sx={{ minWidth: 120 }} size="small">
                              <InputLabel id="service">Service</InputLabel>
                              <Select
                                labelId="service"
                                id="service"
                                value={service}
                                label="Service"
                                onChange={handleChangeService}
                              >
                                {services.map((item) => {
                                  return (
                                    <MenuItem
                                      key={item.serviceID}
                                      value={item.serviceID}
                                    >
                                      {item.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <TextField
                              id="size"
                              label="Size"
                              variant="outlined"
                              type="number"
                              size="small"
                            />
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Divider />
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
            <div className="receipt-bill-action">
              <Button onClick={closeModal} variant="contained" color="inherit">
                Cancel
              </Button>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default OrderDetail;
