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
    propotionImage: "",
    clarityImages: [],
    orderDetailId: state.orderDetailId,
  };

  const [diamondDetail, setDiamondDetail] = useState(initialDiamondDetail);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
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

  const {
    getRootProps: getRootPropsSingle,
    getInputProps: getInputPropsSingle,
    isDragActive: isDragActiveSingle,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedImage(acceptedFiles[0]);
    },
    multiple: false,
  });

  const {
    getRootProps: getRootPropsMultiple,
    getInputProps: getInputPropsMultiple,
    isDragActive: isDragActiveMultiple,
  } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const diamondDetailWithDates = {
        ...diamondDetail,
        carat: String(diamondDetail.carat),
        orderDetailId: state.orderDetailId,
      };
      console.log("log submit:", diamondDetailWithDates);
      // accountApi
      //   .getAccountInfo()
      //   .then((response) => {
      //     console.log("fetchData:", response);
      //   })
      //   .catch((error) => {
      //     console.log("Error", error);
      //   });
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

  return (
    <Paper
      sx={{
        width: "50%",
        height: "100%",
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
              step={0.01}
              onChange={handleCaratChange}
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
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="M">M</MenuItem>
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
                <MenuItem value="SI3">SI3</MenuItem>
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
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Faint">Faint</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Strong">Strong</MenuItem>
                <MenuItem value="Very Strong">Very Strong</MenuItem>
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
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Very Good">Very Good</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
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
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Very Good">Very Good</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
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
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Very Good">Very Good</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
              </Select>
            </FormControl>
          </FieldContainer>
          <FieldContainer>
            <TextField
              label="Description"
              name="description"
              value={diamondDetail.description}
              onChange={handleChange}
              fullWidth
              disabled={!isFormEnabled}
              multiline
              rows={4}
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
              VALUATING PRICE
            </Typography>
          </Box>
          <FieldContainer>
            <TextField
              fullWidth
              id="diamondValue"
              name="diamondValue"
              label="Diamond Value"
              value={diamondDetail.diamondValue}
              onChange={handleChange}
              disabled={!isFormEnabled}
            />
          </FieldContainer>
        </Section>

        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Title sx={{ fontSize: "20px" }}>Proportions</Title>
          <Box
            {...getRootPropsSingle()}
            sx={{
              border: "2px dashed grey",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <input {...getInputPropsSingle()} disabled={!isFormEnabled} />
            {isDragActiveSingle ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop a single file here, or click to select file</p>
            )}
            <CloudUploadIcon sx={{ fontSize: "50px" }} />
          </Box>

          {uploadedImage && (
            <Box
              sx={{
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <Typography>Uploaded Image:</Typography>
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded file"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            </Box>
          )}
        </Section>

        <Section sx={{ width: "94%", marginLeft: "26px" }}>
          <Title sx={{ fontSize: "20px" }}> Clarity Characteristic</Title>
          <Box
            {...getRootPropsMultiple()}
            sx={{
              border: "2px dashed grey",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <input {...getInputPropsMultiple()} disabled={!isFormEnabled} />
            {isDragActiveMultiple ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop multiple files here, or click to select files</p>
            )}
            <CloudUploadIcon sx={{ fontSize: "50px" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {uploadedImages.map((file, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography>Image {index + 1}</Typography>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded file ${index + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "150px" }}
                />
              </Box>
            ))}
          </Box>
        </Section>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "15px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default DiamondDetail;
