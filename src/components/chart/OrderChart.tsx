import Chart, { ChartTypeRegistry } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface LineChartProps {
  data: number[];
  labels: string[];
}

const OrderChart: React.FC<LineChartProps> = ({ data, labels }) => {
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
                label: "Order",
                data: data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
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

export default OrderChart;
