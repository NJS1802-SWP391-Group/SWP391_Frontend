import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import serviceApi from "../../services/service";

export interface AllService {
  serviceID: number;
  name: string;
  description: string;
  status: string;
  serviceDetails: ServiceDetail[];
}

export interface ServiceDetail {
  serviceDetailID: number;
  code: string;
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
  status: string;
}

const AboutPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [serviceList, setServiceList] = useState<AllService[]>();
  const today = new Date();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log("first", event);
      setExpanded(isExpanded ? panel : false);
    };

  const fetchService = async () => {
    const services: any = await serviceApi.getAllService();
    setServiceList(services);
  };
  useEffect(() => {
    fetchService();
  }, [serviceList]);
  return (
    <div>
      <Box mb={8}>
        <Navbar />
      </Box>
      <div style={{ padding: "0px 100px", margin: "0 100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 10,
            marginBottom: "30px",
          }}
        >
          <Typography variant="h5" textAlign={"center"} fontWeight={700}>
            Latest service price list today {today.toLocaleDateString("en-Us")}
          </Typography>
          <Typography variant="h5" textAlign={"center"} fontWeight={500}>
            Reference price list of diamonds in centimeters (mm). If you want to
            value your diamonds but don't know the price of Diavan's valuation
            service, please quickly refer to the latest updated price quote
            below.
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            (Currency: USD)
          </Typography>
        </div>

        {serviceList?.map((service) => (
          <Accordion
            expanded={expanded === service.serviceID.toString()}
            onChange={handleChange(service.serviceID.toString())}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {service.name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Click to view detail
              </Typography>
            </AccordionSummary>
            {service.serviceDetails.map((detail) => (
              <AccordionDetails>
                <div
                  style={{
                    padding: "5px 30px",
                    borderRadius: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#4F46E5",
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontWeight: "thin",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {detail.minRange}-{detail.maxRange} mm
                    </span>
                  </Typography>
                  <Typography sx={{ fontSize: "20px", fontWeight: 900 }}>
                    {detail.price} $
                  </Typography>
                </div>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </div>
  );
};

export default AboutPage;
