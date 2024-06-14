import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import React from "react";
import DiamondLogo from "../../assets/—Pngtree—jewellery stone diamond stone_14572102.png";
import { Button, Card, Divider } from "@mui/material";

const OrderListCustomer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div>
      {/* Map thông tin ở đây */}
      <Card>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade as AccordionSlots["transition"] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ color: "green" }} variant="h5">
              Processing
            </Typography>

            <div style={{ alignContent: "center", margin: "0 20px" }}>
              <Typography>Order Code:</Typography>
              <Typography>Quantity:</Typography>
              <Typography>Price:</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%", display: "flex", padding: "10px 5%" }}>
              <span>
                <img src={DiamondLogo} width={120} height={120} />
              </span>
              <div style={{ alignContent: "center" }}>
                <Typography>Order Detail Code:</Typography>
                <Typography>Service Name:</Typography>
                <Typography>Estimate Length:</Typography>
                <Typography>Service Price:</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

export default OrderListCustomer;
