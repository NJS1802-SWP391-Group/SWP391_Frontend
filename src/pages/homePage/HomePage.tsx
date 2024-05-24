import React from "react";
import "./HomePage.css";
import { TextField, Typography } from "@mui/material";
import Banner from "../../assets/—Pngtree—3d rendering diamond texture decoration_7437710.png";

const HomePage = () => {
  return (
    <div className="container">
      <div>
        <div className="image-container">
          <img src={Banner} alt="Mô tả ảnh" />
          <div className="overlay-text">
            <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
              Check any diamond's
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "30px", color: "#07BC97" }}
            >
              price and quality
            </Typography>

            <TextField
              sx={{
                backgroundColor: "white",
              }}
              label="Enter Certificate ID"
              placeholder="xxxxxx"
              variant="outlined"
            />
            <button>Run free check</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
