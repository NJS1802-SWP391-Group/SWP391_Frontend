import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import ClarityImage from "../../assets/ClarityImage.png";
import Diavan from "../../assets/Diavan.png";
import DiavanSign from "../../assets/DiavanSign.png";
import FeatherImage from "../../assets/FeatherImage.png";
import PinpointImage from "../../assets/PinpointImage.png";
import PropotionImage from "../../assets/PropotionImage.png";
import { CertificateResponse } from "../../interfaces/certificate/certificateResponse";
import certificateApi from "../../services/certificateService/certificateApi";

const Certificate = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { resultId } = useParams();
  const [certificate, setCertificate] = useState<CertificateResponse>();
  // {
  //   resultId: 1,
  //   isDiamond: true,
  //   code: "1",
  //   origin: "string",
  //   shape: "string",
  //   carat: "string",
  //   color: "string",
  //   clarity: "string",
  //   fluorescence: "string",
  //   symmetry: "string",
  //   polish: "string",
  //   cutGrade: "string",
  //   valueStatus: "string",
  //   description: null,
  //   diamondValue: 18000,
  //   status: "string",
  //   orderDetailId: 1,
  //   issueDate: new Date("06/02/2024T13:28:03"),
  //   expireDate: new Date("06/02/2024T13:28:03"),
  //   certificateStatus: "string",
  // }
  const [loading, setLoading] = useState<boolean>(true);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"),
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

  useEffect(() => {
    const getCertificateByID = async () => {
      if (resultId != undefined) {
        const parseResultIdToNumber = parseInt(resultId);

        try {
          const response = await certificateApi.getCertificateByID(
            parseResultIdToNumber
          );
          console.log("FetchData:", response);
          if (response.data.length > 0) {
            setCertificate(response.data); // Assume we take the first certificate
          }
        } catch (error) {
          console.error("Failed to fetch certificate:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getCertificateByID();
  }, []);
  console.log(resultId);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!certificate) {
    return <Typography>No certificate found.</Typography>;
  }

  return (
    <Grid container justifyContent="center">
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
                <Typography>Carat Weight: {certificate.carat}</Typography>
                <Typography>Color Grade: {certificate.color}</Typography>
                <Typography>Clarity Grade: {certificate.clarity}</Typography>
                <Typography>Cut Grade: {certificate.cutGrade}</Typography>
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

              <Box sx={{ marginLeft: "130px", paddingTop: "2px" }}>
                <img
                  src={PropotionImage}
                  width="230"
                  height="130"
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
                <Typography>Polish: {certificate.polish}</Typography>
                <Typography>Symmetry: {certificate.symmetry}</Typography>
                <Typography>
                  Fluorescence: {certificate.fluorescence}
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
                  Certificate Date:{" "}
                  {new Date(certificate.issueDate).toLocaleDateString()}
                </Typography>
                <Typography>Report Number: {certificate.code}</Typography>
                <Typography>Shape: {certificate.shape}</Typography>
              </Box>
            </Section>

            <Section sx={{ height: "140px" }}>
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
                <Typography>
                  Valuing Price: {certificate.diamondValue}
                </Typography>
              </Box>
            </Section>

            <Section
              sx={{
                height: "140px",
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
                <Box sx={{ paddingTop: "10px" }}>
                  <img
                    src={ClarityImage}
                    width="190"
                    height="75"
                    alt="ClarityImage"
                    className="ClarityImage"
                  />
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#f8f9fa",
                        width: "100px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        border: "0.5px solid lightgray",
                      }}
                    >
                      <img
                        src={PinpointImage}
                        width="25"
                        height="25"
                        alt="PinpointImage"
                        className="PinpointImage"
                      />
                      <Typography>Pinpoint</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#f8f9fa",
                        width: "100px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        border: "0.5px solid lightgray",
                      }}
                    >
                      <img
                        src={FeatherImage}
                        width="25"
                        height="25"
                        alt="FeatherImage"
                        className="FeatherImage"
                      />
                      <Typography>Feather</Typography>
                    </Box>
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
