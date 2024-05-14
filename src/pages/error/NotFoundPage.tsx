import { Container } from "@mui/material";
import NotFoundPageComponent from "../../errors/notFoundPageComponent";

const NotFoundPage = () => {
  return (
    <Container maxWidth={false} style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <NotFoundPageComponent />
    </Container>
  );
};

export default NotFoundPage;
