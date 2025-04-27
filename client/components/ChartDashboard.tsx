import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
  } from "chart.js";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend
  );

interface ChartDashboardProps {
  type: string;
  label: string;
  color?: string;
}

const ChartDashboard = ({ type, label, color = "rgb(75, 192, 192)" }: ChartDashboardProps) => {
  const [dataPoints, setDataPoints] = useState<{ time: string; value: any }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/sensor-data/latest")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          if (!data || !data[type]) return;
          const newPoint = {
            time: new Date().toLocaleTimeString(),
            value: data[type],
          };
          setDataPoints((prev) => [...prev.slice(-20), newPoint]);
        })
        .catch((err) => console.error("Fetch error:", err));
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <h2>Live {label}</h2>
      {dataPoints.length === 0 ? (
        <p>Waiting for data...</p>
      ) : (
        <Line
  data={{
    labels: dataPoints.map((p) => p.time),
    datasets: [
      {
        label,
        data: dataPoints.map((p) => p.value),
        fill: false,
        borderColor: color,
        tension: 0.1,
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
          color: "#e0e0e0", // Legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#cccccc",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      y: {
        ticks: {
          color: "#cccccc",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  }}
/>

      )}
    </div>
  );
};

export default ChartDashboard;
