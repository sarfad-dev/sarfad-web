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
						<ChartDashboard type="temperature" label="Teplota (°C)" color="tomato" />
						<ChartDashboard type="humidity" label="Vlhkost (%)" color="royalblue" />
						<ChartDashboard type="pressure" label="Tlak (hPa)" color="orange" />
						<ChartDashboard type="battery" label="Odhadovaná kapacita baterie (%)" color="green" />
						<ChartDashboard type="altitudecalc" label="Vypočítaná nadmořská výška z tlaku (m)" color="blue" />
						<ChartDashboard type="altitude" label="Nadmořská výška (m)" color="purple"/>
						<ChartDashboard type="current" label="Odebíraný proud (A)" color="yellow" />
						<ChartDashboard type="voltage" label="Napětí baterie (V)" color="pink" />
					</SimpleGrid>
					<Box p={5}></Box>
					<LiveMap />
				</Box>
			</Box>
			<ScrollUpButton />
		</>
	);
}
