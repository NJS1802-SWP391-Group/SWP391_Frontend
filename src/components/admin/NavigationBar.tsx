import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExtensionIcon from "@mui/icons-material/Extension";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Card, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiavanLogo from "../../assets/Diavan.png";
import migrateApi from "../../services/migrateApi";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleMigrate = async () => {
    try {
      const response = await migrateApi.migrateList();
      toast.success(`Migrate successful: ${response}`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Migrate failed: ${error.message}`);
      } else {
        toast.error("Migrate failed: An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Card
        sx={{
          display: "flex",
          height: "700px",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f5f9fa",
            margin: "10px 0",
            padding: "10px 60px",
            borderRadius: "25px",
          }}
        >
          <img src={DiavanLogo} width={80} height={80} alt="Logo" />
        </Box>
        <Divider variant="middle" />
        <ul
          className="list-service"
          style={{ listStyleType: "none", padding: 0 }}
        >
          <button
            onClick={() => navigate("/admin/service")}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              width: "100%",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                fontSize: "19px",
              }}
            >
              <SettingsIcon sx={{ margin: "0 15px" }} />
              Service
            </li>
          </button>
          <button
            onClick={() => navigate("/admin/serviceDetailNew")}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              width: "100%",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                fontSize: "19px",
              }}
            >
              <SettingsSuggestIcon sx={{ margin: "0 15px" }} />
              Service Detail
            </li>
          </button>
          <button
            onClick={() => navigate("/admin")}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              width: "100%",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                fontSize: "19px",
              }}
            >
              <AccountBoxIcon sx={{ margin: "0 15px" }} />
              Manage Account
            </li>
          </button>
          <button
            onClick={handleMigrate}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              width: "100%",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                fontSize: "19px",
              }}
            >
              <ExtensionIcon sx={{ margin: "0 15px" }} />
              Migrate Diamonds
            </li>
          </button>
        </ul>
      </Card>
    </div>
  );
};

export default NavigationBar;
