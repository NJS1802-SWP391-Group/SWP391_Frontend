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

import RecepitBill from "./components/consulting/RecepitBill";
import CertificatePage from "./pages/manager/certicatePage";
import ManagerApprovalPage from "./pages/manager/managerApprovalPage";
import ManagerAssignPage from "./pages/manager/managerAssignPage";
import RegisterPage from "./pages/register.tsx/RegisterPage";
import AssignedValuationStaffPage from "./pages/valuationStaff/assignedValuationStaffPage";
import DiamondDetail from "./pages/valuationStaff/diamondDetail";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/diamond/:orderCode" element={<DiamondDetail />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route
              path="/certificate/:resultId"
              element={<CertificatePage />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/diamond-check" element={<DiamondCheckPage />} />
            <Route path="/calculate" element={<CalculatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form-result" element={<FormResult />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}

            <Route path="/contact" element={<ValuationRequestForm />} />

            {/* System */}
            <Route path="/system" element={<LoginSystem />} />
            <Route path="/consulting-page" element={<ConsultingStaffPage />} />
            {/* <Route path="/navbar" element={<NavBarSystem />} /> */}
            <Route path="/receipt-bill/:orderID" element={<RecepitBill />} />
            {/* ManagerPath */}
            <Route path="/manager/approval" element={<ManagerApprovalPage />} />
            <Route path="/manager/assign" element={<ManagerAssignPage />} />
          </Routes>
        </div>

        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
