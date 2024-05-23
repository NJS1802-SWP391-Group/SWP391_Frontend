import { Container } from "@mui/material";
import CalculatorInput from "../../components/CalculatorInput";

export type shapeDiamond = {
  id: number;
  name: string;
};

export type originDiamondType = {
  id: number;
  name: string;
  icon: JSX.Element;
};

const CalculatePage = () => {
  return (
    <Container>
      <CalculatorInput />
    </Container>
  );
};

export default CalculatePage;
