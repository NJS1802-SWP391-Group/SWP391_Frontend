import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import serviceApi from '../../services/service';
import serviceDetailApi from '../../services/serviceDetailApi';



const serviceTypeRows = [
  {
    id: 1,
    description:
      '- The time it takes to send for valuation depends on the time of sending.\n- Service price list according to regulations.',
    serviceType: 'Standard Valuation',
  },
  {
    id: 2,
    description:
      '- Inspection time is 48 working hours from the time the product is received.\n- Service price list according to regulations.',
    serviceType: 'Quick Valuation 48h',
  },
  {
    id: 3,
    description:
      '- Inspection time is 24 working hours from the time the product is received.\n- Service price list according to regulations.',
    serviceType: 'Quick Valuation 24h',
  },
  {
    id: 4,
    description:
      '- Inspection time is 4 working hours from the time the product is received.\n- Service price list according to regulations.',
    serviceType: 'Quick Valuation 6h',
  },
];

const serviceDetailRows = [
  {
    id: 'SSR1',
    serviceType: 'Standard Valuation',
    range: '0-3mm',
    price: 20 + '$'
  },
  {
    id: 'SSR2',
    serviceType: 'Standard Valuation',
    range: '3-5mm',
    price: 25 + '$'
  },
  {
    id: 'S48R1',
    serviceType: 'Quick Valuation 48h',
    range: '0-3mm',
    price: 30 + '$'
  },
  {
    id: 'S48R2',
    serviceType: 'Quick Valuation 48h',
    range: '3-5mm',
    price: 35 + '$'
  },
  {
    id: 'S24R1',
    serviceType: 'Quick Valuation 24h',
    range: '0-3mm',
    price: 40 + '$'
  },
  {
    id: 'S24R2',
    serviceType: 'Quick Valuation 24h',
    range: '3-5mm',
    price: 45 + '$'
  },
  {
    id: 'S6R1',
    serviceType: 'Quick Valuation 6h',
    range: '0-3mm',
    price: 50 + '$'
  },
  {
    id: 'S6R2',
    serviceType: 'Quick Valuation 6h',
    range: '0-3mm',
    price: 55 + '$'
  },
];

const DescriptionCell = ({ value }: { value: string }) => {
  return (
    <Typography variant="body2" whiteSpace="pre-line">
      {value}
    </Typography>
  );
};

export interface ServiceInterface {
  serviceID:   number;
  name:        string;
  description: string;
  status:      string;
}

export interface ServiceDetailInterFace {
  serviceDetailID: number;
  code:            string;
  minRange:        number;
  maxRange:        number;
  price:           number;
  extraPricePerMM: number;
  status:          Status;
  serviceName:       string;
}

export enum Status {
  Active = "Active",
}


const AboutPage = () => {
  const [services, setServices] = useState<ServiceInterface[]>([]);
  const [serviceDetails, setServiceDetails] = useState<ServiceDetailInterFace[]>([]);
  useEffect(() => {
    const fectServices = async () => {
      try {
        const serviceList: any = await serviceApi.getAll();
        setServices(serviceList);
        const serviceDetailList: any = await serviceDetailApi.getAll();
        setServiceDetails(serviceDetailList)
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          At our company, we offer a range of valuation services to meet your needs. Our team of experts uses the latest
          technology and industry best practices to ensure accurate and reliable results.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          Below, you'll find a summary of our service offerings and the key details about each option.
        </Typography>
      </Box>
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <TableContainer
          sx={{
            width: '80%',
            height: '100%',
            border: '1px solid #e0e0e0',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  Service Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
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
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    {row.serviceID}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
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
      <Box mt={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          At our company, we offer a range of valuation services to meet your needs. Our team of experts uses the latest
          technology and industry best practices to ensure accurate and reliable results.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '80%', textAlign: 'center' }}>
          Below, you'll find a summary of our service offerings and the key details about each option.
        </Typography>
      </Box>
      <Box
        sx={{
          height: 400,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <TableContainer
          sx={{
            width: '80%',
            height: '100%',
            border: '1px solid #e0e0e0',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  Service Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  Range
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
                  }}
                >
                  Price per MM
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    border: '1px solid #e0e0e0',
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
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    {row.code}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    {row.serviceName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <DescriptionCell value= {row.maxRange == 0 ? `More than ${row.minRange}mm`: row.minRange + "-" + row.maxRange + "mm"} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <DescriptionCell value={row.price + "$"} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      '&:hover': { backgroundColor: 'transparent' },
                      border: '1px solid #e0e0e0',
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