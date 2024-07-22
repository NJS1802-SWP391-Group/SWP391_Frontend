import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Diavan from "../../assets/Diavan.png";
import Img from "../../assets/ClarityImage.png";
import DiamondCer from "../../assets/diamondCertificate.png";
import resultApi from "../../services/resultApi";

type Props = {
  orderDetailId: number | undefined;
};
interface ResultResponse {
  resultId: number;
  isDiamond: boolean;
  code: string;
  origin: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  description: string;
  diamondValue: number;
  status: string;
  orderDetailId: number;
  imageUrls: string[];
}

const MyCertificate = ({ orderDetailId }: Props) => {
  const [result, setResult] = useState<ResultResponse>();

  const getResultByOrderDetailId = async () => {
    const result: any = await resultApi.getResultByOrderDetailId(orderDetailId);
    console.log(result);
    setResult(result);
  };

  useEffect(() => {
    getResultByOrderDetailId();
  }, [orderDetailId]);
  return (
    <Card style={{ padding: "30px 100px", margin: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center", gap: 2 }}>
          DIAVAN Certificate
          <img src={Diavan} alt="" width={60} height={60} />
        </h1>
        <p>Dertermine the accurate value and reim the diamond's actual worth</p>
      </div>
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Card style={{ width: "400px" }}>
          <p
            style={{
              backgroundColor: "#2d5477",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Grading Results
          </p>
          <ul style={{ listStyle: "none", padding: 10 }}>
            <li>Carat Weight: {result?.carat}</li>
            <li>Color Grade: {result?.color}</li>
            <li>Clarity Grade: {result?.clarity}</li>
            <li>Cut Grade: {result?.cutGrade}</li>
          </ul>
        </Card>
        <Card style={{ width: "400px" }}>
          <p
            style={{
              backgroundColor: "#2d5477",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Additional Grading Information
          </p>
          <ul style={{ listStyle: "none", padding: 10 }}>
            <li>Polish: {result?.polish}</li>
            <li>Symmetry: {result?.symmetry}</li>
            <li>Fluorescence: {result?.fluorescence}</li>
          </ul>
        </Card>
        <Card style={{ width: "400px" }}>
          <p
            style={{
              backgroundColor: "#2d5477",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Report Details
          </p>
          <ul style={{ listStyle: "none", padding: 10 }}>
            <li>Report Number: {result?.code}</li>
            <li>Shape: {result?.shape}</li>
          </ul>
        </Card>
      </div>
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "500px" }}>
          <p
            style={{
              backgroundColor: "#2d5477",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Proportions
          </p>
          <img src={result?.imageUrls[0]} alt="" width={300} height={300} />
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={DiamondCer} alt="" width={60} height={60} />
          <p style={{ fontSize: "40px", color: "#F9A602" }}>
            {result?.diamondValue} $
          </p>
        </div>
        <Card style={{ width: "500px" }}>
          <p
            style={{
              backgroundColor: "#2d5477",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Clarity Characteristic
          </p>
          <img src={result?.imageUrls[1]} alt="" width={300} height={300} />
        </Card>
      </div>
    </Card>
  );
};

export default MyCertificate;
