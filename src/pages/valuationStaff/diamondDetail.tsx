import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, FormEvent, useState } from "react";
import DetailImage from "../../assets/DetailImage.png";
import NavBarSystem from "../../components/system/NavBarSystem";
import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import valuationStaffApi from "../../services/managerService/valuationStaffApi";

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
  const [diamondDetail, setDiamondDetail] = useState({
    isDiamond: true,
    code: "",
    origin: "",
    shape: "",
    carat: "",
    color: "",
    clarity: "",
    fluorescence: "",
    symmetry: "",
    polish: "",
    cutGrade: "",
    valueStatus: "",
    description: "",
    diamondValue: 0,
    orderDetailId: 0,
    issueDate: "",
    expireDate: "",
    certificateStatus: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiamondDetail({ ...diamondDetail, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const diamondDetailWithDates: DiamondDetailResponse = {
        ...diamondDetail,
        issueDate: diamondDetail.issueDate as string,
        expireDate: diamondDetail.expireDate as string,
      };
      console.log("log submit:", diamondDetailWithDates);

      const response = await valuationStaffApi.createDiamondDetail(
        diamondDetailWithDates
      );
      console.log("Diamond data added:", response);
      setSuccess(true);
    } catch (error) {
      console.error("There was an error adding the diamond data!", error);
    }
  };

  return (
    <Paper sx={{ width: "50%", marginLeft: "450px", marginTop: "35px" }}>
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
          Diamond Detail
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
              type="date"
              label="Certificate Date"
              name="issueDate"
              value={diamondDetail.issueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </FieldContainer>

          <FieldContainer>
            <TextField
              fullWidth
              label="Origin"
              name="origin"
              value={diamondDetail.origin}
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
              label="Carat"
              name="carat"
              value={diamondDetail.carat}
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
              label="Diamond Code"
              name="code"
              value={diamondDetail.code}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Color Grade"
              name="color"
              value={diamondDetail.color}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Grade"
              name="clarity"
              value={diamondDetail.clarity}
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
              type="number"
              label="Diamond Value"
              name="diamondValue"
              value={diamondDetail.diamondValue}
              onChange={handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              type="date"
              label="Expire Date"
              name="expireDate"
              value={diamondDetail.expireDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              type="number"
              label="Order Detail Id"
              name="orderDetailId"
              value={diamondDetail.orderDetailId}
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
              CERTIFICATE STATUS
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              label="Certificate Status"
              name="certificateStatus"
              value={diamondDetail.certificateStatus}
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
              DESCRIPTION
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={diamondDetail.description}
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
        {success && (
          <Alert severity="success" sx={{ marginBottom: "20px" }}>
            Create successful!
          </Alert>
        )}
      </form>
    </Paper>
  );
};

export default DiamondForm;
