import { Card, Typography } from "@mui/material";

const CalculatorInput = () => {
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
        ></div>
      </Card>
    </div>
  );
};

export default CalculatorInput;
