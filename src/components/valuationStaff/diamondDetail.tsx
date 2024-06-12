import {
  Alert,
  Box,
  Button,
  Checkbox,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailImage from "../../assets/DetailImage.png";
import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import valuationStaffApi from "../../services/managerService/valuationStaffApi";
import NavBarSystem from "../system/NavBarSystem";

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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DiamondDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log("state", state.orderDetailId);

  const initialDiamondDetail = {
    isDiamond: true,
    origin: "",
    shape: "",
    carat: "",
    color: "",
    clarity: "",
    fluorescence: "",
    symmetry: "",
    polish: "",
    cutGrade: "",
    description: "",
    diamondValue: 0,
    orderDetailId: state.orderDetailId,
    issueDate: "",
    expireDate: "",
  };

  const [diamondDetail, setDiamondDetail] = useState(initialDiamondDetail);

  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("diamondDetail");
    if (savedData) {
      setDiamondDetail(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diamondDetail", JSON.stringify(diamondDetail));
  }, [diamondDetail]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiamondDetail({ ...diamondDetail, [name]: value });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormEnabled(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const diamondDetailWithDates: DiamondDetailResponse = {
        ...diamondDetail,
        issueDate: diamondDetail.issueDate as string,
        expireDate: diamondDetail.expireDate as string,
        orderDetailId: state.orderDetailId,
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

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
        navigate("/valuationStaff/assigned");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const todayDate = new Date().toISOString().split("T")[0];

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

      {success && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Alert
            severity="success"
            sx={{
              width: "94%",
              padding: "15px",
              backgroundColor: "#e8f5e9",
              color: "#2e7d32",
              border: "1px solid #2e7d32",
              borderRadius: "5px",
            }}
          >
            Create successfully!
          </Alert>
        </Box>
      )}

      <form onSubmit={handleSubmit}>
        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // vertically center the checkbox and text
            }}
          >
            <Checkbox
              {...label}
              defaultChecked={isFormEnabled}
              onChange={handleCheckboxChange}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                  width: "30px",
                  height: "30px",
                },
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                width: "150px",
                paddingLeft: "10px", // reduce padding for better alignment
                marginBottom: "0px", // remove bottom margin
              }}
            >
              Is it diamond?
            </Typography>
          </Box>

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
              inputProps={{ min: todayDate }} // Prevent past dates
              disabled={!isFormEnabled}
            />
          </FieldContainer>

          <FieldContainer>
            <TextField
              fullWidth
              label="Origin"
              name="origin"
              value={diamondDetail.origin}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Shape"
              name="shape"
              value={diamondDetail.shape}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Carat"
              name="carat"
              value={diamondDetail.carat}
              onChange={handleChange}
              disabled={!isFormEnabled}
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
              label="Color Grade"
              name="color"
              value={diamondDetail.color}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Clarity Grade"
              name="clarity"
              value={diamondDetail.clarity}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Cut Grade"
              name="cutGrade"
              value={diamondDetail.cutGrade}
              onChange={handleChange}
              disabled={!isFormEnabled}
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
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Symmetry"
              name="symmetry"
              value={diamondDetail.symmetry}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              label="Fluorescence"
              name="fluorescence"
              value={diamondDetail.fluorescence}
              onChange={handleChange}
              disabled={!isFormEnabled}
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
              disabled={!isFormEnabled}
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
              inputProps={{ min: todayDate }} // Prevent past dates
              disabled={!isFormEnabled}
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
              disabled={!isFormEnabled}
            />
          </FieldContainer>
        </Section>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginBottom: "20px", marginLeft: "380px", width: "120px" }}
          disabled={!isFormEnabled}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default DiamondDetail;
