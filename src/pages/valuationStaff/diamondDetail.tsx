import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { ChangeEvent, FormEvent, useState } from "react";
import DetailImage from "../../assets/DetailImage.png";
import NavBarSystem from "../../components/system/NavBarSystem";
import { DiamondDetail } from "../../interfaces/valuationStaff/diamondDetailResponse";
import { AssignValuationStaffResponse } from "../../interfaces/valuationStaff/valuationStaffResponse";

const Container = styled(Box)({
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
});

const Section = styled(Paper)({
  marginBottom: "20px",
  padding: "15px",
  backgroundColor: "#f7f7f7",
});

const Title = styled(Typography)({
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "10px",
  color: "#4F46E5",
});

const FieldContainer = styled(Box)({
  marginBottom: "10px",
});

const DiamondForm = () => {
  const [selectedValuationStaffResponse, setSelectedValuationStaffResponse] =
    React.useState<AssignValuationStaffResponse | null>(null);
  const [diamondData, setDiamondData] = useState<DiamondDetail>({
    certificateDate: "",
    reportNumber: "",
    shape: "",
    measurements: "",
    caratWeight: "",
    colorGrade: "",
    clarityGrade: "",
    cutGrade: "",
    cutScore: "",
    polish: "",
    symmetry: "",
    fluorescence: "",
    clarityCharacteristics: "",
    inscription: "",
    comments: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiamondData({ ...diamondData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log("Diamond Data Submitted:", diamondData);
  };

  return (
    <Paper
      sx={{
        width: "50%",
        marginLeft: "250px",
        marginTop: "35px",
      }}
    >
      <NavBarSystem marginBottom="100px" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={DetailImage}
          width="50"
          height="50"
          alt="SendButton"
          className="Sendbutton"
        />
        <Typography
          sx={{ fontWeight: "bold", fontSize: "35px", paddingLeft: "15px" }}
        >
          Diamond Detail: {selectedValuationStaffResponse?.diamond}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              REPORT DETAILS
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              label="Certificate Date"
              name="certificateDate"
              value={diamondData.certificateDate}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Report Number"
              name="reportNumber"
              value={diamondData.reportNumber}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Shape"
              name="shape"
              value={diamondData.shape}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Measurements"
              name="measurements"
              value={diamondData.measurements}
              onChange={handleChange}
            />
          </FieldContainer>
        </Section>
        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              GRADING RESULTS
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              label="Carat Weight"
              name="caratWeight"
              value={diamondData.caratWeight}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Color Grade"
              name="colorGrade"
              value={diamondData.colorGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Grade"
              name="clarityGrade"
              value={diamondData.clarityGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Cut Grade"
              name="cutGrade"
              value={diamondData.cutGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Cut Score"
              name="cutScore"
              value={diamondData.cutScore}
              onChange={handleChange}
            />
          </FieldContainer>
        </Section>
        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              ADDITIONAL GRADING INFORMATION
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              label="Polish"
              name="polish"
              value={diamondData.polish}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Symmetry"
              name="symmetry"
              value={diamondData.symmetry}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Fluorescence"
              name="fluorescence"
              value={diamondData.fluorescence}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Characteristics"
              name="clarityCharacteristics"
              value={diamondData.clarityCharacteristics}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Inscription(s)"
              name="inscription"
              value={diamondData.inscription}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Comments"
              name="comments"
              value={diamondData.comments}
              onChange={handleChange}
            />
          </FieldContainer>
        </Section>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginBottom: "20px", marginLeft: "380px", width: "120px" }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default DiamondForm;
