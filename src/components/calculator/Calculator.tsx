import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Slider,
  Typography,
  SvgIcon,
  Chip,
  Grid,
} from "@mui/material";
import "./Calculator.css";
import WarningIcon from "@mui/icons-material/Warning";
import {
  CalculateInterface,
  CalculateOutputInterface,
} from "../../interfaces/calculate/calculateInterface";
import calculateApi from "../../services/calculateApi";
import InformationCard from "./InformationCard";
const svgIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <path
      d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"
      fill="currentColor"
    ></path>
  </svg>
);
const Calculator: React.FC = () => {
  const [result, setResult] = useState<CalculateOutputInterface>(null);
  const [origin, setOrigin] = useState<string>("Natural");
  const [shape, setShape] = useState<string>("Round");
  const [carat, setCarat] = useState<number>(1.0);
  const [color, setColor] = useState<string>("G");
  const [clarity, setClarity] = useState<string>("VS2");
  const [expanded, setExpanded] = useState<boolean>(false);
  const [cutGrade, setCutGrade] = useState<string>("Excellent");
  const [symmetryGrade, setSymmetryGrade] = useState<string>("Excellent");
  const [polishGrade, setPolishGrade] = useState<string>("Excellent");
  const [fluorescenceValue, setFluorescenceValue] = useState<string>("None");
  const extract = (value) => {
    let val = "";
    if (value === "Fair") val = "Fair";
    if (value === "Good") val = "Good";
    if (value === "V.Good") val = "Very Good";
    if (value === "Ex.") val = "Excellent";
    if (value === "VSTG") val = "Very Strong";
    if (value === "STG") val = "Strong";
    if (value === "MED") val = "Medium";
    if (value === "FNT") val = "Faint";
    if (value === "NON") val = "None";
    return val;
  };

  const handleOriginChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setOrigin(value);
  };
  const handleShapeChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setShape(value);
  };

  const handleColorChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setColor(value);
  };

  const handleClarityChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setClarity(value);
  };
  const handleCutGradeChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setCutGrade(extract(value));
  };
  const handleSymmetryGradeChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setSymmetryGrade(extract(value));
  };
  const handlePolishGradeChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setPolishGrade(extract(value));
  };
  const handleFluorescenceChange = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    setFluorescenceValue(extract(value));
  };
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const postData = async (data: CalculateInterface) => {
    calculateApi.getCalculateValue(data).then(
      (response: any) => {
        if (response !== "Sequence contains no elements") setResult(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    const data: CalculateInterface = {
      origin: "Natural",
      shape: "Round",
      carat: 1.0,
      color: "D",
      clarity: "IF",
      fluorescence: "None",
      symmetry: "Excellent",
      polish: "Excellent",
      cutGrade: "Excellent",
    };
    postData(data);
  }, []);
  return (
    <>
      <Box className="calculator-container cal_input">
        <Typography fontWeight={700} fontSize={24} marginBottom="0.5rem">
          Calculator Input
        </Typography>
        <Typography
          fontWeight={500}
          marginTop="1rem"
          marginBottom="0.5rem"
          className="calc-input-label"
        >
          Diamond Origin
        </Typography>
        <Box className="origin-buttons">
          {["Natural", "Lab Grown"].map((s) => (
            <Box
              key={s}
              className={`origin-button ${origin === s ? "active-button" : ""}`}
              onClick={(event) => handleOriginChange(event, s)}
            >
              {s}
            </Box>
          ))}
        </Box>

        <Typography
          fontWeight={500}
          marginTop="1rem"
          marginBottom="0.5rem"
          className="calc-input-label"
        >
          Shape
        </Typography>
        <Box className="shape-buttons">
          {[
            "Round",
            "Cushion",
            "Emerald",
            "Oval",
            "Princess",
            "Pear",
            "Radiant",
            "Marquise",
            "Asscher",
            "Heart",
          ].map((s) => (
            <Box
              key={s}
              className={`shape-button-sm ${
                shape === s ? "active-button" : ""
              }`}
              onClick={(event) => handleShapeChange(event, s)}
            >
              {s}
            </Box>
          ))}
        </Box>

        <Typography
          fontWeight={500}
          marginTop="1rem"
          marginBottom="0.5rem"
          className="calc-input-label"
        >
          Carat
        </Typography>
        <Box className="carat-input">
          <Typography className="carat-slider-opacity">
            {(carat - 0.05).toFixed(2)}
          </Typography>
          <Typography className="carat-slider-output">
            {carat.toFixed(2)}
          </Typography>
          <Typography className="carat-slider-opacity">
            {(carat + 0.05).toFixed(2)}
          </Typography>
        </Box>
        <Slider
          className="carat-slider"
          sx={{ color: "#4f46e5" }}
          value={carat}
          min={0.3}
          max={5}
          step={0.01}
          onChange={(event, value) => setCarat(value as number)}
        />

        <Typography
          fontWeight={500}
          marginTop="1rem"
          marginBottom="0.5rem"
          className="calc-input-label"
        >
          Color
        </Typography>
        <Box className="shape-buttons">
          {["K", "J", "I", "H", "G", "F", "E", "D"].map((c) => (
            <Box
              key={c}
              className={`shape-button ${color === c ? "active-button" : ""}`}
              onClick={(event) => handleColorChange(event, c)}
            >
              {c}
            </Box>
          ))}
        </Box>

        <Typography
          fontWeight={500}
          marginTop="1rem"
          marginBottom="0.5rem"
          className="calc-input-label"
        >
          Clarity
        </Typography>
        <Box className="shape-buttons">
          {["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map(
            (cl) => (
              <Box
                key={cl}
                className={`shape-button ${
                  clarity === cl ? "active-button" : ""
                }`}
                onClick={(event) => handleClarityChange(event, cl)}
              >
                {cl}
              </Box>
            )
          )}
        </Box>

        <Box className="toggle-expand" onClick={toggleExpand}>
          <Typography className="text-gray-900 uppercase font-medium tracking-wide">
            {expanded ? "Fewer Inputs" : "More Inputs"}
          </Typography>
          <SvgIcon
            className={`toggle-expand-icon ${expanded ? "expanded" : ""}`}
          >
            <path
              d={
                expanded
                  ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              }
            />
          </SvgIcon>
        </Box>

        {expanded && (
          <>
            <Typography
              fontWeight={500}
              marginTop="1rem"
              marginBottom="0.5rem"
              className="calc-input-label"
            >
              Cut
            </Typography>
            <Box className="shape-buttons">
              {["Fair", "Good", "V.Good", "Ex."].map((cut) => {
                return (
                  <Box
                    key={cut}
                    className={`shape-button ${
                      cutGrade == extract(cut) ? "active-button" : ""
                    }`}
                    onClick={(event) => handleCutGradeChange(event, cut)}
                  >
                    {cut}
                  </Box>
                );
              })}
            </Box>

            <Typography
              fontWeight={500}
              marginTop="1rem"
              marginBottom="0.5rem"
              className="calc-input-label"
            >
              Symmetry
            </Typography>
            <Box className="shape-buttons">
              {["Fair", "Good", "V.Good", "Ex."].map((symmetry) => {
                return (
                  <Box
                    key={symmetry}
                    className={`shape-button ${
                      symmetryGrade === extract(symmetry) ? "active-button" : ""
                    }`}
                    onClick={(event) =>
                      handleSymmetryGradeChange(event, symmetry)
                    }
                  >
                    {symmetry}
                  </Box>
                );
              })}
            </Box>

            <Typography
              fontWeight={500}
              marginTop="1rem"
              marginBottom="0.5rem"
              className="calc-input-label"
            >
              Polish
            </Typography>
            <Box className="shape-buttons">
              {["Fair", "Good", "V.Good", "Ex."].map((polish) => {
                return (
                  <Box
                    key={polish}
                    className={`shape-button ${
                      polishGrade === extract(polish) ? "active-button" : ""
                    }`}
                    onClick={(event) => handlePolishGradeChange(event, polish)}
                  >
                    {polish}
                  </Box>
                );
              })}
            </Box>

            <Typography
              fontWeight={500}
              marginTop="1rem"
              marginBottom="0.5rem"
              className="calc-input-label"
            >
              Fluorescence
            </Typography>
            <Box className="shape-buttons">
              {["VSTG", "STG", "MED", "FNT", "NON"].map((fluorescence) => {
                return (
                  <Box
                    key={fluorescence}
                    className={`shape-button-sm ${
                      fluorescenceValue === extract(fluorescence)
                        ? "active-button"
                        : ""
                    }`}
                    onClick={(event) =>
                      handleFluorescenceChange(event, fluorescence)
                    }
                  >
                    {fluorescence}
                  </Box>
                );
              })}
            </Box>
          </>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const data: CalculateInterface = {
              origin,
              shape,
              carat,
              color,
              clarity,
              fluorescence: fluorescenceValue,
              symmetry: symmetryGrade,
              polish: polishGrade,
              cutGrade,
            };
            postData(data);
          }}
          className="submit-button"
          sx={{ bgcolor: "#4f46e5" }}
        >
          Submit
        </Button>
      </Box>
      <Box
        className="calculator-container cal_output"
        sx={{
          height: "fit-content",
        }}
      >
        <Typography fontWeight={700} fontSize={24} marginBottom="0.5rem">
          Calculator Output
        </Typography>
        <Box
          className="calculator-output"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {result ? (
            <>
              <Box>
                <InformationCard
                  title="Estimate Range"
                  value={`$${
                    result.fairPrice &&
                    result?.fairPrice.toLocaleString("en-US")
                  }`}
                  svgIcon={svgIcon}
                  size="large"
                />
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "text.secondary",
                      textAlign: "center",
                      marginBottom: "1rem",
                      fontWeight: 65,
                    }}
                  >
                    {result?.shape} {result?.carat} Carat {result?.color}{" "}
                    {result?.clarity}
                  </Typography>
                  <Chip
                    label={`${result?.origin} Diamond`}
                    color="success"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6} lg={4}>
                  <InformationCard
                    title="Estimate Range"
                    value={`$${
                      result.minPrice && result.minPrice.toLocaleString("en-US")
                    } - $${
                      result.maxPrice &&
                      result?.maxPrice.toLocaleString("en-US")
                    }`}
                    svgIcon={svgIcon}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <InformationCard
                    title="Last 30 Day Change"
                    value={`${result?.last30DayChange}%`}
                    svgIcon={svgIcon}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <InformationCard
                    title="Estimate Price per Carat"
                    value={`$${
                      result.pricePerCarat &&
                      result?.pricePerCarat.toLocaleString("en-US")
                    }`}
                    svgIcon={svgIcon}
                    size="small"
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <WarningIcon sx={{ fontSize: "4rem", color: "red" }} />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "red",
                  textAlign: "center",
                }}
              >
                Cannot Calculate
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
