import { Card, Divider } from "@mui/material";
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
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ManageAccountsIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Account
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>250</p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListAltIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Order
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>250</p>
          </div>
        </Card>
        <Card
          sx={{
            padding: "10px 250px 30px 100px",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "#f5f9fa",
            width: "20%",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              borderRadius: "100px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaceRetouchingNaturalIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                padding: 5,
                borderRadius: "10px",
                gap: 3,
              }}
            >
              Customer
            </p>
            <p style={{ fontSize: "30px", color: "black" }}>250</p>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default AdminSection;
