import React from "react";
import { OrderInterface } from "../../interfaces/order/orderInterface";
import Modal from "react-modal";
import DiavanLogo from "../../assets/Diavan.png";
import "./OrderDetail.css";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
type Props = {
  order: OrderInterface | null;
  closeModal: () => void;
};
function OrderDetail({ order, closeModal }: Props) {
  const [value, setValue] = React.useState("direct");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      {order != null ? (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <div style={{ marginTop: "50px" }}>
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
              Order Code: {order.orderID} <br />
              Customer name: {order.customer} <br />
              Consulting staff: {order.code} <br />
              Date: {order.time.toString()}
            </div>
            <Divider />
            <div className="receipt-bill-service">Table choose service</div>
            <Divider />
            <div className="receipt-bill-payment">
              <FormControl>
                <FormLabel id="radio-payment">Payment</FormLabel>
                <RadioGroup row value={value} onChange={handleChange}>
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
            </div>
            <div className="receipt-bill-action">
              <Button onClick={closeModal} variant="contained" color="inherit">
                Cancel
              </Button>
              <Button variant="contained" color="secondary">
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
