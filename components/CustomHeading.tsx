import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const CustomHeading: React.FC = () => {
	return (
		<Flex height="50vh" justifyContent="center" alignItems="center" position="relative">
			<Box textAlign="center" mt="20" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
				<Heading as="h1" size="4xl" mb="4">
					SARFAD
				</Heading>
				<Text fontSize="xx-large">CanSat tým</Text>
			</Box>
		</Flex>
	);
};

export default CustomHeading;
