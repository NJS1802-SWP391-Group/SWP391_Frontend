import { Container } from "@mui/material";
import React from "react";
import Calculator from "../../components/calculator/Calculator";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CalculatePage.css";
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
        <div className="cal">
          <Calculator />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default CalculatePage;
