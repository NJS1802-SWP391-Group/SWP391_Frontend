import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
import ValuationRequestForm from "./pages/ValuationRequestForm";
import AboutPage from "./pages/aboutPage/AboutPage";
import CalculatePage from "./pages/calculate/CalculatePage";
import ConsultingStaffPage from "./pages/consulting/ConsultingStaffPage";
import DiamondCheckPage from "./pages/diamondCheck/DiamondCheckPage";
import HomePage from "./pages/homePage/HomePage";

import FormResult from "./components/forms/FormResult";
import LoginSystem from "./pages/System/loginSystem";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/Login" element={<HomePage />} />
            <Route path="/diamond-check" element={<DiamondCheckPage />} />
            <Route path="/calculate" element={<CalculatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form-result" element={<FormResult />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/contact" element={<ValuationRequestForm />} />

            {/* System */}
            <Route path="/system" element={<LoginSystem />} />
            <Route path="/consulting-page" element={<ConsultingStaffPage />} />
          </Routes>
        </div>

        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
