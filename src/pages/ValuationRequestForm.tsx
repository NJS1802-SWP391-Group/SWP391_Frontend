import React from "react";
import Footer from "../components/footer/Footer";
import ValuationForm from "../components/forms/ValuationForm";
import Navbar from "../components/navbar/Navbar";

const ValuationRequestForm = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <ValuationForm />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ValuationRequestForm;
