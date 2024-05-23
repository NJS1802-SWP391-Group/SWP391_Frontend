import React from "react";
import { consultingType } from "../../pages/ConsultingStaffPage";
import Consulting from "./Consulting";
import { Container, Typography } from "@mui/material";

type Props = {
  consultingList: consultingType[];
};

const ConsultingList = ({ consultingList }: Props) => {
  return (
    <Container
      style={{
        backgroundColor: "#F3DAA4",
        padding: "20px",
        marginTop: "32px",
        borderRadius: "30px",
      }}
    >
      <Typography
        fontSize={32}
        fontWeight="bold"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Consulting List
      </Typography>
      {consultingList.map((consultings) => {
        return (
          <Consulting
            key={consultings.id}
            owner={consultings.owner}
            code={consultings.code}
            phone={consultings.phone}
            receivedDay={consultings.receivedDay}
          />
        );
      })}
    </Container>
  );
};

export default ConsultingList;
