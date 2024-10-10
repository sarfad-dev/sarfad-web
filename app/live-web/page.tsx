'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';

export default function LiveWeb() {
	return (
		<>
			<Box height="100vh" width="100vw">
				<Nav />
				<GridBackground>
					<CustomHeading
						heading='Live web'
					/>
				</GridBackground>
			</Box>
		</>
	);
}
