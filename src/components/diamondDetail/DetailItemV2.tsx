import { Box } from "@mui/material";
interface DetailItemV2Props {
  title: string;
  value: string | number;
}
const DetailItemV2 = ({ title, value }: DetailItemV2Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 1,
      }}
    >
      <Box sx={{ color: "gray" }}>{title}</Box>
      <Box sx={{ fontWeight: 600 }}>{value}</Box>
    </Box>
  );
};

export default DetailItemV2;
