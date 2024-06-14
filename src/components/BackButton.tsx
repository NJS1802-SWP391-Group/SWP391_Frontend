import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={goBack}>
        Back
      </Button>
    </div>
  );
};

export default BackButton;
