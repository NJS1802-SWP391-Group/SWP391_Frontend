import React, { useEffect, useState } from "react";
import "./ConsultingStaffPage.css";

import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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
  const [statusFilter, setStatusFilter] = React.useState("All");

  const handleStatusFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusFilter((event.target as HTMLInputElement).value);
  };

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
  }, [orders]);

  const filteredStudents: OrderInterface[] = orders.filter((order) => {
    if (statusFilter === "All" || order.status === statusFilter) {
      return order.code.toString().includes(searchValue);
    }
  });

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
          <FormControl>
            <FormLabel id="status-filter">Status</FormLabel>
            <RadioGroup
              aria-labelledby="status-filter"
              name="status-filter"
              value={statusFilter}
              onChange={handleStatusFilter}
              row
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel
                value="Pending"
                control={<Radio color="primary" />}
                label="Pending"
              />
              <FormControlLabel
                value="Received"
                control={<Radio color="secondary" />}
                label="Received"
              />
              <FormControlLabel
                value="Processing"
                control={<Radio color="warning" />}
                label="Processing"
              />
              <FormControlLabel
                value="Completed"
                control={<Radio color="success" />}
                label="Completed"
              />
              <FormControlLabel
                value="Sealed"
                control={<Radio color="warning" />}
                label="Sealed"
              />
              <FormControlLabel
                value="Returned"
                control={<Radio color="success" />}
                label="Returned"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <OrderList orders={filteredStudents} onOrderClick={handleOrderClick} />
        <OrderDetail order={selectedOrder} closeModal={closeOrderDetailModal} />
      </Container>
    </>
  );
};

export default ConsultingStaffPage;
