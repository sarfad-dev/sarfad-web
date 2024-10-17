'use client';

import {
	Box,
	Image,
	Text,
	Button
} from '@chakra-ui/react';

interface ImageContentProps {
	src: string;
	alt: string;
	captionHeading?: string;
	captionDescription?: string;
	button?: boolean;
	lightBg?: boolean;
}

const ImageContent: React.FC<ImageContentProps> = ({ src, alt, captionHeading, captionDescription, button, lightBg }) => {
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
			{(captionHeading || captionDescription) && (
				<Box
					position="absolute"
					top={{ base: 4, md: 8 }}
					left={{ base: 4, md: 8 }}
					color={lightBg ? "black" : "white"}
					p={2}
				>
					{captionHeading && (
						<Text fontSize={{ base: "xl", md: "2xl" }}>
							{captionHeading}
						</Text>
					)}
					{captionDescription && (
						<Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
							{captionDescription}
						</Text>
					)}
				</Box>
			)}
			{button && (
				<Button
					position="absolute"
					bottom={{ base: 2, md: 4 }}
					right={{ base: 2, md: 4 }}
					borderRadius="full"
					bg="black"
					color="white"
					_hover={{ bg: "#301934" }}
				>
					+
				</Button>
			)}
		</Box>
	);
};

export default ImageContent;
