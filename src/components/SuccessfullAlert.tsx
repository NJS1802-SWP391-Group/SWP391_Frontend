import { Alert, AlertTitle } from "@mui/material";

type Props = {
  message: string;
};

const SuccessfullAlert = ({ message }: Props) => {
  return (
    <div>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default SuccessfullAlert;
