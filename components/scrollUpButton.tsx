import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<Box
			position="fixed"
			bottom="20px"
			right="20px"
			zIndex="1000"
			opacity={isVisible ? 1 : 0}
			transition="opacity 0.5s ease-in-out"
		>
			<IconButton
				aria-label="Scroll to top"
				icon={<FaArrowUp />}
				onClick={scrollToTop}
				borderRadius="full"
				size="lg"
				bg="black"
				textColor="white"
				variant="solid"
				boxShadow="md"
				_hover={{ bg: '#301934' }}
			/>
		</Box>
	);
};

export default ScrollUpButton;
