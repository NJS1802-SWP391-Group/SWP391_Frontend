import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
<<<<<<< HEAD
import Navbar from "./components/navbar/Navbar";
=======
>>>>>>> 52eb96d (System Link)
import ValuationRequestForm from "./pages/ValuationRequestForm";
import AboutPage from "./pages/aboutPage/AboutPage";
import CalculatePage from "./pages/calculate/CalculatePage";
import ConsultingStaffPage from "./pages/consulting/ConsultingStaffPage";
import DiamondCheckPage from "./pages/diamondCheck/DiamondCheckPage";
import HomePage from "./pages/homePage/HomePage";

import FormResult from "./components/forms/FormResult";
import LoginSystem from "./pages/System/loginSystem";

import CertificatePage from "./pages/manager/certicatePage";
import ManagerApprovalPage from "./pages/manager/managerApprovalPage";
import ManagerAssignPage from "./pages/manager/managerAssignPage";
import DiamondDetail from "./pages/valuationStaff/diamondDetail";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/manager/approval" element={<ManagerApprovalPage />} />
            <Route path="/manager/assign" element={<ManagerAssignPage />} />
            <Route path="/diamond/:orderCode" element={<DiamondDetail />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route
              path="/certificate/:resultId"
              element={<CertificatePage />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/Login" element={<HomePage />} />
            <Route path="/diamond-check" element={<DiamondCheckPage />} />
            <Route path="/calculate" element={<CalculatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form-result" element={<FormResult />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}

            <Route path="/contact" element={<ValuationRequestForm />} />
            <Route path="/consulting-page" element={<ConsultingStaffPage />} />

            {/* ManagerPath */}
            <Route path="/managerA" element={<ManagerApprovalPage />} />
            <Route path="/managerAssign" element={<ManagerAssignPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* System */}
            <Route path="/system" element={<LoginSystem />} />
            <Route path="/consulting-page" element={<ConsultingStaffPage />} />
            {/* <Route path="/navbar" element={<NavBarSystem />} /> */}
          </Routes>
        </div>

        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
