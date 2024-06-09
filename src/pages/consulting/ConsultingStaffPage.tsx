import React, { SetStateAction, useEffect, useState } from "react";
import "./ConsultingStaffPage.css";

import NavBarSystem from "../../components/system/NavBarSystem";
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
  const [searchValue, setSearchValue] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const handleOrderClick = (orderID: number) => {
    setSelectedOrderId(orderID);
  };

  const selectedOrder =
    orders.find((order) => order.orderID === selectedOrderId) || null;

  const closeOrderDetailModal = () => {
    setSelectedOrderId(null);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.target.value);
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

  const filteredStudents: OrderInterface[] = orders.filter((order) =>
    order.code.toString().includes(searchValue)
  );

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
          <div className="input-container">
            <input
              type="text"
              name="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="input"
              placeholder="Search by Order Code..."
            />
            <span className="icon">
              <svg
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="1"
                    d="M14 5H20"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M14 8H17"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M22 22L20 20"
                    stroke="#000"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </div>
        </div>
        <OrderList orders={filteredStudents} onOrderClick={handleOrderClick} />
        <OrderDetail order={selectedOrder} closeModal={closeOrderDetailModal} />
      </Container>
    </>
  );
};

export default ConsultingStaffPage;
