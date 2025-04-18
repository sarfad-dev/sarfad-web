import {
	Box,
	Text,
	Grid,
	GridItem,
	Heading,
} from '@chakra-ui/react';
import ImageContent from './ImageContent';

interface Image {
	src: string;
	alt: string;
	captionHeading?: string;
	captionDescription?: string;
	lightBg?: boolean;
	button?: boolean;
	overlayText?: string;
}

interface CarouselProps {
	id: string;
	heading: string;
	images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ heading, images, id }) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" width="100%" id={id}>
			<Box width="100%" maxWidth="90vw">
				<Box textAlign={{ base: 'center', md: 'left' }}>
					<Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="extrabold" mb={4}>
						{heading}
					</Text>
				</Box>

				<Grid
					templateColumns={{ base: '1fr', md: `repeat(${images.length}, 1fr)` }}
					gap={6}
					overflowX="auto"
					pt={6}
				>
					{images.map((image, index) => (
						<GridItem key={index} display="flex" justifyContent="center">
							<ImageContent 
								src={image.src} 
								alt={image.alt} 
								captionHeading={image.captionHeading} 
								captionDescription={image.captionDescription} 
								lightBg={image.lightBg} 
								button={image.button} 
								overlayText={image.overlayText}/>
						</GridItem>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Carousel;
