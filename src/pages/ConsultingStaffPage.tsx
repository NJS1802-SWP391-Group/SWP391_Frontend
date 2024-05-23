import React from "react";
import ConsultingList from "../components/consulting/ConsultingList";

export type consultingType = {
  id: number;
  owner: string;
  code: string;
  phone: string;
  receivedDay: string;
};

const ConsultingStaffPage = () => {
  const consulting: consultingType[] = [
    {
      id: 1,
      owner: "Le Quang Huy",
      code: "7735748",
      phone: "09234322454",
      receivedDay: "21/10/2023",
    },
    {
      id: 2,
      owner: "Vu Hoang Duy Khanh",
      code: "7735749",
      phone: "09234322476",
      receivedDay: "22/10/2023",
    },
    {
      id: 3,
      owner: "Võ Mông Luân",
      code: "7735750",
      phone: "0931337204",
      receivedDay: "22/10/2023",
    },
    {
      id: 4,
      owner: "Nguyễn Ngọc Gia Bảo",
      code: "7735751",
      phone: "0931337204",
      receivedDay: "25/10/2023",
    },
    {
      id: 4,
      owner: "Nguyễn Ngọc Gia Bảo",
      code: "7735751",
      phone: "0931337204",
      receivedDay: "25/10/2023",
    },
    {
      id: 5,
      owner: "Jack",
      code: "7735752",
      phone: "0931337204",
      receivedDay: "25/10/2023",
    },
    {
      id: 6,
      owner: "J97",
      code: "7735753",
      phone: "0931337204",
      receivedDay: "25/10/2023",
    },
    {
      id: 7,
      owner: "Meomeo",
      code: "7735751",
      phone: "0931337204",
      receivedDay: "25/10/2023",
    },
  ];
  return (
    <div>
      <ConsultingList consultingList={consulting} />
    </div>
  );
};

export default ConsultingStaffPage;
