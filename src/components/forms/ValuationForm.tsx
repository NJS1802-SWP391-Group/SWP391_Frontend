import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

const textFieldStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const ValuationForm = () => {
  const [service, setService] = React.useState("");

  const handleServiceChange = (event: SelectChangeEvent) => {
    setService(event.target.value);
  };
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <form>
        <label
          style={{
            fontWeight: "bold",
            fontSize: "40px",
            margin: "70px",
          }}
        >
          Contact Form
        </label>
        <p style={{ fontWeight: "lighter" }}>
          Please fill in the information. We will contact you soon
        </p>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Firstname"></TextField>
        </div>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Lastname"></TextField>
        </div>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Email"></TextField>
        </div>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Phone number"></TextField>
        </div>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Address"></TextField>
        </div>
        <div style={textFieldStyle}>
          <TextField fullWidth label="Quantity"></TextField>
        </div>
        <div style={textFieldStyle}>
          <FormControl fullWidth>
            <InputLabel id="Service-select">Service</InputLabel>
            <Select
              id="Service-select"
              value={service}
              label="Service"
              onChange={handleServiceChange}
            >
              <MenuItem value={0}>
                <em>Standard</em>
              </MenuItem>
              <MenuItem value={1}>5h</MenuItem>
              <MenuItem value={2}>24h</MenuItem>
              <MenuItem value={3}>48h</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={textFieldStyle}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#806B1F",
              borderRadius: "30px",
              width: "30%",
              height: "40px",
            }}
          >
            Send
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ValuationForm;
