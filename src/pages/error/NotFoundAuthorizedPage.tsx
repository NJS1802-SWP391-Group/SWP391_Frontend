import { Container } from "@mui/material";
import NotFoundPageAuthorized from "components/errors/notFoundPageAuthorized";


const NotFoundAuthorizedPage = () => {
  return (
    <Container maxWidth={false} style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <NotFoundPageAuthorized />
    </Container>
  );
};

export default NotFoundAuthorizedPage;
