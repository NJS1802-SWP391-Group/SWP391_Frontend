import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Container } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./FormResult.css";

const FormResult = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container
        sx={{ display: "inline-block", textAlign: "center", marginLeft: "13%" }}
      >
        <div className="header">
          <span className="icon-success">
            <CheckCircleIcon />
          </span>
          Scheduled successfully
        </div>
        <div className="subtitle">
          Congratulations, you have successfully booked an appointment.
        </div>
        <div className="list-infor">
          <ul>
            <li>Order Code: 004</li>
            <li>Owner: Le Huy</li>
            <li>Phone number 0931337204</li>
            <li>Quantity: 2</li>
            <li>Appointment Day: 2/6/2024</li>
            <li>Address: Long Thanh My, Thu Duc, HCM</li>
          </ul>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default FormResult;
