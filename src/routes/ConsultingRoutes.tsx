import React, { ReactNode, useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";

const ConsultingRoutes = () => {
  const auth = localStorage.getItem("loggedIn");
  const role = localStorage.getItem("role");

  return auth && role === "ConsultingStaff" ? <Outlet /> : <Navigate to="/" />;
};

export default ConsultingRoutes;
