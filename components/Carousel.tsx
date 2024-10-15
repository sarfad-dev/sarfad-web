/* 'use client'

import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ImageContent from "./ImageContent";

interface ImageProps {
	src: string;
	heading: string;
	description?: string;
}

interface CarouselProps {
	heading: string;
	images: ImageProps[];
}

const Carousel: React.FC<CarouselProps> = ({ heading, images }) => {
	const [{ x }, api] = useSpring(() => ({ x: 0 }));
	const carouselRef = useRef<HTMLDivElement>(null);
	const [maxScroll, setMaxScroll] = useState(0);
	const [canScroll, setCanScroll] = useState(true); // Controls whether scrolling is enabled

	const itemWidth = 320; // Width of each item
	const padding = 40; // Total padding for the carousel (left + right)

	useEffect(() => {
		const handleResize = () => {
			const carouselWidth = carouselRef.current?.clientWidth ?? 0;
			const totalImagesWidth = images.length * itemWidth;
			const scrollLimit = Math.max(totalImagesWidth - carouselWidth + padding, 0);

			setMaxScroll(scrollLimit);

			// Disable scrolling if all images can fit within the container
			if (totalImagesWidth <= carouselWidth) {
				setCanScroll(false);
				api.start({ x: 0, immediate: true }); // Reset the scroll position
			} else {
				setCanScroll(true);
			}
		};

		// Initial calculation and update on resize
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [images.length]);

	const bind = useDrag(({ offset: [ox], velocity: [vx], last, memo = x.get() }) => {
		if (!canScroll) return; // Disable drag if scrolling is not needed

		// Apply a damping factor to slow down scrolling based on drag velocity
		const damping = Math.max(0.4, 1 - vx * 0.5); // Damping factor for velocity control
		let newX = memo + ox * damping;

		if (last) {
			// Apply bounds on release with slow scroll-back animation
			newX = Math.max(Math.min(newX, 0), -maxScroll);
			api.start({ x: newX, config: { tension: 120, friction: 40 } }); // Smoother, slower scroll-back
		} else {
			api.start({ x: newX, immediate: true });
		}

		return memo + ox * damping; // Slow down drag sensitivity
	}, {
		bounds: { left: -maxScroll, right: 0 },
		rubberband: true,
		axis: 'x',
		filterTaps: true, // Ignore tap events, only track drag movements
		enabled: canScroll, // Enable or disable dragging based on whether it's necessary
	});

	return (
		<Box textAlign="left" py={5} px={5} maxW="100vw" overflowX="hidden">
			<Heading
				fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
				fontWeight="semibold"
				letterSpacing={5}
				mb={10}
			>
				{heading}
			</Heading>

			<animated.div
				{...bind()}
				ref={carouselRef}
				style={{ x }}
			>
				<HStack
					spacing={5}
					width="100%"
					maxW="100vw"
					px={5}
					css={{
						"&::-webkit-scrollbar": {
							display: "none",
						},
					}}
				>
					{images.map((image, index) => (
						<Box key={index} flexShrink={0} width={`${itemWidth}px`}>
							<ImageContent src={image.src} alt={image.heading} caption={image.description} />
						</Box>
					))}
				</HStack>
			</animated.div>
		</Box>
	);
};

export default Carousel;
 */