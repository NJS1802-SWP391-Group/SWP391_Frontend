import { Button, Card, Typography } from "@mui/material";
import { originDiamondType, shapeDiamond } from "../pages/CalculatePage";

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
        >
          <ul style={{ listStyle: "none", display: "flex" }}>
            {originDiamond.map((originMap, index) => {
              return (
                <li style={{ marginRight: "10px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    key={originMap.id}
                    style={{
                      width: "198px",
                      backgroundColor: "#F3F4F6",
                    }}
                    onClick={() => handleOriginClick(originMap, index)}
                  >
                    {originMap.icon}
                    <Typography
                      color={"#111827"}
                      textTransform={"none"}
                      fontSize={"12px"}
                    >
                      {originMap.name}
                    </Typography>
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <Typography style={{ color: "#6B7280" }}>SHAPE</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          {shapeArray.map((shapeArr) => {
            return (
              <Button
                variant="contained"
                size="small"
                key={shapeArr.id}
                style={{
                  width: "72px",
                  backgroundColor: "#4F46E5",
                }}
              >
                <Typography color={"white"} textTransform={"none"}>
                  {shapeArr.name}
                </Typography>
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default CalculatorInput;
