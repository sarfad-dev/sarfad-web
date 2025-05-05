'use client';

import Nav from '@/components/Navbar';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ChartDashboard from '@/components/ChartDashboard';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import ScrollUpButton from '@/components/scrollUpButton';

export default function LiveWeb() {
	return (
		<>
			<GridBackground>
			</GridBackground>
			<Box height="100vh" width="100vw">
				<Nav />
				<CustomHeading
					heading='Live web'
				/>
			</Box>
			<Box minHeight="100vh" width="100vw">
				<Nav />
				<Box pt="5rem" minHeight="80vh" width="100vw">
					<Box gap={10} px={{ base: 4, md: 10 }}>
						<SimpleGrid columns={{ base: 1, '2xl': 2 }} spacing={10}>
							<ChartDashboard type="temperature" label="Temperature (°C)" color="tomato" />
							<ChartDashboard type="humidity" label="Humidity (%)" color="royalblue" />
							<ChartDashboard type="uvIndex" label="UV Index" color="orange" />
							<ChartDashboard type="uvIndex" label="UV Index" color="purple" />
							<ChartDashboard type="oxygen" label="Oxygen" color="green" />
							<ChartDashboard type="carbonDioxide" label="Carbon Dioxide" color="pink" />
						</SimpleGrid>
					</Box>
				</Box>
			</Box>
			<ScrollUpButton />
		</>
	);
}
