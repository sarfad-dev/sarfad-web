import {
	Box,
	Text,
	Grid,
	GridItem,
	Button
} from '@chakra-ui/react';
import ImageContent from './ImageContent';

interface TextContentProps {
	heading: string;
	description: string;
	image: boolean;
	imageSrc: string;
	imageAlt: string;
	imageCaption?: string;
	button: boolean;
	buttonText: string;
}

const TextContent: React.FC<TextContentProps> = ({ heading, description, image, imageSrc, imageAlt, imageCaption, button, buttonText }) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" height="100%">
			<Grid
				templateColumns={{ base: '1fr', md: image ? '1fr 1fr' : '1fr' }}
				gap={6}
				alignItems="center"
				justifyItems="center"
				width="100%"
				maxWidth="75vw"
			>
				{/* Text Section */}
				<GridItem>
					<Box textAlign="left">
						<Text fontSize="4xl" fontWeight="extrabold" mb={4}>
							{heading}
						</Text>
						<Text fontSize="xl" mb={4}>
							{description}
						</Text>
						{button && (
							<Button
								bg='black'
								color='white'
								_hover={{ bg: '#301934' }}
								borderRadius="md"
							>
								{buttonText}
							</Button>
						)}
					</Box>
				</GridItem>

				{/* Image Section */}
				{image && (
					<GridItem>
						<ImageContent src={imageSrc} alt={imageAlt} caption={imageCaption} />
					</GridItem>
				)}
			</Grid>
		</Box>
	);
};

export default TextContent;
