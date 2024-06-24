import React, { useEffect, useState } from "react";
import DiavanLogo from "../../assets/Diavan.png";
import "./OrderDetail.css";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import Loading from "../Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderResponse } from "../../interfaces/order/orderResponse";
import orderApi from "../../services/orderApi";
import SuccessfullAlert from "../SuccessfullAlert";
import BackButton from "../BackButton";
import orderDetailApi from "../../services/orderDetailApi";
import { DetailValuation } from "../../interfaces/order/orderInterface";
import { UpdateOrderDetail } from "../../interfaces/orderDetail/OrderDetailInterface";
import accountApi from "../../services/accountApi";
import { AccountInfo } from "../../interfaces/account/AccountInterface";

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

const RecepitBill: React.FC = () => {
  const [service, setService] = React.useState("");
  const [selectedServiceId, setSelectedServiceId] = useState<number>(0);
  const [inputEstimateLength, setInputEstimateLength] = useState<number>(0);
  const [payment, setPayment] = useState("cash");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [editingId, setEditingId] = useState<number>();
  const [editService, setEditService] = useState("");
  const [editServiceId, setEditServiceId] = useState<number>();
  const [editEstimateLength, setEditEstimateLength] = useState<number>();

  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const location = useLocation();
  const data: OrderResponse = location.state;
  // console.log("Data: ", data);
  const [fetchData, setFetchData] = useState<OrderResponse>(data);

  const [accountInfo, setAccountInfo] = useState<AccountInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const accountInfo: any = await accountApi.getAccountInfo();
      setAccountInfo(accountInfo);
      setFetchData(data);
    };
    fetchData();
  }, [accountInfo?.result.user.userName, data]);

  const handleServiceChange = (event: SelectChangeEvent) => {
    setService(event.target.value as string);
    switch (event.target.value as string) {
      case "Standard Valuation":
        setSelectedServiceId(1);
        break;
      case "Quick Valuation 48h":
        setSelectedServiceId(2);
        break;
      case "Quick Valuation 24h":
        setSelectedServiceId(3);
        break;
      case "Quick Valuation 6h":
        setSelectedServiceId(4);
        break;
    }
  };

  const handleEstimateLengthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const length = parseFloat(e.target.value);
    setInputEstimateLength(length);
  };

  const handleAddButtonClick = () => {
    const data: DetailValuation = {
      serviceId: selectedServiceId,
      estimateLength: inputEstimateLength,
    };
    orderDetailApi.createOrderDetail(data, fetchData.orderID).then(
      (response: any) => {
        console.log("Create Order Detail: ", response);
        setFetchData(response);
      },
      (error) => {
        console.log("Error Create Order Detail", error);
      }
    );

    setService("");
    setInputEstimateLength(0);
  };

  const onClickDelete = (orderDetailId: number) => {
    const confirmDelete = confirm(
      `Do you want delte order detail ${orderDetailId}`
    );
    if (confirmDelete) {
      orderDetailApi.deleteByOrderDetailId(orderDetailId).then(
        (response: any) => {
          console.log("Delete response:", response);
          setFetchData(response);
        },
        (error) => {
          console.log("Delete error:", error);
        }
      );
    }
  };

  const handleEdit = (orderDetailId: number) => {
    const detailValuations = fetchData.detailValuations;
    const initDetailValuations = detailValuations.find(
      (data) => data.orderDetailId == orderDetailId
    );
    if (initDetailValuations) {
      setEditingId(orderDetailId);
    }
  };

  const handleEditServiceChange = (event: SelectChangeEvent) => {
    setEditService(event.target.value as string);
    switch (event.target.value as string) {
      case "Standard Valuation":
        setEditServiceId(1);
        break;
      case "Quick Valuation 48h":
        setEditServiceId(2);
        break;
      case "Quick Valuation 24h":
        setEditServiceId(3);
        break;
      case "Quick Valuation 6h":
        setEditServiceId(4);
        break;
    }
  };

  const handleEditEstimateLength = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditEstimateLength(parseFloat(event.target.value));
  };

  const handleSave = (
    orderDetailId: number,
    estimateLength: number | undefined,
    serviceId: number | undefined
  ) => {
    const saveData: UpdateOrderDetail = {
      orderDetailId: orderDetailId,
      estimateLength: estimateLength,
      serviceId: serviceId,
    };
    console.log("Save data", saveData);
    orderDetailApi.updateOrderDetail(saveData).then(
      (response: any) => {
        console.log("Update response: ", response);
        setFetchData(response);
      },
      (error) => {
        console.log("Error update:", error);
      }
    );
    setEditingId(0);
    setEditService("");
    setEditEstimateLength(undefined);
  };

  const onSubmitPrintBill = () => {
    const orderId = fetchData.orderID;
    orderApi.pay(orderId, payment).then(
      (response: any) => {
        console.log("Response", response);
        setShowAlert(true);
        setTimeout(() => {
          navigate("/consulting-page");
        }, 4000);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      {fetchData == undefined ? (
        <Card sx={{ margin: "20px 0", padding: "10px 5%" }}>
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
            <Typography variant="overline">
              Click "Detail" button and click "Submit" to view all information
            </Typography>
          </div>
          <Loading />
        </Card>
      ) : (
        <Card sx={{ margin: "20px 0", padding: "0 5%" }}>
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
              Order Code: {fetchData.code}
              <br />
              Customer name: {fetchData.firstName + " "} {fetchData.lastName}
              <br />
              Consulting staff: {accountInfo?.result.user.userName}
              <br />
              Date Created: {fetchData.time}
            </div>
            <Divider />
            <div className="receipt-bill-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">
                        Order detail code
                      </StyledTableCell>
                      <StyledTableCell align="center">Service</StyledTableCell>
                      <StyledTableCell align="center">
                        Estimate Length(mm)
                      </StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="center">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Service
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={service}
                          label="Service"
                          onChange={handleServiceChange}
                        >
                          <MenuItem value={"Standard Valuation"}>
                            Standard Valuation
                          </MenuItem>
                          <MenuItem value={"Quick Valuation 48h"}>
                            Quick Valuation 48h
                          </MenuItem>
                          <MenuItem value={"Quick Valuation 24h"}>
                            Quick Valuation 24h
                          </MenuItem>
                          <MenuItem value={"Quick Valuation 6h"}>
                            Quick Valuation 6h
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <input
                        style={{ padding: "20px 20px", margin: "0 30px" }}
                        type="number"
                        step="0.1"
                        value={inputEstimateLength}
                        onChange={handleEstimateLengthChange}
                        min={0}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        onClick={handleAddButtonClick}
                        variant="contained"
                      >
                        Add
                      </Button>
                    </StyledTableCell>
                    {fetchData.detailValuations.map((item) => (
                      <StyledTableRow key={item.orderDetailId}>
                        <StyledTableCell align="left">
                          {item.code}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {editingId === item.orderDetailId ? (
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Service
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={
                                  editService ? editService : item.serviceName
                                }
                                label="Service"
                                onChange={handleEditServiceChange}
                              >
                                <MenuItem value={"Standard Valuation"}>
                                  Standard Valuation
                                </MenuItem>
                                <MenuItem value={"Quick Valuation 48h"}>
                                  Quick Valuation 48h
                                </MenuItem>
                                <MenuItem value={"Quick Valuation 24h"}>
                                  Quick Valuation 24h
                                </MenuItem>
                                <MenuItem value={"Quick Valuation 6h"}>
                                  Quick Valuation 6h
                                </MenuItem>
                              </Select>
                            </FormControl>
                          ) : (
                            item.serviceName
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {editingId === item.orderDetailId ? (
                            <input
                              style={{
                                padding: "20px 20px",
                                margin: "0 30px",
                              }}
                              type="number"
                              step="0.1"
                              value={
                                editEstimateLength
                                  ? editEstimateLength
                                  : item.estimateLength
                              }
                              onChange={handleEditEstimateLength}
                              min={0}
                            />
                          ) : (
                            item.estimateLength
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {editingId === item.orderDetailId ? (
                            <div></div>
                          ) : (
                            item.price
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {editingId === item.orderDetailId ? (
                            <div>
                              <Button
                                disabled={
                                  editService && editEstimateLength
                                    ? false
                                    : true
                                }
                                onClick={() => {
                                  handleSave(
                                    item.orderDetailId,
                                    editEstimateLength,
                                    editServiceId
                                  );
                                }}
                                color="primary"
                                variant="contained"
                              >
                                Save
                              </Button>
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  setEditingId(0);
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button
                              onClick={() => {
                                handleEdit(item.orderDetailId);
                              }}
                              color="primary"
                              variant="contained"
                            >
                              Edit
                            </Button>
                          )}

                          <Button
                            color="error"
                            variant="contained"
                            sx={{ marginLeft: "5px" }}
                            onClick={() => {
                              onClickDelete(item.orderDetailId);
                            }}
                          >
                            Delete
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Divider />
            <Box
              sx={{
                padding: "20px 6%",
                width: "30%",
                margin: "20px 0",
                backgroundColor: "#4F46E5",
                borderRadius: "25px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "white" }}
                variant="h5"
                textAlign={"center"}
              >
                Total Price: {fetchData.totalPay} $
              </Typography>
            </Box>

            <div className="receipt-bill-payment">
              <FormControl>
                <FormLabel id="radio-payment">Payment</FormLabel>
                <RadioGroup row value={payment} onChange={handleChangePayment}>
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="momo"
                    control={<Radio />}
                    label="Momo"
                  />
                  <FormControlLabel
                    value="banking"
                    control={<Radio />}
                    label="Banking"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />

            <Typography textAlign={"center"} fontStyle={"italic"} margin=" 0">
              Thank you! See you next time
            </Typography>
            {showAlert && (
              <div>
                <SuccessfullAlert message="Successfully print bill, you will back Order List Page" />
                <Loading />
              </div>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                margin: "15px 0",
              }}
            >
              <BackButton />
              <Button
                variant="contained"
                onClick={onSubmitPrintBill}
                disabled={fetchData.totalPay == 0 || editingId ? true : false}
                sx={{
                  backgroundColor: "#4F46E5",
                  borderRadius: "25px",
                }}
              >
                Print bill
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RecepitBill;
