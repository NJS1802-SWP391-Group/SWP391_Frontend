import React, { useState } from "react";
import "./HomePage.css";
import DiamondBackGround from "../../assets/689047.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <div className="check_diamond">
        Check any diamond's price & quality
        <button>Check your diamond</button>
      </div>
    </div>
  );
};

export default HomePage;
