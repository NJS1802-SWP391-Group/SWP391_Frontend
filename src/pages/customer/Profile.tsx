import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  Avatar,
  Button,
  Card,
  Container,
  IconButton,
  boxClasses,
} from "@mui/material";
import AvatarBoy from "../../assets/boy_12894580.png";
import accountApi from "../../services/accountApi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CakeIcon from "@mui/icons-material/Cake";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
const Profile = () => {
  const [accoutInfo, setAccountInfo] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getProfile: any = await accountApi.getAccountInfo();
      setAccountInfo(getProfile.result.user);
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
            height: "400px",
            margin: "20px 250px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderBottomRightRadius: "45px",
          }}
        >
          <Link to="/">
            <IconButton>
              <ArrowBackIcon />
              Home
            </IconButton>
          </Link>
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
                <p style={{ fontWeight: "bolder" }}>Vo Mong Luan</p>
                <p>luanvmse173594@fpt.eud.vn</p>
              </div>
            </div>
            <div style={{ display: "flex", fontWeight: "bold" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  margin: "10px 10px",
                }}
              >
                <p>
                  <BadgeOutlinedIcon color="success" /> Name:
                </p>
                <p>
                  <CoPresentIcon color="success" /> CCCD:{" "}
                </p>
                <p>
                  <CakeIcon color="success" /> Date of birth:
                </p>
                <p>
                  <ContactPhoneIcon color="success" /> Phone Number:
                </p>
                <p>
                  {" "}
                  <ContactsIcon color="success" /> Address:{" "}
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
