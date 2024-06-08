import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, FormEvent, useState } from "react";
import DetailImage from "../../assets/DetailImage.png";
import NavBarSystem from "../../components/system/NavBarSystem";

import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import { AssignValuationStaffResponse } from "../../interfaces/valuationStaff/valuationStaffResponse";
import axiosClient from "../../services/axiosClient";

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
    useState<AssignValuationStaffResponse | null>(null);
  const [diamondDetail, setDiamondDetail] = useState<DiamondDetailResponse>({
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
    valuatingPrice: "",
  });

  // const onSubmit: handleSubmit<DiamondDetailResponse> = async (data: any) => {
  //     const response: any = await valuationStaffApi.createDiamondDetail({
  //       certificateDate: string;
  //       reportNumber: string;
  //       shape: string;
  //       measurements: string;
  //       caratWeight: string;
  //       colorGrade: string;
  //       clarityGrade: string;
  //       cutGrade: string;
  //       cutScore: string;
  //       polish: string;
  //       symmetry: string;
  //       fluorescence: string;
  //       clarityCharacteristics: string;
  //       valuatingPrice: string;
  //     });
  //     if (response === true) {
  //       toast.success("Create New Post Success!", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       timeoutRef.current = setTimeout(() => {
  //         navigate(0);
  //       }, 1700);
  //       return;
  //     }
  //     toast.error("Create New Post Success!", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiamondDetail({ ...diamondDetail, [name]: value });
  };

  const addDiamondDetail = async (data: DiamondDetailResponse) => {
    try {
      const response = await axiosClient.post("/your-api-endpoint", data);
      console.log("Diamond data added:", response.data);
    } catch (error) {
      console.error("There was an error adding the diamond data!", error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addDiamondDetail(diamondDetail);
    console.log("Diamond Data Submitted:", diamondDetail);
  };

  return (
    <Paper
      sx={{
        width: "50%",
        marginLeft: "450px",
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
              value={diamondDetail.certificateDate}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Report Number"
              name="reportNumber"
              value={diamondDetail.reportNumber}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Shape"
              name="shape"
              value={diamondDetail.shape}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Measurements"
              name="measurements"
              value={diamondDetail.measurements}
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
              value={diamondDetail.caratWeight}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Color Grade"
              name="colorGrade"
              value={diamondDetail.colorGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Grade"
              name="clarityGrade"
              value={diamondDetail.clarityGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Cut Grade"
              name="cutGrade"
              value={diamondDetail.cutGrade}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Cut Score"
              name="cutScore"
              value={diamondDetail.cutScore}
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
              value={diamondDetail.polish}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Symmetry"
              name="symmetry"
              value={diamondDetail.symmetry}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Fluorescence"
              name="fluorescence"
              value={diamondDetail.fluorescence}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Characteristics"
              name="clarityCharacteristics"
              value={diamondDetail.clarityCharacteristics}
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
              VALUATING PRICING
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              label="Diamond Value"
              name="valuatingPrice" // fixed this name to match the diamondDetail property
              value={diamondDetail.valuatingPrice}
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
