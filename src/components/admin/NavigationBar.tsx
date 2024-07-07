import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Card, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import DiavanLogo from "../../assets/Diavan.png";
import "./NavigationBar.css";
const NavigationBar = () => {
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
          <img src={DiavanLogo} width={80} height={80} />
        </Box>
        <Divider variant="middle" />
        <ul className="list-service">
          <Link to="/admin/service">
            <li>
              <SettingsIcon sx={{ margin: "0 15px" }} />
              Service
            </li>
          </Link>
          <Link to="/admin/serviceDetail">
            <li>
              <SettingsSuggestIcon sx={{ margin: "0 15px" }} />
              Service Detail
            </li>
          </Link>
          <Link to="/admin">
            <li>
              <AccountBoxIcon sx={{ margin: "0 15px" }} />
              Manage Account
            </li>
          </Link>
        </ul>
      </Card>
    </div>
  );
};

export default NavigationBar;
