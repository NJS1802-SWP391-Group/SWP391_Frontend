import React, { useEffect, useState } from "react";
import {
  DetailValuation,
  OrderInterface,
  OrderRequest,
} from "../../interfaces/order/orderInterface";
import Modal from "react-modal";
import DiavanLogo from "../../assets/Diavan.png";
import "./OrderDetail.css";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Service } from "../../interfaces/servicess/Service";
import orderApi from "../../services/orderApi";

type Props = {
  order: OrderInterface | null;
  closeModal: () => void;
  services: Service[];
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const serviceInit = [
  {
    serviceID: 1,
    name: "Standard Valuation",
  },
  {
    serviceID: 2,
    name: "Quick Valuation 48h",
  },
  {
    serviceID: 3,
    name: "Quick Valuation 24h",
  },
  {
    serviceID: 4,
    name: "Quick Valuation 6h",
  },
];

function OrderDetail({ order, closeModal, services }: Props) {
  const [detailValuations, setDetailValuations] = useState<DetailValuation[]>(
    []
  );
  const [service, setService] = useState<{ serviceID: number; name: string }[]>(
    []
  );
  const [sizes, setSizes] = useState<string[]>([]);

  const handleChangeService = (
    event: SelectChangeEvent<{
      serviceID: number;
      name: string;
    }>,
    index: number
  ) => {
    const selectedServiceId = parseInt(event.target.value);
    setService((prevServices) => {
      const updatedServices = [...prevServices];
      updatedServices[index] = {
        serviceID: selectedServiceId,
        name:
          services.find((service) => service.serviceID === selectedServiceId)
            ?.name || "",
      };
      return updatedServices;
    });
  };

  const handleChangeSize = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newSize = event.target.value;
    setSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[index] = newSize;
      return updatedSizes;
    });
  };

  const handleSave = () => {
    setDetailValuations((prevDetailValuations) => [
      ...prevDetailValuations,
      {
        serviceId: service[service.length - 1].serviceID,
        estimateLength: parseFloat(sizes[sizes.length - 1]),
      },
    ]);
  };
  console.log("ServiceId", service);
  console.log("Size", sizes);
  console.log(detailValuations);

  const orderRequest: OrderRequest = {
    orderID: order?.orderID,
    consultingStaffName: "Vo Mong Luan",
    time: new Date(),
    detailValuations: detailValuations,
  };
  console.log(orderRequest.time);

  const sendOrderRequets = () => {
    const data = orderRequest;
    orderApi.sendRequest(data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      {order != null ? (
        <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
          <div style={{ marginTop: "20px" }}>
            <div className="recepit-bill-header">
              <span>
                <img src={DiavanLogo} alt="" width="75px" height="75px"></img>
              </span>
              <div className="receipt-bill-title">
                <h1>Diavan</h1>
                <h2>Receipt bill</h2>
              </div>
            </div>
            <div className="receipt-bill-info">
              Order Code: {order.code} <br />
              Customer name: {order.lastName + " " + order.firstName} <br />
              Consulting staff: <br />
              Date Created: {order.time.toString()}
            </div>
            <Divider />
            <div className="receipt-bill-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">STT</StyledTableCell>
                      <StyledTableCell align="center">Service</StyledTableCell>
                      <StyledTableCell align="center">Size(mm)</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(order.quantity)].map((_, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <FormControl sx={{ minWidth: 120 }} size="small">
                              <InputLabel id={`service-${index}`}>
                                Service
                              </InputLabel>
                              <Select
                                labelId={`service-${index}`}
                                id={`service-${index}`}
                                value={service[index]}
                                label="Service"
                                onChange={(event) => {
                                  const selectedServiceId = parseInt(
                                    event.target.value as string
                                  );
                                  handleChangeService(event, index);
                                  setDetailValuation((prevDetailValuations) => {
                                    const updatedDetailValuations = [
                                      ...prevDetailValuations,
                                    ];
                                    if (
                                      updatedDetailValuations.length <= index
                                    ) {
                                      updatedDetailValuations.push({
                                        serviceId: selectedServiceId,
                                        estimateLength: 0,
                                      });
                                    } else {
                                      updatedDetailValuations[index].serviceId =
                                        selectedServiceId;
                                    }
                                    return updatedDetailValuations;
                                  });
                                }}
                              >
                                {serviceInit.map((item) => {
                                  return (
                                    <MenuItem
                                      key={item.serviceID}
                                      value={item.serviceID}
                                    >
                                      {item.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <TextField
                              value={sizes[index] || ""}
                              onChange={(event) => {
                                const newSize = parseFloat(event.target.value);
                                handleChangeSize(event, index);
                                setDetailValuation((prevDetailValuations) => {
                                  const updatedDetailValuations = [
                                    ...prevDetailValuations,
                                  ];
                                  if (updatedDetailValuations.length <= index) {
                                    updatedDetailValuations.push({
                                      serviceId: 0,
                                      estimateLength: newSize,
                                    });
                                  } else {
                                    updatedDetailValuations[
                                      index
                                    ].estimateLength = newSize;
                                  }
                                  return updatedDetailValuations;
                                });
                              }}
                              id={`size-${index}`}
                              label="Size"
                              variant="outlined"
                              type="text"
                              size="small"
                              InputProps={{
                                inputProps: { min: 0 },
                              }}
                            />
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Button
                              key={index}
                              onClick={handleSave}
                              variant="contained"
                            >
                              Save
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Divider />
            {/* <div className="receipt-bill-payment">
              <FormControl>
                <FormLabel id="radio-payment">Payment</FormLabel>
                <RadioGroup row value={payment} onChange={handleChangePayment}>
                  <FormControlLabel
                    value="direct"
                    control={<Radio />}
                    label="Direct"
                  />
                  <FormControlLabel
                    value="online"
                    control={<Radio />}
                    label="Online"
                  />
                </RadioGroup>
              </FormControl>
            </div> */}
            <div className="receipt-bill-action">
              <Button onClick={closeModal} variant="contained" color="inherit">
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={sendOrderRequets}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default OrderDetail;
