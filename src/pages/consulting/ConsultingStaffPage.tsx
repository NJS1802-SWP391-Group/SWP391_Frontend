import React, { useEffect, useState } from "react";
import "./ConsultingStaffPage.css";

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import OrderDetail from "../../components/consulting/OrderDetail";
import OrderList from "../../components/consulting/OrderList";

import NavBarSystem from "../../components/system/NavBarSystem";
import { OrderInterface } from "../../interfaces/order/orderInterface";
import orderApi from "../../services/orderApi";

const ConsultingStaffPage = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const handleOrderClick = (orderID: number) => {
    setSelectedOrderId(orderID);
  };

  const selectedOrder =
    orders.find((order) => order.orderID === selectedOrderId) || null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeOrderDetailModal = () => {
    setSelectedOrderId(null);
  };

  useEffect(() => {
    const fectOrders = async () => {
      try {
        const orderList: any = await orderApi.getAll();
        setOrders(orderList);
      } catch (error) {
        console.log(error);
      }
    };
    fectOrders();
  }, []);
  // console.log("Orders: ", orders);
  return (
    <>
      <NavBarSystem marginBottom="100px" />
      <Container>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleClickOpen}
            sx={{
              borderRadius: "25px",
              height: "50px",
            }}
            variant="contained"
          >
            New Order
          </Button>
        </div>
        <OrderList orders={orders} onOrderClick={handleOrderClick} />
        <OrderDetail order={selectedOrder} closeModal={closeOrderDetailModal} />
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add new order</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add new order to order list, please enter customer's
              information here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="customer-name"
              name="customer-name"
              label="Customer name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Ađd order</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default ConsultingStaffPage;
