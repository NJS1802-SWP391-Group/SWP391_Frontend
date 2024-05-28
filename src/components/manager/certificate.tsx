import { Box, Button, Typography } from "@mui/material";
import jsPDF from "jspdf";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Certificate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { managerResponse } = location.state || {};

  const certificateRef = useRef<HTMLDivElement | null>(null);

  if (!managerResponse) {
    // If there's no manager response, navigate back to the approval page
    navigate("/");
    return null;
  }

  const generatePDF = () => {
    const input = certificateRef.current;
    if (input) {
      const doc = new jsPDF();
      doc.html(input, {
        callback: function (doc) {
          doc.save("certificate.pdf");
        },
      });
    }
  };

  return (
    <Box>
      <Box ref={certificateRef} id="certificate" sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          DIAVAN Certificate
        </Typography>
        <Typography variant="h6">Diamond: {managerResponse.diamond}</Typography>
        <Typography variant="h6">Service: {managerResponse.service}</Typography>
        <Typography variant="h6">
          Valuation Staff: {managerResponse.valuationStaff}
        </Typography>
        <Typography variant="h6">
          Valuing Price: {managerResponse.valuingPrice}
        </Typography>
        <Typography variant="h6">Status: {managerResponse.status}</Typography>
      </Box>
      <Button variant="contained" onClick={generatePDF} sx={{ marginTop: 3 }}>
        Download PDF
      </Button>
    </Box>
  );
};

export default Certificate;
