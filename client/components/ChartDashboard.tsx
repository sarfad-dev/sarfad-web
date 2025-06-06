'use client';

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
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface ChartDashboardProps {
  type: string;
  label: string;
  color?: string;
  yAxisLabel?: string;
  yAxisMin?: number;
  yAxisMax?: number;
  xAxisLabel?: string;
}

const ChartDashboard = ({
  type,
  label,
  color = 'rgb(75, 192, 192)',
  yAxisLabel,
  yAxisMin,
  yAxisMax,
  xAxisLabel = 'Čas',
}: ChartDashboardProps) => {
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
          const now = new Date();
          const formattedTime = now.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          });
          const newPoint = {
            time: formattedTime,
            value: data[type],
          };
          setDataPoints((prev) => [...prev.slice(-20), newPoint]);
        })
        .catch((err) => console.error('Fetch error:', err));
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  const rgbaColor = color.replace('rgb', 'rgba').replace(')', ', 0.2)');

  return (
    <Box
      width="100%"
      height="50vh"
      bg="blackAlpha.100"
      p={4}
      borderRadius="2xl"
      boxShadow="lg"
    >
      <Text fontSize={{ base: "lg", xl: "2xl" }} fontWeight="bold" mb={4} color="gray.700">
        {label}
      </Text>
      {dataPoints.length === 0 ? (
        <Text color="gray.500">Waiting for data...</Text>
      ) : (
        <>
          <Flex align="center" justify="flex-start" gap={2} mb={4} color="gray.600">
            <Icon as={FaInstagram} boxSize={5} />
            <Text fontSize="md" fontWeight="medium">@sarfadofficial</Text>
          </Flex>
          <Line
            data={{
              labels: dataPoints.map((p) => p.time),
              datasets: [
                {
                  label,
                  data: dataPoints.map((p) => p.value),
                  fill: true,
                  borderColor: color,
                  backgroundColor: rgbaColor,
                  tension: 0.3,
                  pointRadius: 3,
                  pointBackgroundColor: color,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  labels: {
                    color: '#2D3748',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                    boxWidth: 20,
                    padding: 15,
                  },
                },
                tooltip: {
                  backgroundColor: '#2D3748',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                },
              },
              layout: {
                padding: {
                  top: 10,
                  bottom: 40,
                  left: 10,
                  right: 10,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: '#4A5568',
                    maxRotation: 25,
                    minRotation: 25,
                    font: {
                      size: 12,
                    },
                    padding: 10,
                  },
                  title: {
                    display: !!xAxisLabel,
                    text: xAxisLabel,
                    color: '#4A5568',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                },
                y: {
                  ticks: {
                    color: '#4A5568',
                    font: {
                      size: 12,
                    },
                  },
                  title: {
                    display: !!yAxisLabel,
                    text: yAxisLabel,
                    color: '#4A5568',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                  min: yAxisMin,
                  max: yAxisMax,
                },
              },
            }}
          />
        </>
      )}
    </Box>
  );
};

export default ChartDashboard;
