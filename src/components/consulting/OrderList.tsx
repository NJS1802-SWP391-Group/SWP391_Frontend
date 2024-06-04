import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrderInterface } from "../../interfaces/order/orderInterface";
import { Button } from "@mui/material";

// type Props = {
//   orders: OrderInterface[];
//   onOrderClick: (orderID: number) => void;
// };

interface OrderListProps {
  orders: OrderInterface[];
  onOrderClick: (orderID: number) => void;
}

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

const OrderList: React.FC<OrderListProps> = ({ orders, onOrderClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell align="left">Order Code</StyledTableCell>
            <StyledTableCell align="left">Customer</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Detail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item) => (
            <StyledTableRow key={item.orderID}>
              <StyledTableCell component="th" scope="row">
                {item.orderID}
              </StyledTableCell>
              <StyledTableCell align="left">{item.code}</StyledTableCell>
              <StyledTableCell align="left">
                {item.firstName + " " + item.lastName}{" "}
              </StyledTableCell>
              <StyledTableCell align="left">{item.quantity}</StyledTableCell>
              <StyledTableCell align="left">{item.status}</StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  disabled={item.status == "Processing" ? true : false}
                  onClick={() => onOrderClick(item.orderID)}
                  variant="contained"
                >
                  Detail
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
