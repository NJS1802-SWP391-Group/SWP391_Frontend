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
  Menu,
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
  styled,
  tableCellClasses,
} from "@mui/material";
import orderApi from "../../services/orderApi";
import { formatDate } from "../../utils/utils";
import { OrderResponse } from "../../interfaces/order/orderResponse";

import { useNavigate } from "react-router-dom";
import accountApi from "../../services/accountApi";
import { AccountInfo } from "../../interfaces/account/AccountInterface";

type Props = {
  order: OrderInterface | null;
  closeModal: () => void;
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

// interface OrderContextType {
//   responseOrder?: OrderResponse;
//   setResponseOrder: (order: OrderResponse) => void;
// }

// export const OrderContext = createContext<OrderContextType | undefined>(
//   undefined
// );

function OrderDetail({ order, closeModal }: Props) {
  const [detailValuations, setDetailValuations] = useState<DetailValuation[]>(
    []
  );
  const [selectedServiceId, setSelectedServiceId] = useState<number>(0);
  const [inputEstimateLength, setInputEstimateLength] = useState<number>(0);
  const [responseOrder, setResponseOrder] = useState<OrderResponse>();
  const navigate = useNavigate();
  const [service, setService] = React.useState("");
  const [accountInfo, setAccountInfo] = useState<AccountInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const accountInfo: any = await accountApi.getAccountInfo();
      setAccountInfo(accountInfo);
    };
    fetchData();
  }, [accountInfo]);

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

  console.log("Service:", service);

  const handleEstimateLengthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const length = parseFloat(e.target.value);
    setInputEstimateLength(length);
  };

  const handleAddButtonClick = () => {
    const updatedDetailValuations = [...detailValuations];
    updatedDetailValuations.push({
      serviceId: selectedServiceId,
      estimateLength: inputEstimateLength,
    });
    setDetailValuations(updatedDetailValuations);
    setService("");
    setInputEstimateLength(0);
  };
  console.log("DetailValuaitons: ", detailValuations);

  const orderRequest: OrderRequest = {
    orderID: order?.orderID,
    consultingStaffName: "Vo Mong Luan",
    time: formatDate(new Date()),
    detailValuations: detailValuations,
  };

  const sendOrderRequets = () => {
    const data = orderRequest;
    orderApi.sendRequest(data).then(
      (response: any) => {
        setResponseOrder(response.data);
        // console.log(response);
        navigate(`/receipt-bill/${data.orderID}`, {
          state: response,
        });
      },
      (error) => {
        console.log(error);
      }
    );

    closeModal();
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
              Customer name: {order.firstName + " " + order.lastName} <br />
              Consulting staff:{" "}
              {accountInfo ? accountInfo.result.user.userName : 123}
              <br />
              Date Created: {order.time.toString()}
            </div>
            <Divider />
            <div className="receipt-bill-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Service</StyledTableCell>
                      <StyledTableCell align="center">
                        Estimate Length (mm)
                      </StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
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
                          style={{ padding: "20px 20px" }}
                          type="number"
                          step="0.1"
                          value={inputEstimateLength}
                          onChange={handleEstimateLengthChange}
                          min={0}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          onClick={handleAddButtonClick}
                          variant="contained"
                        >
                          Add
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>

                    {detailValuations.map((item) => (
                      <StyledTableRow>
                        <StyledTableCell align="center">
                          {item.serviceId == 1 && "Standard Valuation"}
                          {item.serviceId == 2 && "Quick Valuation 48h"}
                          {item.serviceId == 3 && "Quick Valuation 24h"}
                          {item.serviceId == 4 && "Quick Valuation 6h"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.estimateLength}
                        </StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                      </StyledTableRow>
                    ))}
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
      {/* <OrderContext.Provider value={contextValue}>
        <RecepitBill />
      </OrderContext.Provider> */}
    </div>
  );
}

export default OrderDetail;
