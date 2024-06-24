import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Avatar, Container, IconButton } from "@mui/material";
import AvatarBoy from "../../assets/boy_12894580.png";
import accountApi from "../../services/accountApi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CakeIcon from "@mui/icons-material/Cake";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import HomeIcon from "@mui/icons-material/Home";

interface Profile {
  customerId: number;
  email: string;
  dob: string;
  firstName: string;
  lastName: string;
  cccd: string;
  phoneNumber: string;
  address: string;
  status: string;
  accountId: number;
}

const Profile = () => {
  const [accoutInfo, setAccountInfo] = useState<Profile>();
  useEffect(() => {
    const fetchData = async () => {
      const getProfile: any = await accountApi.getAccountInfo();
      setAccountInfo(getProfile.result.customer);
    };
    fetchData();
  }, []);
  console.log(accoutInfo);
  return (
    <div>
      <Navbar />
      <Container>
        <div
          style={{
            height: "auto",
            padding: "10px 0",
            margin: "20px 250px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderBottomRightRadius: "45px",
          }}
        >
          <Link to="/">
            <IconButton>
              <ArrowBackIcon />
              <HomeIcon />
            </IconButton>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold0",
              fontSize: "30px",
            }}
          >
            <span style={{ color: "green", marginRight: "10px" }}>
              {accoutInfo?.firstName} {accoutInfo?.lastName}'s
            </span>
            Profile
          </div>
          <div style={{ margin: "30px" }}>
            <div
              style={{
                margin: "20px 0",
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarBoy}
                  sx={{ width: "100px", height: "100px" }}
                />
              </IconButton>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                <p style={{ fontWeight: "bolder" }}>
                  {accoutInfo?.firstName} {accoutInfo?.lastName}
                </p>
                <p>{accoutInfo?.email}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontWeight: "bold",
                justifyContent: "center",
                gap: 100,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  margin: "10px 10px",
                }}
              >
                <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <CoPresentIcon color="success" /> CCCD{" "}
                </p>
                <p
                  style={{
                    backgroundColor: "#CEE3E3",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "auto",
                  }}
                >
                  {accoutInfo?.cccd}
                </p>
                <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <CakeIcon color="success" /> Date of birth
                </p>
                <p
                  style={{
                    backgroundColor: "#CEE3E3",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "auto",
                  }}
                >
                  {accoutInfo?.dob}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  margin: "10px 10px",
                }}
              >
                <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <ContactPhoneIcon color="success" /> Phone Number
                </p>
                <p
                  style={{
                    backgroundColor: "#CEE3E3",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "auto",
                  }}
                >
                  {accoutInfo?.phoneNumber}
                </p>
                <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {" "}
                  <ContactsIcon color="success" /> Address{" "}
                </p>
                <p
                  style={{
                    backgroundColor: "#CEE3E3",
                    padding: "5px",
                    borderRadius: "10px",
                    width: "auto",
                  }}
                >
                  {accoutInfo?.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
