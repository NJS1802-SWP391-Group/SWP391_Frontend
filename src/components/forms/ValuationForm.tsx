import { Alert, AlertTitle, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const textFieldStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const ValuationForm = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs);
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                  fullWidth: true,
                },
              }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              closeOnSelect={true}
            />
          </LocalizationProvider>
        </div>
        <div style={textFieldStyle}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4F46E5",
              borderRadius: "30px",
              width: "30%",
              height: "40px",
              marginBottom: "20px",
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
