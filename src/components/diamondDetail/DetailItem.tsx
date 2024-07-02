import { Box, Typography } from "@mui/material";
interface InformationCardProps {
  title: string;
  value: string;
  color: "blue" | "black";
}
const svgIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <path
      d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"
      fill="currentColor"
    ></path>
  </svg>
);
const DetailItem = ({ title, value, color }: InformationCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "grey.50",
      }}
    >
      <Box
        sx={{
          position: "relative",
          fontWeight: 600,
          fontSize: ".75rem",
          color: "gray",
          mb: 0.5,
        }}
      >
        {title}
        {color == "blue" && (
          <Box
            component="span"
            sx={{
              position: "absolute",
              top: "-5px",
              right: "-11px",
              fontWeight: "normal",
            }}
          >
            {svgIcon}
          </Box>
        )}
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "center",
          fontWeight: 600,
          color: color == "blue" ? "#4f46e5" : "black",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default DetailItem;
