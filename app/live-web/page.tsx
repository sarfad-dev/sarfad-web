'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';

export default function LiveWeb() {
	return (
		<>
			<GridBackground>
			</GridBackground>
			<Box height="100vh" width="100vw">
				<Nav />
				<CustomHeading
					heading='Live web'
					description='WIP'
				/>
			</Box>
		</>
	);
}
