import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Diavan from "../../assets/Diavan.png";

const Certificate = () => {
  const componentRef = useRef<HTMLDivElement>(null); // Set initial type to null
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"), // 'onAfterPrint' corrected
  });

  return (
    <Box
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
      sx={{ padding: 3, width: "60%", height: "40%" }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          DIAVAN Certificate
        </Typography>
        <Box>
          <img
            src={Diavan}
            width="35"
            height="35"
            alt="Diavan"
            className="Diavan"
          />
        </Box>
        <Typography sx={{ fontFamily: "revert-layer", fontStyle: "italic" }}>
          Determine the accurate value and reimburse the diamond's actual worth.
        </Typography>
        <Typography variant="h6">Diamond: </Typography>
        <Typography variant="h6">Service: </Typography>
        <Typography variant="h6">Valuation Staff: </Typography>
        <Typography variant="h6">Valuing Price: </Typography>
        <Typography variant="h6">Status: </Typography>
      </Box>
      <Button onClick={handlePrint}>Print this out</Button>
    </Box>
  );
};

export default Certificate;
