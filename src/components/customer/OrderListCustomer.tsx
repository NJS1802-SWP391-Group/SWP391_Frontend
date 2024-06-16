import {
  Accordion,
  AccordionDetails,
  AccordionSlots,
  AccordionSummary,
  Card,
  Fade,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { OrderListCustomerInterface } from "../../interfaces/order/orderListCustomer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductionQuantityLimits from "@mui/icons-material/ProductionQuantityLimits";
import DiamondLogo from "../../assets/—Pngtree—jewellery stone diamond stone_14572102.png";
import PriceChangeOutlined from "@mui/icons-material/PriceChangeOutlined";
import QrCode from "@mui/icons-material/QrCode";
import SortIcon from "@mui/icons-material/Sort";

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

  const handleExpansion = (orderID: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [orderID]: !prevExpanded[orderID],
    }));
  };
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
                      <img src={DiamondLogo} width={120} height={120} />
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
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </Card>
        ))}
    </div>
  );
};

export default OrderListCustomer;
