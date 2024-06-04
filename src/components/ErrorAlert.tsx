import { Alert, AlertTitle } from "@mui/material";

type Props = {
  message: string;
};

const ErrorAlert = ({ message }: Props) => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default ErrorAlert;
