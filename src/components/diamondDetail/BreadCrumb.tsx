import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ id }: string) => {
  return (
    <Box sx={{ display: "flex", gap: 2, color: "gray" }}>
      <Link to={"/diamond-check"} style={{color: "gray"}}>Diamond Check</Link>
      <KeyboardArrowRightIcon />
      <p> {id}</p>
    </Box>
  );
};

export default BreadCrumb;
