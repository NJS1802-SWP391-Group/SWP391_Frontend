import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("loggedIn");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const session = sessionStorage.getItem("loggedIn");
  //   if (!session) {
  //     navigate("/login");
  //   }
  // }, []);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
