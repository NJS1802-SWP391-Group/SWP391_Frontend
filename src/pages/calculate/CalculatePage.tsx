import { Container } from "@mui/material";
import React from "react";
import CalculatorInput from "../../components/CalculatorInput";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export type shapeDiamond = {
  id: number;
  name: string;
};

export type originDiamondType = {
  id: number;
  name: string;
  icon: JSX.Element;
};

const CalculatePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <CalculatorInput />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default CalculatePage;
