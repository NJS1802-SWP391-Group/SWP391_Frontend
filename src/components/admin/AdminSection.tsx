import { Card } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

const AdminSection = () => {
  return (
    <Card sx={{ height: "700px" }}>
      <div
        style={{
          margin: "20px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            padding: "10px 80px 80px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "violet",
              padding: 5,
              borderRadius: "10px",
              gap: 3,
            }}
          >
            <ManageAccountsIcon />
            Account
          </p>
          <p style={{ fontSize: "30px", color: "violet" }}>250</p>
        </Card>
        <Card
          sx={{
            padding: "10px 80px 80px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "violet",
              padding: 5,
              borderRadius: "10px",
              gap: 3,
            }}
          >
            <ListAltIcon />
            Order
          </p>
          <p style={{ fontSize: "30px", color: "violet" }}>250</p>
        </Card>
        <Card
          sx={{
            padding: "10px 80px 80px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "violet",
              padding: 5,
              borderRadius: "10px",
              gap: 3,
            }}
          >
            <FaceRetouchingNaturalIcon />
            Customer
          </p>
          <p style={{ fontSize: "30px", color: "violet" }}>250</p>
        </Card>
      </div>
    </Card>
  );
};

export default AdminSection;
