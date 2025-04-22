'use client'
import Nav from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import { Box } from '@chakra-ui/react';
import ChartDashboard from '@/components/ChartDashboard';

export default function LiveWeb() {
	return (
		<>
			<GridBackground>
			</GridBackground>
			<Box height="100vh" width="100vw">
				<Nav />
				<div className="chart-row">
				<ChartDashboard type="temperature" label="Temperature (°C)" color="tomato" />
				<ChartDashboard type="humidity" label="Humidity (%)" color="royalblue" />
			</div>
			<div className="chart-row">
				<ChartDashboard type="uvIndex" label="UV Index" color="orange" />
				<ChartDashboard type="uvIndex" label="UV Index" color="purple" />
			</div>
			<div className="chart-row">
				<ChartDashboard type="oxygen" label="Oxygen" color="green" />
				<ChartDashboard type="carbonDioxide" label="Carbon Dioxide" color="pink" />
			</div>
			</Box>
		</>
	);
}
