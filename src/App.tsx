import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
import LoginPage from "./pages/loginPage";
import ValuationRequestForm from "./pages/ValuationRequestForm";
import ConsultingStaffPage from "./pages/ConsultingStaffPage";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import DiamondCheckPage from "./pages/diamondCheck/DiamondCheckPage";
import CalculatePage from "./pages/calculate/CalculatePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/diamond-check" element={<DiamondCheckPage />} />
            <Route path="/calculate" element={<CalculatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/contact" element={<ValuationRequestForm />} />
            <Route path="/consulting-page" element={<ConsultingStaffPage />} />
          </Routes>
        </div>
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
