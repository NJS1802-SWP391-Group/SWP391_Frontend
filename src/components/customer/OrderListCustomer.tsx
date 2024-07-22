import {
  Accordion,
  AccordionDetails,
  AccordionSlots,
  AccordionSummary,
  Card,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { OrderListCustomerInterface } from "../../interfaces/order/orderListCustomer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductionQuantityLimits from "@mui/icons-material/ProductionQuantityLimits";
import DiamondLogo from "../../assets/diamond.png";
import PriceChangeOutlined from "@mui/icons-material/PriceChangeOutlined";
import QrCode from "@mui/icons-material/QrCode";
import SortIcon from "@mui/icons-material/Sort";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MyCertificate from "./MyCertificate";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  orderList: OrderListCustomerInterface[] | undefined;
};

const items_center = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const OrderListCustomer = ({ orderList }: Props) => {
  const [expanded, setExpanded] = useState<{ [orderID: number]: boolean }>({});
  const [chooseOrderDetailId, setChooseOrderDetailId] = useState<number>();
  const [openCertificate, setOpenCertificate] = React.useState(false);

  const handleClose = () => {
    setOpenCertificate(false);
  };

  const getOrderDetailId = (orderDetailId: number) => {
    setChooseOrderDetailId(orderDetailId);
    setOpenCertificate(true);
  };

  const handleExpansion = (orderID: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [orderID]: !prevExpanded[orderID],
    }));
  };
  console.log(chooseOrderDetailId);
  return (
    <div>
      {/* Map thông tin ở đây */}
      {orderList?.length === 0 && (
        <Card
          sx={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            fontSize: "30px",
            color: "black",
            margin: "20px 0",
          }}
        >
          <ProductionQuantityLimits />
          No orders
        </Card>
      )}
      {orderList != undefined &&
        orderList.map((item) => (
          <Card sx={{ margin: "20px 0" }}>
            <Accordion
              expanded={expanded[item.orderID]}
              onChange={() => handleExpansion(item.orderID)}
              slots={{ transition: Fade as AccordionSlots["transition"] }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                "& .MuiAccordionDetails-root": {
                  display: expanded[item.orderID] ? "block" : "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ color: "green", width: "15%" }} variant="h5">
                  {item.status}
                </Typography>

                <div style={{ alignContent: "center", margin: "0 20px" }}>
                  <Typography sx={items_center}>
                    <QrCode sx={{ color: "#4F46E5" }} /> Order Code:{" "}
                    <span style={{ fontWeight: "bold" }}>{item.code}</span>
                  </Typography>
                  <Typography sx={items_center}>
                    <SortIcon sx={{ color: "#4F46E5" }} />
                    Quantity:{" "}
                    <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                  </Typography>
                  <Typography sx={items_center}>
                    <PriceChangeOutlined sx={{ color: "#4F46E5" }} /> Price:{" "}
                    <span style={{ fontWeight: "bold" }}> {item.totalPay}</span>
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {item.detailValuations.map((detail) => (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      padding: "10px 5%",
                    }}
                  >
                    <span>
                      <img src={DiamondLogo} width={64} height={64} />
                    </span>
                    <div style={{ alignContent: "center" }}>
                      <Typography>
                        Order Detail Code:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {detail.code}
                        </span>{" "}
                      </Typography>
                      <Typography>
                        Service Name:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {detail.serviceName}
                        </span>{" "}
                      </Typography>
                      <Typography>
                        Estimate Length:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {detail.estimateLength}
                        </span>{" "}
                      </Typography>
                      <Typography>
                        Service Price:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {detail.price}
                        </span>{" "}
                      </Typography>
                      <Typography>
                        Status:{" "}
                        <span style={{ color: "#4f46e5", fontWeight: "bold" }}>
                          {detail.status}
                        </span>{" "}
                      </Typography>
                      {detail.status === "Certificated" && (
                        <button
                          style={{
                            padding: 10,
                            backgroundColor: "green",
                            color: "white",
                            outline: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => getOrderDetailId(detail.orderDetailId)}
                        >
                          View Certificated
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </Card>
        ))}
      <Dialog
        fullScreen
        open={openCertificate}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your Certificate
            </Typography>
          </Toolbar>
        </AppBar>
        <MyCertificate orderDetailId={chooseOrderDetailId} />
      </Dialog>
    </div>
  );
};

export default OrderListCustomer;
