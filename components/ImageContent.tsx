'use client';

import { 
	Box, 
	Image, 
	Text 
} from '@chakra-ui/react';
interface ImageContentProps {
	src: string;
	alt: string;
	caption?: string;
}

const ImageContent: React.FC<ImageContentProps> = ({ src, alt, caption }) => {
	return (
		<Box position="relative" display="inline-block" maxWidth="100%">
			{/* Image Container */}
			<Image
				src={src}
				alt={alt}
				objectFit="contain"
				maxWidth="100%"
				height="auto"
				borderRadius={10}
			/>

			{/* Caption Overlay */}
			{caption && (
				<Box
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					width="300px"
					height="600px"
					backgroundColor="transparent"
					color="black"
					display="flex"
					justifyContent="start"
					alignItems="start"
					borderRadius="10px"
					padding="10px"
				>
					<Text textAlign="center">{caption}</Text>
				</Box>
			)}
		</Box>
	);
};

export default ImageContent;
