'use client'
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GridBackgroundProps {
	children: ReactNode;
}

const GridBackground = ({ children }: GridBackgroundProps) => {
	return (
		<Box
			position="absolute"
			inset="0"
			zIndex="-10"
			height="100vh"
			width="100vw"
			backgroundColor="white"
			backgroundImage="linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)"
			backgroundSize="6rem 3rem"
		>
			{children}
		</Box>
	);
};

export default GridBackground;

