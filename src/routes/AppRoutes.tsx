import { Route, Routes } from "react-router-dom";
import RecepitBill from "../components/consulting/RecepitBill";
import SendEmail from "../components/consulting/SendEmail";
import FormResult from "../components/forms/FormResult";
import DiamondDetail from "../components/valuationStaff/diamondDetail";
import LoginSystem from "../pages/System/loginSystem";
import ValuationRequestForm from "../pages/ValuationRequestForm";
import AboutPage from "../pages/aboutPage/AboutPage";
import CalculatePage from "../pages/calculate/CalculatePage";
import ConsultingStaffPage from "../pages/consulting/ConsultingStaffPage";
import Profile from "../pages/customer/Profile";
import ValuationOrderPage from "../pages/customer/ValuationOrderPage";
import DiamondCheckPage from "../pages/diamondCheck/DiamondCheckPage";
import HomePage from "../pages/homePage/HomePage";
import CertificatePage from "../pages/manager/certicatePage";
import ManageDiamondPage from "../pages/manager/manageDiamondPage";
import ManagerNavbarPage from "../pages/manager/manageNavbarPage";
import ManagerApprovalPage from "../pages/manager/managerApprovalPage";
import ManagerAssignPage from "../pages/manager/managerAssignPage";
import ServiceDetailPage from "../pages/manager/serviceDetailPage";
import ServicePage from "../pages/manager/servicePage";
import RegisterPage from "../pages/register/RegisterPage";
import AssignedValuationStaffPage from "../pages/valuationStaff/assignedValuationStaffPage";
import ConsultingRoutes from "./ConsultingRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/contact" element={<PrivateRoutes />}>
        <Route path="/contact" element={<ValuationRequestForm />} />
      </Route>
      <Route path="consulting-page" element={<ConsultingRoutes />}>
        <Route path="/consulting-page" element={<ConsultingStaffPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/diamond/:orderCode" element={<DiamondDetail />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginSystem />} />
      <Route path="/diamond-check" element={<DiamondCheckPage />} />
      <Route path="/calculate" element={<CalculatePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form-result" element={<FormResult />} />
      <Route path="/valuation-order" element={<ValuationOrderPage />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      <Route path="/contact" element={<ValuationRequestForm />} />
      <Route path="/consulting-page" element={<ConsultingStaffPage />} />

      {/* ManagerPath */}
      <Route path="/manager/managing" element={<ManagerNavbarPage />} />
      <Route path="/manager/approval" element={<ManagerApprovalPage />} />
      <Route path="/manager/approval/:resultId" element={<CertificatePage />} />
      <Route path="/manager/assign" element={<ManagerAssignPage />} />
      <Route
        path="/valuationStaff/assigned"
        element={<AssignedValuationStaffPage />}
      />

      <Route path="/admin/service" element={<ServicePage />} />
      <Route path="/admin/serviceDetail" element={<ServiceDetailPage />} />

      <Route path="/manager/diamond" element={<ManageDiamondPage />} />

      <Route path="/about" element={<AboutPage />} />

      {/* System */}
      <Route path="/system" element={<LoginSystem />} />
      {/* <Route path="/navbar" element={<NavBarSystem />} /> */}
      <Route path="/receipt-bill/:orderID" element={<RecepitBill />} />
      <Route path="/send-email/:orderID" element={<SendEmail />} />
      {/* ManagerPath */}
      <Route path="/*" element={"404 Not Found"} />
    </Routes>
  );
};

export default AppRoutes;
