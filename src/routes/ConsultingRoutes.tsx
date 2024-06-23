import { Navigate, Outlet } from "react-router-dom";

const ConsultingRoutes = () => {
  const auth = localStorage.getItem("loggedIn");
  const role = localStorage.getItem("role");

  return auth && role === "ConsultingStaff" ? <Outlet /> : <Navigate to="/" />;
};

export default ConsultingRoutes;
