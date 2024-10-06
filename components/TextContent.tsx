import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ImageContent from './ImageContent';

interface TextContentProps {
	heading: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	imageCaption?: string;
}

const TextContent: React.FC<TextContentProps> = ({ heading, description, imageSrc, imageAlt, imageCaption }) => {
	return (
		<Grid
			templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Stacks on small screens, side by side on medium+
			gap={6}
			alignItems="center"
		>
			{/* Text Section */}
			<GridItem>
				<Box>
					<Text fontSize="2xl" fontWeight="bold" mb={4}>
						{heading}
					</Text>
					<Text fontSize="lg">
						{description}
					</Text>
				</Box>
			</GridItem>

			{/* Image Section */}
			<GridItem>
				<ImageContent src={imageSrc} alt={imageAlt} caption={imageCaption} />
			</GridItem>
		</Grid>
	);
};

export default TextContent;
