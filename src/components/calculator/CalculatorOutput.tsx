import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import "./Calculator.css";
import InformationCard from "./InformationCard";
const svgIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <path
      d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"
      fill="currentColor"
    ></path>
  </svg>
);
const CalculatorOutput: React.FC = () => {
  return (
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
        <Box>
          <InformationCard
            title="Estimate Range"
            value="$4,057 - $6,279"
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
                fontWeight: 65
              }}
            >
              Round 1 Carat G VS2
            </Typography>
            <Chip label="Natural Diamond" color="success" variant="outlined" />
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} lg={4}>
            <InformationCard
              title="Estimate Range"
              value="$4,057 - $6,279"
              svgIcon={svgIcon}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <InformationCard
              title="Last 30 Day Change"
              value="-2.19%"
              svgIcon={svgIcon}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <InformationCard
              title="Estimate Price per Carat"
              value="$5,115"
              svgIcon={svgIcon}
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CalculatorOutput;
