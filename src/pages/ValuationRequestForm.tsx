import React from "react";
import Header from "../components/header/Header";
import ValuationForm from "../components/forms/ValuationForm";

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
