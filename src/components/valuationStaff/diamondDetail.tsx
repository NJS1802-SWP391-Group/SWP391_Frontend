import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate } from "react-router-dom";
import DetailImage from "../../assets/DetailImage.png";
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
    carat: 0.3,
    color: "",
    clarity: "",
    fluorescence: "",
    symmetry: "",
    polish: "",
    cutGrade: "",
    description: "",
    diamondValue: 0,
    orderDetailId: state.orderDetailId,
  };

  const [diamondDetail, setDiamondDetail] = useState(initialDiamondDetail);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
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
  };

  const handleCaratChange = (event: Event, value: number | number[]) => {
    setDiamondDetail({ ...diamondDetail, carat: value as number });
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const diamondDetailWithDates = {
        ...diamondDetail,
        carat: String(diamondDetail.carat), // Convert carat to string before sending if necessary
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
      alert("Create successfully");
      const timer = setTimeout(() => {
        setSuccess(false);
        navigate("/valuationStaff/assigned");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  // const todayDate = new Date().toISOString().split("T")[0];

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
              alignItems: "center",
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
          {/* <FieldContainer>
            <TextField
              fullWidth
              type="date"
              label="Certificate Date"
              name="issueDate"
              value={diamondDetail.issueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: todayDate }}
              disabled={!isFormEnabled}
            />
          </FieldContainer> */}

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
                <MenuItem value="CUSHION">CUSHION</MenuItem>
                <MenuItem value="EMERALD">EMERALD</MenuItem>
                <MenuItem value="OVAL">OVAL</MenuItem>
                <MenuItem value="PRINCESS">PRINCESS</MenuItem>
                <MenuItem value="PEAR">PEAR</MenuItem>
                <MenuItem value="RADIANT">RADIANT</MenuItem>
                <MenuItem value="MARQUISE">MARQUISE</MenuItem>
                <MenuItem value="ASSCHER">ASSCHER</MenuItem>
                <MenuItem value="HEART">HEART</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <Typography>Carat: {diamondDetail.carat}</Typography>
            <Slider
              value={diamondDetail.carat}
              min={0.3}
              max={5}
              step={0.1}
              onChange={handleCaratChange}
              disabled={!isFormEnabled}
              valueLabelDisplay="auto"
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
            <FormControl fullWidth disabled={!isFormEnabled}>
              <InputLabel id="color-label">Color Grade</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={diamondDetail.color}
                label="Color Grade"
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
              <InputLabel id="clarity-label">Clarity Grade</InputLabel>
              <Select
                labelId="clarity-label"
                id="clarity"
                name="clarity"
                value={diamondDetail.clarity}
                label="Clarity Grade"
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
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="V.GOOD">V.GOOD</MenuItem>
                <MenuItem value="EX.">EX.</MenuItem>
              </Select>
            </FormControl>
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
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="V.GOOD">V.GOOD</MenuItem>
                <MenuItem value="EX.">EX.</MenuItem>
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
                <MenuItem value="FAIR">FAIR</MenuItem>
                <MenuItem value="GOOD">GOOD</MenuItem>
                <MenuItem value="V.GOOD">V.GOOD</MenuItem>
                <MenuItem value="EX.">EX.</MenuItem>
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
                <MenuItem value="VSTG">VSTG</MenuItem>
                <MenuItem value="STG">STG</MenuItem>
                <MenuItem value="MED">MED</MenuItem>
                <MenuItem value="FNT">FNT</MenuItem>
                <MenuItem value="NON">NON</MenuItem>
              </Select>
            </FormControl>
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
              inputProps={{ min: 1 }}
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
              UPLOAD IMAGES
            </Typography>
          </Box>
          <Box
            {...getRootProps()}
            sx={{
              border: "2px dashed #4F46E5",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: isDragActive ? "#f1f1f1" : "#fafafa",
            }}
          >
            <input {...getInputProps()} multiple />
            <Box>
              <CloudUploadIcon sx={{ fontSize: "48px", color: "#4F46E5" }} />
              <Typography>
                Drag & drop images here, or click to select
              </Typography>
            </Box>
          </Box>
          {uploadedImages.length > 0 && (
            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Uploaded Images:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {uploadedImages.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "10px",
                      margin: "5px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="caption">{image.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
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

export default DiamondDetail;
