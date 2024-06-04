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
<<<<<<< HEAD

import CertificatePage from "./pages/manager/certicatePage";
import ManagerApprovalPage from "./pages/manager/managerApprovalPage";
import ManagerAssignPage from "./pages/manager/managerAssignPage";
import DiamondDetail from "./pages/valuationStaff/diamondDetail";
=======
import RecepitBill from "./components/consulting/RecepitBill";
import RegisterPage from "./pages/register.tsx/RegisterPage";
>>>>>>> 189d620d6e82fa8dbd6d4d335ab6a4827be8cea3

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
            <Route path="/register" element={<RegisterPage />} />
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
<<<<<<< HEAD
            {/* <Route path="/navbar" element={<NavBarSystem />} /> */}
=======
            <Route path="/receipt-bill/:orderID" element={<RecepitBill />} />
>>>>>>> 189d620d6e82fa8dbd6d4d335ab6a4827be8cea3
          </Routes>
        </div>

        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
