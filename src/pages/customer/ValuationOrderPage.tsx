import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Container } from "@mui/material";
import ValuationOrders from "../../components/customer/ValuationOrders";

const ValuationOrderPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ValuationOrders />
      </Container>
      <Footer />
    </div>
  );
};

export default ValuationOrderPage;
