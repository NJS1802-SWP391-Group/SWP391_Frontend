import { Box, Button, Slider, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Calculator.css";

const CalculatorInput: React.FC = () => {
  const [origin, setOrigin] = useState<string>("Natural");
  const [shape, setShape] = useState<string>("Round");
  const [carat, setCarat] = useState<number>(1.0);
  const [color, setColor] = useState<string>("G");
  const [clarity, setClarity] = useState<string>("VS2");
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOriginChange = (value: string) => {
    setOrigin(value);
  };
  console.log(origin);
  const handleShapeChange = (value: string) => {
    setShape(value);
  };

  const handleColorChange = (value: string) => {
    setColor(value);
  };

  const handleClarityChange = (value: string) => {
    setClarity(value);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
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
            onClick={() => handleOriginChange(s)}
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
            className={`shape-button ${shape === s ? "active-button" : ""}`}
            onClick={() => handleShapeChange(s)}
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
        onChange={(event, value) => {
          console.log(event);
          setCarat(parseFloat(value.toString()));
        }}
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
            onClick={() => handleColorChange(c)}
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
        {["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map((cl) => (
          <Box
            key={cl}
            className={`shape-button ${clarity === cl ? "active-button" : ""}`}
            onClick={() => handleClarityChange(cl)}
          >
            {cl}
          </Box>
        ))}
      </Box>

      <Box className="toggle-expand" onClick={toggleExpand}>
        <Typography className="text-gray-900 uppercase font-medium tracking-wide">
          {expanded ? "Fewer Inputs" : "More Inputs"}
        </Typography>
        <SvgIcon className={`toggle-expand-icon ${expanded ? "expanded" : ""}`}>
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
            {["Fair", "Good", "V.Good", "Ex."].map((cut) => (
              <Box
                key={cut}
                className={`shape-button ${
                  cut === "Ex." ? "active-button" : ""
                }`}
                onClick={() => handleClarityChange(cut)}
              >
                {cut}
              </Box>
            ))}
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
            {["Fair", "Good", "V.Good", "Ex."].map((symmetry) => (
              <Box
                key={symmetry}
                className={`shape-button ${
                  symmetry === "Ex." ? "active-button" : ""
                }`}
                onClick={() => handleClarityChange(symmetry)}
              >
                {symmetry}
              </Box>
            ))}
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
            {["Fair", "Good", "V.Good", "Ex."].map((polish) => (
              <Box
                key={polish}
                className={`shape-button ${
                  polish === "Ex." ? "active-button" : ""
                }`}
                onClick={() => handleClarityChange(polish)}
              >
                {polish}
              </Box>
            ))}
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
            {["VSTG", "STG", "MED", "FNT", "NON"].map((fluorescence) => (
              <Box
                key={fluorescence}
                className={`shape-button ${
                  fluorescence === "NON" ? "active-button" : ""
                }`}
                onClick={() => handleClarityChange(fluorescence)}
              >
                {fluorescence}
              </Box>
            ))}
          </Box>
        </>
      )}

      <Button
        variant="contained"
        color="primary"
        className="submit-button"
        sx={{ bgcolor: "#4f46e5" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CalculatorInput;
