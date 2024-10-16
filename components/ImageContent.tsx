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
			<Image
				src={src}
				alt={alt}
				objectFit="contain"
				maxWidth="100%"
				height="auto"
				borderRadius={10}
				draggable="false"
				userSelect="none"
			/>
			{caption && (
				<Box
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					width="30rem"
					height="60rem"
					backgroundColor="transparent"
					color="black"
					display="flex"
					justifyContent="start"
					alignItems="start"
					borderRadius="10px"
				>
					<Text textAlign="center" draggable="false" userSelect="none">{caption}</Text>
				</Box>
			)}
		</Box>
	);
};

export default ImageContent;
