import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface ChartDashboardProps {
  type: string;
  label: string;
  color?: string;
}

const ChartDashboard = ({ type, label, color = 'rgb(75, 192, 192)' }: ChartDashboardProps) => {
  const [dataPoints, setDataPoints] = useState<{ time: string; value: any }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/sensor-data/latest')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch');
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
        .catch((err) => console.error('Fetch error:', err));
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return (
    <Box
      width="100%"
      height="50vh"
      bg="rgba(211, 211, 211, 0.9)"
      p={4}
      borderRadius="lg"
    >
      <Text fontSize="2xl">
        {label}
      </Text>
      {dataPoints.length === 0 ? (
        <Text>Waiting for data...</Text>
      ) : (
        <Line
          data={{
            labels: dataPoints.map((p) => p.time),
            datasets: [
              {
                label,
                data: dataPoints.map((p) => p.value),
                fill: true,
                borderColor: color,
                backgroundColor: 'rgba(211, 211, 211, 0.3)',
                tension: 0.1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: '#333',
                },
              },
            },
            layout: {
              padding: 10,
            },
            scales: {
              x: {
                ticks: {
                  color: '#333',
                },
                grid: {
                  color: 'rgba(211, 211, 211, 0.5)',
                },
              },
              y: {
                ticks: {
                  color: '#333',
                },
                grid: {
                  color: 'rgba(211, 211, 211, 0.5)',
                },
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default ChartDashboard;
