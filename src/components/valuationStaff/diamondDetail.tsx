import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate } from "react-router-dom";
import DetailImage from "../../assets/DetailImage.png";
import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import valuationStaffApi from "../../services/managerService/valuationStaffApi";
import NavBarSystem from "../system/NavBarSystem";

const Section = styled(Paper)({
  marginBottom: "20px",
  padding: "15px",
  backgroundColor: "#f7f7f7",
});

const FieldContainer = styled(Box)({
  marginBottom: "10px",
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DiamondDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialDiamondDetail = {
    isDiamond: true,
    origin: "",
    shape: "",
    carat: 0.3,
    color: "",
    clarity: "",
    fluorescence: "",
    symmetry: "",
    polish: "",
    cutGrade: "",
    description: "",
    diamondValue: 0,
    ProportionImage: null,
    ClarityImages: null,
    orderDetailId: state.orderDetailId,
  };

  const [diamondDetail, setDiamondDetail] = useState(initialDiamondDetail);
  const [uploadedImages, setUploadedImages] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  console.log("uploadImage:", uploadedImage);
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [success, setSuccess] = useState(false);
  console.log("success:", success);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // New state for button click

  useEffect(() => {
    const savedData = localStorage.getItem("diamondDetail");
    if (savedData) {
      setDiamondDetail(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diamondDetail", JSON.stringify(diamondDetail));
  }, [diamondDetail]);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    // Convert carat to string if it's expected to be a string
    const updatedValue = name === "carat" ? String(value) : value;
    setDiamondDetail({ ...diamondDetail, [name]: updatedValue });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormEnabled(e.target.checked);
    console.log("cbox:", e.target.checked);
  };

  const {
    getRootProps: getRootPropsSingle,
    getInputProps: getInputPropsSingle,
    isDragActive: isDragActiveSingle,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      setUploadedImage(acceptedFile[0]);
    },
    multiple: false,
  });

  const {
    getRootProps: getRootPropsMultiple,
    getInputProps: getInputPropsMultiple,
    isDragActive: isDragActiveMultiple,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedImages(acceptedFiles[0]);
    },
    multiple: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData: DiamondDetailResponse = {
      isDiamond: Boolean(data.get("isDiamond") as string),
      origin: data.get("origin") as string,
      shape: data.get("shape") as string,
      carat: parseFloat(data.get("carat") as string),
      color: data.get("color") as string,
      clarity: data.get("clarity") as string,
      fluorescence: data.get("fluorescence") as string,
      symmetry: data.get("symmetry") as string,
      polish: data.get("polish") as string,
      cutGrade: data.get("cutGrade") as string,
      description: data.get("description") as string,
      diamondValue: parseFloat(data.get("diamondValue") as string),
      ProportionImages: uploadedImage,
      ClarityImages: uploadedImages,
      orderDetailId: diamondDetail.orderDetailId,
    };
    console.log("formData", formData);

    valuationStaffApi.createDiamondDetail(formData).then(
      (response: any) => {
        console.log("res:", response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true); // Set the button click state
    alert("Create successfully");
    const timer = setTimeout(() => {
      setSuccess(false);
      navigate("/valuationStaff/assigned");
    }, 3000);
    console.log("timer", timer);
  };

  return (
    <Paper
      sx={{
        width: "50%",
        height: "100%",
        marginLeft: "370px",
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
          Diamond Detail
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Section sx={{ width: "94%", marginLeft: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              {...label}
              defaultChecked={isFormEnabled}
              id="isDiamond"
              name="isDiamond"
              value={isFormEnabled}
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
                paddingLeft: "10px",
                marginBottom: "0px",
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
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="origin-label">Origin</InputLabel>
              <Select
                labelId="origin-label"
                id="origin"
                name="origin"
                value={diamondDetail.origin}
                label="Origin"
                onChange={handleChange}
              >
                <MenuItem value={"Natural"}>Natural</MenuItem>
                <MenuItem value={"Lab Grown"}>Lab Grown</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="shape-label">Shape</InputLabel>
              <Select
                labelId="shape-label"
                id="shape"
                name="shape"
                value={diamondDetail.shape}
                label="Shape"
                onChange={handleChange}
              >
                <MenuItem value="ROUND">ROUND</MenuItem>
                <MenuItem value="HEART">HEART</MenuItem>
                <MenuItem value="OVAL">OVAL</MenuItem>
                <MenuItem value="MARQUISE">MARQUISE</MenuItem>
                <MenuItem value="PEAR">PEAR</MenuItem>
                <MenuItem value="CUSHION">CUSHION</MenuItem>
                <MenuItem value="PRINCESS">PRINCESS</MenuItem>
                <MenuItem value="ASSCHER">ASSCHER</MenuItem>
                <MenuItem value="RADIANT">RADIANT</MenuItem>
                <MenuItem value="EMERALD">EMERALD</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>

          <FieldContainer>
            <TextField
              fullWidth
              id="carat"
              name="carat"
              label="Carat"
              value={diamondDetail.carat}
              onChange={handleChange}
              type="number"
              inputProps={{ min: "0", step: "0.00001" }}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={diamondDetail.color}
                label="Color"
                onChange={handleChange}
              >
                <MenuItem value="D">D</MenuItem>
                <MenuItem value="E">E</MenuItem>
                <MenuItem value="F">F</MenuItem>
                <MenuItem value="G">G</MenuItem>
                <MenuItem value="H">H</MenuItem>
                <MenuItem value="I">I</MenuItem>
                <MenuItem value="J">J</MenuItem>
                <MenuItem value="K">K</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="clarity-label">Clarity</InputLabel>
              <Select
                labelId="clarity-label"
                id="clarity"
                name="clarity"
                value={diamondDetail.clarity}
                label="Clarity"
                onChange={handleChange}
              >
                <MenuItem value="FL">FL</MenuItem>
                <MenuItem value="IF">IF</MenuItem>
                <MenuItem value="VVS1">VVS1</MenuItem>
                <MenuItem value="VVS2">VVS2</MenuItem>
                <MenuItem value="VS1">VS1</MenuItem>
                <MenuItem value="VS2">VS2</MenuItem>
                <MenuItem value="SI1">SI1</MenuItem>
                <MenuItem value="SI2">SI2</MenuItem>
                <MenuItem value="I1">I1</MenuItem>
                <MenuItem value="I2">I2</MenuItem>
                <MenuItem value="I3">I3</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="fluorescence-label">Fluorescence</InputLabel>
              <Select
                labelId="fluorescence-label"
                id="fluorescence"
                name="fluorescence"
                value={diamondDetail.fluorescence}
                label="Fluorescence"
                onChange={handleChange}
              >
                <MenuItem value="NONE">NONE</MenuItem>
                <MenuItem value="FAINT">FAINT</MenuItem>
                <MenuItem value="MEDIUM">MEDIUM</MenuItem>
                <MenuItem value="STRONG">STRONG</MenuItem>
                <MenuItem value="VERY STRONG">VERY STRONG</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="symmetry-label">Symmetry</InputLabel>
              <Select
                labelId="symmetry-label"
                id="symmetry"
                name="symmetry"
                value={diamondDetail.symmetry}
                label="Symmetry"
                onChange={handleChange}
              >
                <MenuItem value="EXCELLENT">EXCELLENT</MenuItem>
                <MenuItem value="VERY GOOD">VERY GOOD</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="POOR">POOR</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="polish-label">Polish</InputLabel>
              <Select
                labelId="polish-label"
                id="polish"
                name="polish"
                value={diamondDetail.polish}
                label="Polish"
                onChange={handleChange}
              >
                <MenuItem value="EXCELLENT">EXCELLENT</MenuItem>
                <MenuItem value="VERY GOOD">VERY GOOD</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="POOR">POOR</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="cutGrade-label">Cut Grade</InputLabel>
              <Select
                labelId="cutGrade-label"
                id="cutGrade"
                name="cutGrade"
                value={diamondDetail.cutGrade}
                label="Cut Grade"
                onChange={handleChange}
              >
                <MenuItem value="EXCELLENT">EXCELLENT</MenuItem>
                <MenuItem value="VERY GOOD">VERY GOOD</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="POOR">POOR</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={diamondDetail.description}
              onChange={handleChange}
              multiline
              rows={4}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              id="diamondValue"
              name="diamondValue"
              label="Diamond Value"
              value={diamondDetail.diamondValue}
              onChange={handleChange}
              inputProps={{ min: "0" }}
              type="number"
              disabled={!isFormEnabled}
            />
          </FieldContainer>
          <Section sx={{}}>
            <FieldContainer>
              <Typography sx={{ fontWeight: "bold" }}>Proportion</Typography>
              <Box
                {...getRootPropsSingle()}
                sx={{
                  border: "2px dashed grey",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: isDragActiveSingle
                    ? "#e0e0e0"
                    : "transparent",
                }}
              >
                <input
                  {...getInputPropsSingle()}
                  id="propotionImage"
                  name="propotionImage"
                />
                {uploadedImage ? (
                  <Typography>{uploadedImage.name}</Typography>
                ) : (
                  <Typography>
                    Drag 'n' drop a propotion image here, or click to select one
                  </Typography>
                )}
              </Box>
            </FieldContainer>
          </Section>
          <Section sx={{}}>
            <FieldContainer>
              <Typography sx={{ fontWeight: "bold" }}>
                Clarity Characteristic
              </Typography>
              <Box
                {...getRootPropsMultiple()}
                sx={{
                  border: "2px dashed grey",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: isDragActiveMultiple
                    ? "#e0e0e0"
                    : "transparent",
                }}
              >
                <input
                  {...getInputPropsMultiple()}
                  id="clarityImages"
                  name="clarityImages"
                />
                {uploadedImages ? (
                  <Typography>{uploadedImages.name}</Typography>
                ) : (
                  <Typography>
                    Drag 'n' drop a clarity image here, or click to select one
                  </Typography>
                )}
              </Box>
            </FieldContainer>
          </Section>
        </Section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              padding: "10px 20px",
              backgroundColor: isButtonClicked ? "green" : "#4F46E5", // Change color on button click
            }}
            onClick={handleButtonClick} // Add the click handler
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default DiamondDetail;
