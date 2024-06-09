import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import ClarityImage from "../../assets/ClarityImage.png";
import Diavan from "../../assets/Diavan.png";
import DiavanSign from "../../assets/DiavanSign.png";
import FeatherImage from "../../assets/FeatherImage.png";
import PinpointImage from "../../assets/PinpointImage.png";
import PropotionImage from "../../assets/PropotionImage.png";

const Certificate = () => {
  const componentRef = useRef<HTMLDivElement>(null); // Set initial type to null
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"), // 'onAfterPrint' corrected
  });

  const Container = styled(Box)({
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    backgroundColor: "#f8f9fa",
  });

  const Section = styled(Paper)({
    flex: "1 1 45%",
    padding: "15px",
    backgroundColor: "#fff",
  });

  const SectionTitle = styled(Typography)({
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#4F46E5",
  });

  const data = {
    certificateDate: "04/26/2022",
    reportNumber: "6431153187",
    shape: "Round",
    measurements: "6.41 - 6.37 x 3.98 mm",
    caratWeight: "1.0 carat",
    colorGrade: "J",
    clarityGrade: "VVS1",
    cutGrade: "Excellent",
    cutScore: "6.1",
    polish: "Excellent",
    symmetry: "Excellent",
    fluorescence: "Medium",
    clarityCharacteristics: "Pinpoint, Feather",
    price: "18,354$",
  };
  return (
    <Grid>
      <Box
        ref={componentRef}
        sx={{ padding: 3, width: "60%", height: "100vh" }}
      >
        <Box sx={{ height: "40%" }}>
          <Box
            sx={{
              paddingBottom: "20px",
              display: "flex",
              paddingLeft: "70px",
              paddingTop: "30px",
              height: "40%",
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
                  fontSize: "20px",
                  paddingLeft: "190px",
                  width: "780px",
                }}
              >
                Determine the accurate value and reimburse the diamond's actual
                worth.
              </Typography>
            </Box>
          </Box>
          <Container
            sx={{
              width: "1100px",
              marginTop: "55px",
              marginLeft: "70px",
              height: "550px",
            }}
          >
            <Section sx={{ height: "180px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Grading Results
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
                <Typography>Carat Weight: {data.caratWeight}</Typography>

                <Typography>Color Grade: {data.colorGrade}</Typography>

                <Typography>Clarity Grade: {data.clarityGrade}</Typography>

                <Typography>Cut Grade: {data.cutGrade}</Typography>

                <Typography>Cut Score: {data.cutScore}</Typography>
              </Box>
            </Section>

            <Section sx={{ height: "180px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Proportions
              </SectionTitle>

              <Box sx={{ marginLeft: "130px" }}>
                <img
                  src={PropotionImage}
                  width="230"
                  height="140"
                  alt="PropotionImage"
                  className="PropotionImage"
                />
              </Box>
            </Section>

            <Section sx={{ height: "150px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Additional Grading Information
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
                <Typography>Polish: {data.polish}</Typography>

                <Typography>Symmetry: {data.symmetry}</Typography>

                <Typography>Fluorescence: {data.fluorescence}</Typography>

                <Typography>
                  Clarity Characteristics: {data.clarityCharacteristics}
                </Typography>
              </Box>
            </Section>

            <Section sx={{ height: "150px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Report Details
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
                <Typography>
                  Certificate Date: {data.certificateDate}
                </Typography>

                <Typography>Report Number: {data.reportNumber}</Typography>

                <Typography>Shape: {data.shape}</Typography>
              </Box>
            </Section>

            <Section sx={{ height: "120px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Diamond Value
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
                <Typography>Valuing Price: {data.price}</Typography>
              </Box>
            </Section>

            <Section
              sx={{
                height: "125px",
                marginBottom: "20px",
              }}
            >
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                Clarity Characteristics
              </SectionTitle>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "50px",
                }}
              >
                <Box>
                  <img
                    src={ClarityImage}
                    width="170"
                    height="80"
                    alt="ClarityImage"
                    className="ClarityImage"
                  />
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Box sx={{ backgroundColor: "#f8f9fa", width: "60px" }}>
                      <img
                        src={PinpointImage}
                        width="25"
                        height="25"
                        alt="PinpointImage"
                        className="PinpointImage"
                      />
                    </Box>
                    <Typography>Pinpoint</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Box sx={{ backgroundColor: "#f8f9fa", width: "60px" }}>
                      <img
                        src={FeatherImage}
                        width="25"
                        height="25"
                        alt="FeatherImage"
                        className="FeatherImage"
                      />
                    </Box>
                    <Typography>Feather</Typography>
                  </Box>
                </Box>
              </Box>
            </Section>
          </Container>
          <Box sx={{ width: "40%", marginLeft: "800px", marginTop: "15px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
              Granted by:
            </Typography>
            <img
              src={DiavanSign}
              width="450"
              height="150"
              alt="DiavanSign"
              className="DiavanSign"
            />
          </Box>
        </Box>
      </Box>

      <Button
        sx={{
          marginLeft: "1350px",
          marginBottom: "15px",
          borderRadius: "30px",
          width: "150px",
          backgroundColor: "#4F46E5",
          color: "white",
        }}
        onClick={handlePrint}
      >
        Print this out
      </Button>
    </Grid>
  );
};

export default Certificate;
