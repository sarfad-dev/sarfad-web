'use client';

import React, { useState } from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

interface ImageContentProps {
	src: string;
	alt: string;
	captionHeading?: string;
	captionDescription?: string;
	button?: boolean;
	lightBg?: boolean;
	overlayText?: string;
}

const ImageContent: React.FC<ImageContentProps> = ({ src, alt, captionHeading, captionDescription, button, lightBg, overlayText }) => {
	const [isFaded, setIsFaded] = useState(false);

	const handleButtonClick = () => {
		setIsFaded(prevState => !prevState);
	};

	return (
		<Box position="relative" display="inline-block" maxWidth="100%">
			<Box
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				bg="#f7f7f7"
				borderRadius={10}
				opacity={isFaded ? 1 : 0}
				transition="opacity 1s ease-in-out"
				zIndex={1}
				pointerEvents={isFaded ? "auto" : "none"}
			/>
			<Image
				src={src}
				alt={alt}
				objectFit="contain"
				maxWidth="100%"
				height="auto"
				borderRadius={10}
				draggable="false"
				userSelect="none"
				opacity={isFaded ? 0 : 1}
				transition="opacity 1s ease-in-out"
				zIndex={0}
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
					width= "3rem"
					height= "3rem"
					fontSize="lg"
					borderRadius="full"
					bg="black"
					color="white"
					_hover={{ bg: "#301934" }}
					onClick={handleButtonClick}
					zIndex={2}
				>
					{isFaded ? "-" : "+"}
				</Button>
			)}

			{overlayText && (
				<Box
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					color="black"
					textAlign="center"
					px={4}
					zIndex={2}
					width="80%"
					opacity={isFaded ? 1 : 0}
					transition="opacity 1s ease-in-out"
				>
					<Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" whiteSpace="pre-wrap">
						{overlayText}
					</Text>
				</Box>
			)}
		</Box>
	);
};

export default ImageContent;
