import React from "react";
import ValuationForm from "../components/forms/ValuationForm";
import Header from "../components/navbar/Navbar";

const ValuationRequestForm = () => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Header />
      </div>
      <div>
        <ValuationForm />
      </div>
    </div>
  );
};

export default ValuationRequestForm;
