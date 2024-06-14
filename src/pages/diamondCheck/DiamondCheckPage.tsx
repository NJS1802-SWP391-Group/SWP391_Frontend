import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/diamondCheck/HeroSection";
import DetailSection from "../../components/diamondCheck/DetailSection";

const DiamondCheckPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <DetailSection />
      <Footer />
    </React.Fragment>
  );
};

export default DiamondCheckPage;
