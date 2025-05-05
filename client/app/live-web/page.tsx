'use client';

import Nav from '@/components/Navbar';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ChartDashboard from '@/components/ChartDashboard';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import ScrollUpButton from '@/components/scrollUpButton';
import dynamic from 'next/dynamic';

const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false });

export default function LiveWeb() {
	return (
		<>
			<GridBackground />
			<Box width="100vw">
				<Nav />
				<CustomHeading heading="Live web" />
				<Box px={{ base: 4, md: 10 }} pt="4" pb="20">
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
						<ChartDashboard type="temperature" label="Temperature (°C)" color="tomato" />
						<ChartDashboard type="humidity" label="Humidity (%)" color="royalblue" />
						<ChartDashboard type="pressure" label="Pressure (hPa)" color="orange" />
					</SimpleGrid>
					<Box p={5}></Box>
					<LiveMap />
				</Box>
			</Box>
			<ScrollUpButton />
		</>
	);
}
