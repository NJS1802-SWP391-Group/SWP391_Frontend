import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";

const ErrorMessage = ({ message }: { message: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        mt: "6px",
        ml: "5px",
      }}
    >
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" fontSize="14px">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
