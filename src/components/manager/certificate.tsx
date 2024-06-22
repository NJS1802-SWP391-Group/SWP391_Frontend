import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import Diavan from "../../assets/Diavan.png";
import DiavanSign from "../../assets/DiavanSign.png";
import { CertificateResponse } from "../../interfaces/certificate/certificateResponse";
import certificateApi from "../../services/certificateService/certificateApi";

const Certificate = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { resultId } = useParams<{ resultId: string }>();
  const { state } = useLocation();
  const [certificate, setCertificate] = useState<CertificateResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isDone, setIsDone] = useState<boolean>(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: "emp-data",
  });

  const handleDoneClick = () => {
    if (certificate?.orderDetailId) {
      certificateApi
        .changeStatusToCertificated(certificate.orderDetailId)
        .then(() => {
          setIsDone(true);
        });
    }
  };

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
    const getCertificateByID = async (resultId: number) => {
      try {
        const response: any = await certificateApi.getCertificateByID(resultId);
        console.log("API response:", response);
        if (response) {
          setCertificate(response);
        } else {
          console.error("No certificate data found");
        }
      } catch (error) {
        console.error("Failed to fetch certificate:", error);
      } finally {
        setLoading(false);
      }
    };

    if (resultId) {
      getCertificateByID(parseInt(resultId, 10));
    }
  }, [resultId]);

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
    <Grid container justifyContent="center" sx={{ paddingRight: "900px" }}>
      <Box
        ref={componentRef}
        sx={{ padding: 3, width: "70%", height: "100vh" }}
      >
        <Box sx={{ height: "60%", paddingLeft: "100px" }}>
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
              marginTop: "85px",
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
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Grading Results
                </Typography>
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
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Proportions
                </Typography>
              </SectionTitle>
              <Box sx={{ marginLeft: "130px", paddingTop: "2px" }}>
                {certificate.resultImages.map(
                  (image) =>
                    image.imageType === "Proportions" && (
                      <img
                        key={image.imageUrl}
                        src={image.imageUrl}
                        width="230"
                        height="115"
                        alt="Proportions"
                      />
                    )
                )}
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
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Additional Grading Information
                </Typography>
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
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Report Details
                </Typography>
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
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
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Diamond Value
                </Typography>
              </SectionTitle>
              <Box sx={{ paddingLeft: "15px", paddingTop: "5px" }}>
                <Typography>
                  Valuing Price: {certificate.diamondValue}
                </Typography>
              </Box>
            </Section>

            <Section sx={{ height: "140px", marginBottom: "20px" }}>
              <SectionTitle
                sx={{
                  backgroundColor: "#2D5477",
                  fontWeight: "bold",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Clarity Characteristic
                </Typography>
              </SectionTitle>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "50px",
                }}
              >
                {certificate.resultImages.map(
                  (image) =>
                    image.imageType === "Clarity Characteristics" && (
                      <img
                        key={image.imageUrl}
                        src={image.imageUrl}
                        width="90"
                        height="85"
                        alt="Clarity Characteristics"
                      />
                    )
                )}
              </Box>
            </Section>
          </Container>
          <Box sx={{ width: "100%", marginLeft: "800px", marginTop: "15px" }}>
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

      <Box
        sx={{
          marginLeft: "2550px",
          paddingLeft: "50px",
          marginBottom: "15px",
        }}
      >
        <Button
          sx={{
            borderRadius: "10px",
            backgroundColor: "#4F46E5",
            color: "black",
            width: "80%",
            marginBottom: "10px",
          }}
          onClick={handleDoneClick}
        >
          <Typography sx={{ paddingLeft: "35px", paddingRight: "30px" }}>
            Confirm
          </Typography>
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            backgroundColor: isDone ? "#4F46E5" : "gray",
            color: "black",
            width: "80%",
          }}
          onClick={handlePrint}
          disabled={!isDone}
        >
          <Typography sx={{ paddingLeft: "5px" }}>Print this out</Typography>
        </Button>
      </Box>
    </Grid>
  );
};

export default Certificate;
