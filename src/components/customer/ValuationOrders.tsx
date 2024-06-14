import { Card } from "@mui/material";
import React, { useState } from "react";
import "./ValuationOrders.css";
import OrderListCustomer from "./OrderListCustomer";

const ValuationOrders = () => {
  const [activePage, setActivePage] = useState("all");

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };
  return (
    <div>
      <nav className="tablist">
        <div
          className={`nav-item ${activePage === "all" ? "active" : ""}`}
          onClick={() => handlePageChange("all")}
        >
          All
        </div>
        <div
          className={`nav-item ${activePage === "pending" ? "active" : ""}`}
          onClick={() => handlePageChange("pending")}
        >
          Pending
        </div>
        <div
          className={`nav-item ${activePage === "processing" ? "active" : ""}`}
          onClick={() => handlePageChange("processing")}
        >
          Processing
        </div>
        <div
          className={`nav-item ${activePage === "completed" ? "active" : ""}`}
          onClick={() => handlePageChange("completed")}
        >
          Completed
        </div>
        <div
          className={`nav-item ${activePage === "finished" ? "active" : ""}`}
          onClick={() => handlePageChange("finished")}
        >
          Finished
        </div>
        <div
          className={`nav-item ${activePage === "sealed" ? "active" : ""}`}
          onClick={() => handlePageChange("sealed")}
        >
          Sealed
        </div>
      </nav>
      <div className="content">
        {activePage === "all" && <OrderListCustomer />}
      </div>
    </div>
  );
};

export default ValuationOrders;
