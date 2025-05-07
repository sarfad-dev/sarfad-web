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
						<ChartDashboard type="temperature" label="Teplota (°C)" color="tomato" yAxisLabel="Teplota (°C)" yAxisMin={10} yAxisMax={50}/>
						<ChartDashboard type="humidity" label="Vlhkost (%)" color="royalblue" yAxisLabel="Vlhkost (%)" yAxisMin={0} yAxisMax={65}/>
						<ChartDashboard type="pressure" label="Atmosférický tlak (hPa)" color="orange" yAxisLabel="Tlak (hPa)" yAxisMin={800} yAxisMax={1100}/>
						<ChartDashboard type="battery" label="Odhadovaná kapacita baterie (%)" color="green" yAxisLabel="Kapacita (%)" yAxisMin={0} yAxisMax={100}/>
						<ChartDashboard type="altitude" label="Nadmořská výška (m)" color="purple" yAxisLabel="Výška (m)" yAxisMin={0} yAxisMax={1000}/>
						<ChartDashboard type="velocity" label="Rychlost CanSatu (m/s)" color="gray" yAxisLabel="Rychlost (m/s)"/>
						<ChartDashboard type="current" label="Odebíraný proud (A)" color="yellow" yAxisLabel="Proud (A)" yAxisMin={0} yAxisMax={2}/>
						<ChartDashboard type="voltage" label="Napětí baterie (V)" color="pink" yAxisLabel="Napětí (V)" yAxisMin={0} yAxisMax={5}/>
						<ChartDashboard type="snr" label="SNR (dB)" color="teal" yAxisLabel="Poměr signálu k šumu (dB)" yAxisMin={-20} yAxisMax={20}/>
						<ChartDashboard type="rssi" label="RSSI (dBm)" color="cyan" yAxisLabel="Síla signálu (dBm)" yAxisMin={-130} yAxisMax={-30}/>
					</SimpleGrid>
					<Box p={5}></Box>
					<LiveMap />
				</Box>
			</Box>
			<ScrollUpButton />
		</>
	);
}
