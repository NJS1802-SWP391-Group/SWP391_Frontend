import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./FormResult.css";
import { Link, useLocation } from "react-router-dom";

interface FormResult {
  orderID: number;
  code: string;
  customerId: number;
  firstName: string;
  lastName: string;
  quantity: number;
  time: string;
  status: string;
}

const FormResult = () => {
  const location = useLocation();
  const data: FormResult = location.state;
  const owner = data.firstName + " " + data.lastName;
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
          <Typography variant="h5" textAlign="center" color="green">
            Order Code: {data.code}
          </Typography>

          <ul>
            <li>Owner: {owner}</li>
            <li>Quantity: {data.quantity}</li>
            <li>Appointment Day: {data.time}</li>
            <li>Address: Diavan Company</li>
          </ul>
          <Link to="/">
            <Button
              variant="outlined"
              color="success"
              sx={{
                textTransform: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default FormResult;
