import { Button, Card, Typography } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { useState } from "react";

const CalculatorInput = () => {
  const [origin1, setOrigin1] = useState<boolean>(true);
  const [origin2, setOrigin2] = useState<boolean>(false);

  const clickOrigin1 = () => {
    setOrigin1(true);
    setOrigin2(false);
  };

  const clickOrigin2 = () => {
    setOrigin1(false);
    setOrigin2(true);
  };

  return (
    <div>
      <Typography
        align="left"
        variant="h4"
        fontWeight={"bold"}
        color={"#111827"}
      >
        Calculator Input
      </Typography>
      <Card style={{ width: "424px" }}>
        <Typography style={{ color: "#6B7280" }}>DIAMOND ORIGIN</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              width: "198px",
              backgroundColor: origin1 ? "#4F46E5" : "#F3F4F6",
            }}
            onClick={clickOrigin1}
          >
            <PublicOutlinedIcon
              style={{ height: "20px", color: origin1 ? "white" : "#111827" }}
            />
            <Typography
              color={origin1 ? "white" : "#111827"}
              textTransform={"none"}
            >
              Natural
            </Typography>
          </Button>

          <Button
            variant="contained"
            size="small"
            style={{
              width: "198px",
              backgroundColor: origin2 ? "#4F46E5" : "#F3F4F6",
            }}
            onClick={clickOrigin2}
          >
            <ScienceOutlinedIcon
              style={{ height: "20px", color: origin2 ? "white" : "#111827" }}
            />
            <Typography
              color={origin2 ? "white" : "#111827"}
              textTransform={"none"}
            >
              Lab Grown
            </Typography>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CalculatorInput;
