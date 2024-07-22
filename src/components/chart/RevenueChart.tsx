import Chart, { ChartTypeRegistry } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface LineChartProps {
  data: number[] | undefined;
  labels: string[] | undefined;
  total: number | undefined;
}

const RevenueChart: React.FC<LineChartProps> = ({ data, labels, total }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<
    keyof ChartTypeRegistry,
    any,
    any
  > | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: `Revenue Total: ${total}`,
                data: data,
                borderColor: "  #8A2BE2",
                backgroundColor: "rgba(255, 228, 181, 1)",
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} style={{ width: "200px", height: "100px" }} />;
};

export default RevenueChart;
