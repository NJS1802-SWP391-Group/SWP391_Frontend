import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

const DiamondPriceChart = styled("img")({
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  width: "100%",
  objectFit: "cover",
});
const DetailSection = () => {
  return (
    <Box sx={{ bgcolor: "white", py: 16 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          color="indigo.600"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          StoneAlgo
        </Typography>
        <Typography
          variant="h3"
          color="textPrimary"
          sx={{ mt: 2, mb: 8, fontWeight: "bold" }}
        >
          GIA Price &amp; Quality Check
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={6}>
            <DiamondPriceChart
              src="https://stonealgo-3.b-cdn.net/static/dist/img/hs_price_chart.webp"
              alt="Diamond Price Chart"
            />
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ display: "flex", alignItems: "center", mt: 3 }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 1,
                  color: "gray.400",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              StoneAlgo GIA Check Page
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="body1" color="textPrimary" sx={{ mb: 5 }}>
              Use our GIA Check tool to automatically verify the Fair Price, Cut
              Score, and Visual Carat size of any GIA certified loose diamond.
              Simply enter the GIA report number (found on the diamond’s GIA
              Certificate) and you’ll receive custom analysis of your diamond.
              We’ll also run a diamond certificate check on the GIA’s website
              and show you all of the details on your diamond to help ensure you
              have all of the info you need in one place.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Diamond Price Estimates
            </Typography>
            <Typography variant="body1" color="textPrimary">
              StoneAlgo’s Fair Price estimates are the most advanced in the
              diamond industry, providing shoppers with more confidence and a
              better understanding of any GIA certified diamond’s fair value.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Diamond Deal Ratings
            </Typography>
            <Typography variant="body1" color="textPrimary">
              We rate every diamond based on its Fair Price estimate to help you
              better understand if it’s truly a great deal. StoneAlgo indexes
              over 2,000,000 diamond prices daily to ensure these deal ratings
              are fair and accurate.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Cut Score
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Available only for round diamonds, our cut score takes diamond cut
              grades to the next level. While the GIA, AGS, IGI, EGL, and other
              grading agencies each have their own unique grading systems,
              StoneAlgo’s cut score is an unbiased and far more precise
              indicator of a diamond’s light performance. Go beyond “Excellent
              vs. Ideal Cut diamonds” and find a nearly perfect 9.0+ Cut Score
              to ensure your diamond sparkles like crazy. Read more about our{" "}
              <a style={{ textDecoration: "none", color: "#1a73e8" }}>
                Diamond Cut Score
              </a>
              .
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Diamond Price Charts
            </Typography>
            <Typography variant="body1" color="textPrimary">
              StoneAlgo shows live diamond price charts for every diamond we
              have ever had in our database, showing the price that diamond was
              listed for at the jewelers we work with. If we haven’t seen the
              diamond, we’ll show you the average price of similar diamonds
              we’ve tracked in our database historically.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Diamond Price Alerts
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Never miss a diamond price change with our custom price alerts.
              Simply click on the bell icon or the diamond price chart to set a
              diamond price alert and we’ll e-mail you if the diamond drops
              below your price point.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Add To Vault
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Bookmark any diamond to add it to your vault so you can easily add
              notes, track prices, and manage your favorite diamonds. Easily run
              GIA certificate verifications from your custom Vault dashboard to
              see a GIA Check anytime.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Diamond Color and Fluorescence Combinations
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Certain diamond color grades pair well with faint or medium
              fluorescence and our experts will let you know if your diamond
              exhibits the perfect combination of color and fluorescence grade.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Search Similar Diamonds
            </Typography>
            <Typography variant="body1" color="textPrimary">
              If we can’t find your diamond in our database our diamond search
              engine will automatically scan the market and generate a
              customized search so you can see the best prices on diamonds like
              yours.
            </Typography>
            <Typography variant="h5" color="textPrimary" sx={{ mt: 3 }}>
              Real, Expert Advice
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Chat us anytime using the Ask Us button and we’ll give you
              personalized diamond buying advice to make sure you find the
              perfect GIA certified diamond at a fair price. We can assist you
              with a GIA certificate lookup if you’re having any problems or
              answer crazy specific diamond questions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailSection;
