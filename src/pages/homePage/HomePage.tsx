import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Card, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../../assets/2022_LE-GuidetoDiamonds-LP-TILE-1-Desktop 2.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import { useEffect } from "react";
import accountApi from "../../services/accountApi";

const HomePage = () => {
  const listInfor = [
    {
      id: 1,
      title: "Diamond Inventory",
      statistic: "2M+",
    },
    {
      id: 2,
      title: "Happy Shoppers",
      statistic: "1M+",
    },
    {
      id: 3,
      title: "Top-Rated Jewelers",
      statistic: "10+",
    },
    {
      id: 4,
      title: "Historical Diamond Prices",
      statistic: "750M+",
    },
    {
      id: 5,
      title: "Diamond Checks",
      statistic: "5M+",
    },
  ];

  const listFeedback = [
    {
      id: 1,
      title: "Highly Recommend Diavan",
      comment:
        "I am VERY grateful to Diavan for saving me from a would-be terrible purhchase. Highly recommend!",
      author: "- Alex B",
    },
    {
      id: 2,
      title: "Diavan is a Tremedous Resource",
      comment:
        "The cut score was a terrific way to hone in on the bestr candidates when faced with overwhelming number of options availble online.",
      author: "- Ignor G",
    },
    {
      id: 3,
      title: "The Most Beautiful Diamond I've Ever Seen!",
      comment:
        "By using the Divavan calculator, I was able to find the best cut diamond at the best price. My diamond is breathtaking.",
      author: "- Kim V",
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="image-container">
        <img src={Banner} alt="Mô tả ảnh" />
        <div className="overlay-text">
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                D
              </text>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                I
              </text>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                A
              </text>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                V
              </text>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                A
              </text>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
              <text
                x="50%"
                y="60%"
                text-anchor="middle"
                fill="black"
                font-size="24"
                font-weight="bold"
              >
                N
              </text>
            </svg>
          </div>

          <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
            Check any diamond's
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "30px", color: "#07BC97" }}
          >
            price and quality
          </Typography>
          <button>Free check</button>
        </div>
      </div>
      <div className="home-inforamation">
        <ul>
          {listInfor.map((infor) => {
            return (
              <li key={infor.id}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    color: "#05A1BD",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  {infor.statistic}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#2D5477",
                    fontWeight: "bold",
                  }}
                >
                  {infor.title}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>

      <Container className="diavan-help">
        <div className="diavan-help-left">
          <h2>
            How <span className="highlight">Diavan</span> helps you valuate
            better
          </h2>

          <Link to="/contact">
            <button>
              <span className="diamond-icon">
                <DiamondOutlinedIcon
                  sx={{
                    width: "70px",
                    color: "#6366F1",
                    height: "50px",
                  }}
                />
              </span>
              Valuate Now!
            </button>
          </Link>
        </div>

        <div className="home-feedback">
          {listFeedback.map((feedbacks) => {
            return (
              <Card key={feedbacks.id} className="feedback-list">
                <div className="rate">
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                </div>
                <div className="feedback-title">
                  <h2>{feedbacks.title}</h2>
                </div>
                <div className="feedback-comment">{feedbacks.comment}</div>
                <div className="feedback-author">{feedbacks.author}</div>
              </Card>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
