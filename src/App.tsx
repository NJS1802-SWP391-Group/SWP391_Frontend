import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
import Navbar from "./components/navbar/Navbar";
import ConsultingStaffPage from "./pages/ConsultingStaffPage";
import ValuationRequestForm from "./pages/ValuationRequestForm";
import AboutPage from "./pages/aboutPage/AboutPage";
import CalculatePage from "./pages/calculate/CalculatePage";
import DiamondCheckPage from "./pages/diamondCheck/DiamondCheckPage";
import HomePage from "./pages/homePage/HomePage";
import ManagerPage from "./pages/manager/managerPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ManagerPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/diamond-check" element={<DiamondCheckPage />} />
            <Route path="/calculate" element={<CalculatePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}

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
