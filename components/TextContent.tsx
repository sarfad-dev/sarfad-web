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
	halfVisibleImage?: boolean;
	imageSrc: string;
	imageAlt: string;
	imageCaption?: string;
	button: boolean;
	buttonText: string;
	buttonLink?: string;
}

const TextContent: React.FC<TextContentProps> = ({
	heading,
	description,
	image,
	halfVisibleImage,
	imageSrc,
	imageAlt,
	imageCaption,
	button,
	buttonText,
	buttonLink,
}) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" width="100%">
			<Grid
				templateColumns={{ base: '1fr', md: '1.2fr 1fr' }} // Adjust column width ratios
				gap={{ base: 4, md: 8 }}  // Different gaps for mobile and desktop
				alignItems="center"
				justifyItems={{ base: 'center', md: 'start' }}  // Center in mobile, align left in desktop
				width="100%"
				maxWidth="90vw"
			>
				<GridItem colSpan={1} width={{ base: '100%', md: '80%' }}>
					<Box textAlign={{ base: 'center', md: 'left' }}>
						<Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="extrabold" mb={4}>
							{heading}
						</Text>
						<Text fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
							{description}
						</Text>
						{button && (
							<Box display="flex" justifyContent={{ base: 'center', md: 'start' }}>
								<Button
									as="a"
									href={buttonLink}
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
					<GridItem colSpan={1} width={{ base: '90%', md: '100%' }} display="flex" justifyContent="center">
						<ImageContent src={imageSrc} alt={imageAlt} caption={imageCaption} />
					</GridItem>
				)}
			</Grid>
		</Box>

	);
};

export default TextContent;
