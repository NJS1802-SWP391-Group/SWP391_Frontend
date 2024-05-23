import { Card, Typography } from "@mui/material";

type Props = {
  owner: string;
  code: string;
  phone: string;
  receivedDay: string;
};

const Consulting = ({ owner, code, phone, receivedDay }: Props) => {
  return (
    <Card
      style={{
        backgroundColor: "#D7B746",
        height: "auto",
        margin: "20px 0px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          margin: "15px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography marginLeft={2} fontWeight="bold">
          Owner: {owner}
        </Typography>

        <ul
          style={{
            marginLeft: "16px",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>Code: {code}</li>
          <li>Phone: {phone}</li>
          <li>Received day: {receivedDay}</li>
        </ul>
      </div>
    </Card>
  );
};

export default Consulting;
