import { Box, Typography } from "@mui/material";
interface InformationCardProps {
  title: string;
  value: string;
  svgIcon: JSX.Element;
  size: string;
}

const InformationCard = ({
  title,
  value,
  svgIcon,
  size,
}: InformationCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        backgroundColor: size === "large" ? "" : "grey.50",
        px: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          pr: 2,
          fontWeight: 600,
          fontSize: size === "large" ? 18 : 12,
        }}
      >
        {title}
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "-7px",
            right: 0,
            fontWeight: "normal",
          }}
        >
          {svgIcon}
        </Box>
      </Box>
      {size === "small" && (
        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            fontWeight: "medium",
            color: "text.primary",
          }}
        >
          {value}
        </Typography>
      )}
      {size === "large" && (
        <Typography
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "text.primary",
            textAlign: "center",
          }}
        >
          $5,115
        </Typography>
      )}
    </Box>
  );
};

export default InformationCard;
