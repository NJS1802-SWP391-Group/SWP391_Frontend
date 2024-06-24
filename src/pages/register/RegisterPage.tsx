import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Container } from "@mui/material";
import RegisterForm from "../../components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <RegisterForm />
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterPage;
