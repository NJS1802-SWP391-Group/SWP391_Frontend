import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BreadCrumb from "../../components/diamondDetail/BreadCrumb";
import { Box } from "@mui/material";
import DiamondDetail from "../../components/diamondDetail/DiamondDetail";
import diamondApi from "../../services/diamondApi";
import { Diamond } from "../../interfaces/diamond/diamondInterface";
import { AxiosResponse } from "axios";

const DiamondCheckDetail = () => {
  const [detail, setDetail] = useState<Diamond | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    if (id) {
      diamondApi.checkDiamond(id).then(
        (response: AxiosResponse<Diamond>) => {
          setDetail(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [id]);

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ paddingX: 20, paddingY: 4 }}>
        <BreadCrumb id={id ?? ""} />
        <DiamondDetail diamond={detail} />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default DiamondCheckDetail;
