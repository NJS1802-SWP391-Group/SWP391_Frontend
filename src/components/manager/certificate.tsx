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
    <>
      <Box
        ref={componentRef}
        sx={{ padding: 3, width: "60%", height: "100vh" }} // Set height to 100vh to fit one page
      >
        <Box>
          <Box
            sx={{
              paddingBottom: "20px",
              display: "flex",
              paddingLeft: "70px",
              paddingTop: "40px",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "35px" }}>
                DIAVAN
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "60px",
                  fontFamily: "revert",
                  fontStyle: "italic",
                }}
              >
                Certificate
              </Typography>
            </Box>
            <Box
              sx={{
                paddingLeft: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={Diavan}
                width="90"
                height="90"
                alt="Diavan"
                className="Diavan"
              />

              <Typography
                sx={{
                  fontFamily: "revert-layer",
                  fontStyle: "italic",
                  fontSize: "23px",
                  paddingLeft: "190px",
                  width: "800px",
                }}
              >
                Determine the accurate value and reimburse the diamond's actual
                worth.
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6">Diamond: </Typography>
          <Typography variant="h6">Service: </Typography>
          <Typography variant="h6">Valuation Staff: </Typography>
          <Typography variant="h6">Valuing Price: </Typography>
          <Typography variant="h6">Status: </Typography>
        </Box>
      </Box>

      <Button
        sx={{
          marginLeft: "1090px",
          marginBottom: "5px",
          borderRadius: "30px",
          width: "150px",
          backgroundColor: "#4F46E5",
          color: "white",
        }}
        onClick={handlePrint}
      >
        Print this out
      </Button>
    </>
  );
};

export default Certificate;
