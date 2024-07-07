import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Card, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DiavanLogo from "../../assets/Diavan.png";
import "./NavigationBar.css";
const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
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
            onClick={() => navigate("/admin/serviceDetail")}
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
        </ul>
      </Card>
    </div>
  );
};

export default NavigationBar;
