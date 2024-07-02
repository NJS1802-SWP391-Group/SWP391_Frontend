import { Box, Chip } from "@mui/material";
import React from "react";
import { Diamond } from "../../interfaces/diamond/diamondInterface";
import DetailItem from "./DetailItem";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DiamondPriceChart from "./DiamondPriceChart";
import DetailItemV2 from "./DetailItemV2";
import { useNavigate } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DiamondDetailProps {
  diamond: Diamond | null;
}

const DiamondDetail: React.FC<DiamondDetailProps> = ({ diamond }) => {
    const navigate = useNavigate();
  if (!diamond) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
        <Box sx={{ flex: 4 }}>
          <img
            src={diamond.linkImageShape}
            alt="Diamond Shape"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              border: "solid 1px gray",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box sx={{ flex: 5, display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ fontSize: 20, fontWeight: 600 }}>
              GIA ID: {diamond.certificateId}
            </Box>
            <Box>
              <Chip
                label={`${diamond.origin} Diamond`}
                color="success"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box sx={{ fontSize: 28, fontWeight: 600 }}>
          Fair Price Estimate: ${diamond.fairPrice}{" "}
            <span style={{ fontSize: 20, fontWeight: 700, color: "gray" }}>
              USD
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "solid 2px #4f46e5",
              borderRadius: "5px",
              paddingY: 2,
              paddingX: 4,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 3,
                width: "100%",
              }}
            >
              <DetailItem
                title="Fair Price"
                value={`$${diamond.fairPrice}`}
                color="blue"
              />
              <DetailItem
                title="Cut Score"
                value={`${diamond.cutScore}`}
                color="blue"
              />
              <DetailItem
                title="Visual Carat"
                value={`${diamond.carat} ct.`}
                color="blue"
              />
              <DetailItem
                title="Origin"
                value={`${diamond.origin}`}
                color="blue"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "solid 1px gray",
              borderRadius: "5px",
              paddingY: 2,
              paddingX: 4,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 3,
                width: "100%",
              }}
            >
              <DetailItem
                title="Shape"
                value={`${diamond.shape}`}
                color="black"
              />
              <DetailItem
                title="Carat"
                value={`${diamond.carat} ct.`}
                color="black"
              />
              <DetailItem
                title="Color"
                value={`${diamond.color}`}
                color="black"
              />
              <DetailItem
                title="Clarity"
                value={`${diamond.clarity}`}
                color="black"
              />
              <DetailItem
                title="Fluorescence"
                value={`${diamond.fluorescence}`}
                color="black"
              />
              <DetailItem
                title="Symmetry"
                value={`${diamond.symmetry}`}
                color="black"
              />
              <DetailItem
                title="Polish"
                value={`${diamond.polish}`}
                color="black"
              />
              <DetailItem title="Cert. Lab" value={`GIA`} color="black" />
            </Box>
          </Box>
          <Box>
            <button
              style={{
                width: "100%",
                padding: ".75rem 1.5rem",
                backgroundColor: "#4f46e5",
                borderRadius: ".375rem",
                borderColor: "transparent",
                color: "white",
                fontWeight: 500,
                fontSize: "1.25rem",
                transition: "background-color 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3c349f";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#4f46e5";
              }}
              onClick={() => {
                navigate("/diamond-check")
              }}
            >
              Run another check
            </button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ fontWeight: 700, fontSize: 20 }}>Price History</Box>
        <DiamondPriceChart diamondCheckValues={diamond.diamondCheckValues} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Box
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 28,
            color: "#2d5477",
            mb: 4,
          }}
        >
          📋 Diamond Details
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 6,
            width: "100%",
          }}
        >
          <Box>
            <Box
              sx={{
                bgcolor: "#2d5477",
                padding: 1,
                color: "white",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              GIA REPORT DETAILS
            </Box>
            <DetailItemV2 title="Certificate Date" value={diamond.certDate} />
            <DetailItemV2
              title="GIA Report Number"
              value={diamond.certificateId}
            />
            <DetailItemV2 title="Shape" value={diamond.shape} />
            <DetailItemV2 title="Measurements" value={diamond.measurement} />
          </Box>
          <Box>
            <Box
              sx={{
                bgcolor: "#2d5477",
                padding: 1,
                color: "white",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              GRADING RESULTS
            </Box>
            <DetailItemV2 title="Carat Weight" value={diamond.carat} />
            <DetailItemV2 title="Color Grade" value={diamond.color} />
            <DetailItemV2 title="Clarity Grade" value={diamond.clarity} />
            <DetailItemV2 title="Cut Grade" value={diamond.cutGrade} />
            <DetailItemV2 title="Cut Score" value={diamond.cutScore} />
          </Box>
          <Box>
            <Box
              sx={{
                bgcolor: "#2d5477",
                padding: 1,
                color: "white",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ADDITIONAL GRADING INFORMATION
            </Box>
            <DetailItemV2 title="Polish" value={diamond.polish} />
            <DetailItemV2 title="Symmetry" value={diamond.symmetry} />
            <DetailItemV2 title="Fluorescence" value={diamond.fluorescence} />
            <DetailItemV2
              title="Clarity Characteristics
"
              value={diamond.clarityCharacteristic}
            />
            <DetailItemV2
              title="Inscriptions"
              value={`GIA ${diamond.cutScore}`}
            />
            <DetailItemV2 title="Comments" value={diamond.comment} />
          </Box>
          {/* <Box>
            <Box
              sx={{
                bgcolor: "#2d5477",
                padding: 1,
                color: "white",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ADDITIONAL GRADING INFORMATION
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "86%",
                paddingX: 12,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Order Matters: the inclusion listed first is considered by the GIA
              to be the most impactful to the overall clarity grade.
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default DiamondDetail;
