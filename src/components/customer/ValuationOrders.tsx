import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ValuationOrders.css";
import orderApi from "../../services/orderApi";
import OrderListCustomer from "./OrderListCustomer";
import { OrderListCustomerInterface } from "../../interfaces/order/orderListCustomer";

const ValuationOrders = () => {
  const [activePage, setActivePage] = useState("All");
  const [orderList, setOrderList] = useState<OrderListCustomerInterface[]>();
  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const customerId = localStorage.getItem("customerId");
      if (customerId != null) {
        const ordersByCustomerId: any = await orderApi.getOrdersByCustomer(
          parseInt(customerId)
        );
        setOrderList(ordersByCustomerId);
      }
    };
    fetchData();
  }, [orderList]);

  const renderOrderList = orderList?.filter(
    (order) => order.status === activePage || activePage === "All"
  );
  console.log(renderOrderList);
  return (
    <div>
      <nav className="tablist">
        <div
          className={`nav-item ${activePage === "All" ? "active" : ""}`}
          onClick={() => handlePageChange("All")}
        >
          All
        </div>
        <div
          className={`nav-item ${activePage === "Pending" ? "active" : ""}`}
          onClick={() => handlePageChange("Pending")}
        >
          Pending
        </div>
        <div
          className={`nav-item ${activePage === "Processing" ? "active" : ""}`}
          onClick={() => handlePageChange("Processing")}
        >
          Processing
        </div>
        <div
          className={`nav-item ${activePage === "Completed" ? "active" : ""}`}
          onClick={() => handlePageChange("Completed")}
        >
          Completed
        </div>
        <div
          className={`nav-item ${activePage === "Finished" ? "active" : ""}`}
          onClick={() => handlePageChange("Finished")}
        >
          Finished
        </div>
        <div
          className={`nav-item ${activePage === "Sealed" ? "active" : ""}`}
          onClick={() => handlePageChange("Sealed")}
        >
          Sealed
        </div>
      </nav>
      <div className="content">
        <OrderListCustomer orderList={renderOrderList} />
      </div>
    </div>
  );
};

export default ValuationOrders;
