import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import orderApi from "../../services/orderApi";
import { useNavigate } from "react-router-dom";
import accountApi from "../../services/accountApi";
import { useEffect, useState } from "react";
import { AccountInfo } from "../../interfaces/account/AccountInterface";

const textFieldStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

export interface SendRequest {
  customerId: number | undefined;
  time: string;
  quantity: number;
}

const ValuationForm = () => {
  const [account, setAccount] = useState<AccountInfo>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const getAccount = async () => {
      const account: any = await accountApi.getAccountInfo();
      setAccount(account);
    };
    getAccount();
  }, []);

  const handleQuantity = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuantity(e.target.value);
  };

  const handleTime = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTime(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const customerId = localStorage.key(1);
    {
      customerId == null &&
        (navigate("/login"), alert("You must login to send valuation request"));
    }
    const data = new FormData(event.currentTarget);

    console.log("Account:", account?.result.user.customerId);

    const request: SendRequest = {
      customerId: account?.result.user.customerId,
      time: data.get("date") as string,
      quantity: parseInt(data.get("quantity") as string),
    };

    orderApi.valuateRequest(request).then(
      (response) => {
        navigate("/form-result", {
          state: response,
        });
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px 0",
      }}
    >
      <Box
        sx={{
          paddingTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Contact Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="quantity"
            label="Quantity"
            name="quantity"
            autoFocus
            type="number"
            onChange={handleQuantity}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="date"
            type="date"
            id="date"
            label="Date Meeting"
            focused
            onChange={handleTime}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={quantity && time ? false : true}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ValuationForm;
