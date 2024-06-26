import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import diamondApi from "../../services/diamondApi";
import { useNavigate } from "react-router-dom";

const Section = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: -1,
    height: "100%",
    width: "100%",
    background: `radial-gradient(circle at top right, white, transparent)`,
  },
}));

const CheckInputs = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
  },
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const HeroImage = styled("img")({
  width: "100%",
  maxWidth: "260px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
});
const HeroSection = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const checkDiamond = async () => {
    if (value !== "")
      diamondApi.checkDiamond(value).then(
        () => {
          navigate(`/diamond-details/${value}`);
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };
  return (
    <Box>
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Typography
                align="left"
                sx={{
                  fontWeight: 800,
                  mt: 4,
                  fontSize: "2.5rem",
                }}
              >
                Check any diamond's
              </Typography>
              <Typography
                align="left"
                sx={{
                  fontWeight: 800,
                  mt: -2,
                  color: "rgb(129 140 248)",
                  fontSize: "2.5rem",
                }}
              >
                price &amp; quality
              </Typography>
              <Typography
                variant="body2"
                align="left"
                sx={{ mt: 2, color: "gray" }} // Reduced margin top
              >
                Transact with confidence — get fair price, cut score, visual
                carat and more{" "}
                <Box
                  component="span"
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "medium",
                    textDecorationColor: "indigo.400",
                  }}
                >
                  for free
                </Box>
              </Typography>
              <CheckInputs>
                <TextField
                  label="Enter Certificate ID"
                  variant="outlined"
                  fullWidth
                  size="small"
                  onChange={(e) => setValue(e.target.value)}
                  sx={{ flex: 0.65, mr: 2 }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={checkDiamond}
                  sx={{
                    py: 1,
                    flex: 0.25,
                    fontWeight: "bold",
                    fontSize: 12,
                    bgcolor: "#4F46E5",
                  }}
                >
                  Run free check
                </Button>
              </CheckInputs>
              {error && (
                <Box sx={{ color: "red", ml: 2, fontSize: 12, mt: 1 }}>
                  Diamond not found
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HeroImage
                src="https://stonealgo-3.b-cdn.net/static/dist/img/dd_2.webp"
                alt="StoneAlgo diamond produce page example"
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};

export default HeroSection;
