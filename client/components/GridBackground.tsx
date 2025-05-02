'use client';
import { Box } from '@chakra-ui/react';

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
			backgroundImage="linear-gradient(#111111 1px, transparent 1px), linear-gradient(to right, #111111 1px, transparent 1px)"
			backgroundSize="5rem 3rem"
			opacity={0.1}
			overflow="hidden"
			sx={{
				WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
				maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
			}}
		/>
	);
};

export default GridBackground;
