import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import serviceApi from "../../services/service";
import serviceDetailApi from "../../services/serviceDetailApi";

const DescriptionCell = ({ value }: { value: string }) => {
  return (
    <Typography variant="body2" whiteSpace="pre-line">
      {value}
    </Typography>
  );
};

export interface ServiceInterface {
  serviceID: number;
  name: string;
  description: string;
  status: string;
}

export interface ServiceDetailInterFace {
  serviceDetailID: number;
  code: string;
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
  status: Status;
  serviceName: string;
}

export enum Status {
  Active = "Active",
}

const AboutPage = () => {
  const [services, setServices] = useState<ServiceInterface[]>([]);
  const [serviceDetails, setServiceDetails] = useState<
    ServiceDetailInterFace[]
  >([]);
  useEffect(() => {
    const fectServices = async () => {
      try {
        const serviceList: any = await serviceApi.getAllService();
        setServices(serviceList);
        const serviceDetailList: any = await serviceDetailApi.getAll();
        setServiceDetails(serviceDetailList);
      } catch (error) {
        console.log(error);
      }
    };
    fectServices();
  }, [services, serviceDetails]);

  return (
    <React.Fragment>
      <Box mb={8}>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "80%", textAlign: "center" }}
        >
          At our company, we offer a range of valuation services to meet your
          needs. Our team of experts uses the latest technology and industry
          best practices to ensure accurate and reliable results.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "80%", textAlign: "center" }}
        >
          Below, you'll find a summary of our service offerings and the key
          details about each option.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <TableContainer
          sx={{
            width: "80%",
            height: "100%",
            border: "1px solid #e0e0e0",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Service Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    {row.serviceID}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <DescriptionCell value={row.description} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "80%", textAlign: "center" }}
        >
          At our company, we offer a range of valuation services to meet your
          needs. Our team of experts uses the latest technology and industry
          best practices to ensure accurate and reliable results.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "80%", textAlign: "center" }}
        >
          Below, you'll find a summary of our service offerings and the key
          details about each option.
        </Typography>
      </Box>
      <Box
        sx={{
          height: 400,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <TableContainer
          sx={{
            width: "80%",
            height: "100%",
            border: "1px solid #e0e0e0",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Service Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Range
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Price per MM
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    border: "1px solid #e0e0e0",
                  }}
                >
                  Extra price per MM
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceDetails.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    {row.code}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    {row.serviceName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <DescriptionCell
                      value={
                        row.maxRange == 0
                          ? `More than ${row.minRange}mm`
                          : row.minRange + "-" + row.maxRange + "mm"
                      }
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <DescriptionCell value={row.price + "$"} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <DescriptionCell value={row.extraPricePerMM + "$"} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={8}>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default AboutPage;
