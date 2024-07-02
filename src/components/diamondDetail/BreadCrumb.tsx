import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import React from "react";
// import { Props } from "react-modal";
import { Link } from "react-router-dom";
type Props = {
  id: string
}
const BreadCrumb = ({ id }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 2, color: "gray" }}>
      <Link to={"/diamond-check"} style={{color: "gray"}}>Diamond Check</Link>
      <KeyboardArrowRightIcon />
      <p> {id}</p>
    </Box>
  );
};

export default BreadCrumb;
