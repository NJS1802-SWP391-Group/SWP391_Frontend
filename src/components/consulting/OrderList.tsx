import React from "react";
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
import { useNavigate } from "react-router-dom";
import orderApi from "../../services/orderApi";
import emailApi from "../../services/emailApi";

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
  const navigate = useNavigate();
  const onClickEdit = (orderId: number) => {
    orderApi.viewReceiptbill(orderId).then(
      (response) => {
        navigate(`/receipt-bill/${orderId}`, {
          state: response,
        });
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const onClickSendEmail = (orderID: number) => {
    emailApi
      .getEmailByOrderId(orderID)
      .then((response) => {
        navigate(`/send-email/${orderID}`, {
          state: response,
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const onClickSeal = (orderId: number) => {
    alert(orderId);
    orderApi
      .sealOrder(orderId)
      .then((response: any) => {
        // navigate(`/sealed/${orderId}`, {
        //   state: response,
        alert(response);
        console.log(response);
      })
      .catch((error) => {
        console.log("Seal error: ", error);
      });
  };

  const onClickReturn = (orderId: number) => {
    alert(orderId);
    orderApi
      .returnOrder(orderId)
      .then((response: any) => {
        console.log("Return response", response.data);
        alert(response);
      })
      .catch((error) => {
        console.log("Return error", error);
      });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Order Code</StyledTableCell>
            <StyledTableCell align="left">Customer</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item) => (
            <StyledTableRow key={item.orderID}>
              <StyledTableCell align="left">{item.code}</StyledTableCell>
              <StyledTableCell align="left">
                {item.firstName + " " + item.lastName}{" "}
              </StyledTableCell>
              <StyledTableCell align="left">{item.quantity}</StyledTableCell>
              <StyledTableCell align="left">{item.status}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  disabled={
                    item.status == "Active" || item.status == "Pending"
                      ? false
                      : true
                  }
                  onClick={() => onOrderClick(item.orderID)}
                  variant="contained"
                >
                  Detail
                </Button>

                <Button
                  variant="contained"
                  disabled={item.status == "Received" ? false : true}
                  sx={{ marginLeft: "5px" }}
                  onClick={() => onClickEdit(item.orderID)}
                  color="secondary"
                >
                  Edit
                </Button>

                <Button
                  variant="contained"
                  disabled={item.status == "Completed" ? false : true}
                  sx={{ marginLeft: "5px" }}
                  color="success"
                  onClick={() => {
                    onClickSendEmail(item.orderID);
                  }}
                >
                  Send Email
                </Button>
                <Button
                  variant="contained"
                  disabled={item.status == "Completed" ? false : true}
                  sx={{ marginLeft: "5px" }}
                  color="error"
                  onClick={() => onClickSeal(item.orderID)}
                >
                  Seal
                </Button>
                <Button
                  variant="contained"
                  disabled={item.status == "Completed" ? false : true}
                  sx={{ marginLeft: "5px" }}
                  color="error"
                  onClick={() => {
                    onClickReturn(item.orderID);
                  }}
                >
                  Return
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
