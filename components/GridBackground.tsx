'use client';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';


const GridBackground = () => {
	return (
		<Box
			position="absolute"
			top="0"
			left="0"
			zIndex="-10"
			height="100vh"
			width="100vw"
			backgroundColor="white"
			backgroundImage="repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 40px), repeating-linear-gradient(#4c4c4c55, #4c4c4c)"
			opacity={0.1}
			overflow="hidden"
		>
		</Box>
	);
};

export default GridBackground;
