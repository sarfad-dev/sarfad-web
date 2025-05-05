'use client';
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false });

export default function Locate() {
	return (
		<>
			<GridBackground>
			</GridBackground>
			<Box height="100vh" width="100vw">
				<Nav />
				<CustomHeading
					heading='Locate'
				/>
			</Box>
			<LiveMap showNavigationButtons showUserLocation/>
		</>
	);
}