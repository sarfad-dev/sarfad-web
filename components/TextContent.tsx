import {
	Box,
	Text,
	Grid,
	GridItem,
	Button,
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

const TextContent: React.FC<TextContentProps> = ({
	heading,
	description,
	image,
	imageSrc,
	imageAlt,
	imageCaption,
	button,
	buttonText,
}) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" width="100%">
			<Grid
				templateColumns={{ base: '1fr', sm: '2fr', md: '1.5fr 1fr' }}
				gap={8}
				alignItems="center"
				justifyItems="center"
				width="100%"
				maxWidth="90vw"
			>
				<GridItem colSpan={1} width="80%">
					<Box textAlign="left">
						<Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="extrabold" mb={4}>
							{heading}
						</Text>
						<Text fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
							{description}
						</Text>
						{button && (
							<Box display={{ base: 'flex', md: 'block' }} justifyContent="center">
								<Button
									bg="black"
									color="white"
									_hover={{ bg: '#301934' }}
									borderRadius="md"
									mt={4}
								>
									{buttonText}
								</Button>
							</Box>
						)}
					</Box>
				</GridItem>

				{image && (
					<GridItem colSpan={1} width="100%" display="flex" justifyContent="center">
						<ImageContent src={imageSrc} alt={imageAlt} caption={imageCaption} />
					</GridItem>
				)}
			</Grid>
		</Box>

	);
};

export default TextContent;
