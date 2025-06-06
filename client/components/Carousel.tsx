import { Box, IconButton, Text, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';
import ImageContent from './ImageContent';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Image {
  src: string;
  alt: string;
  captionHeading?: string;
  captionDescription?: string;
  lightBg?: boolean;
  button?: boolean;
  overlayText?: string;
  isLCP?: boolean;
}

interface CarouselProps {
  id: string;
  heading: string;
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ heading, images, id }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const visibleItems = useBreakpointValue({ base: 2, sm: 2, '2xl': 4 }) || 4;
  const itemWidth = `${100 / visibleItems}%`;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;

      if (scrollLeft + offsetWidth >= scrollWidth) {
        scrollRef.current.scrollLeft = 0;
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && itemRef.current) {
      const scrollAmount = itemRef.current.offsetWidth;
      const container = scrollRef.current;
  
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;
  
      if (direction === 'left') {
        if (currentScrollLeft <= 0) {
          // Jump to the end
          container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (currentScrollLeft + scrollAmount >= maxScrollLeft + 20) {
          // Jump to the start
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };
  


  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" width="100%" id={id}>
      <Box width="100%" maxWidth="90vw">
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="extrabold" mb={4}>
            {heading}
          </Text>
        </Box>

        {/* Mobile view */}
        <Grid display={{ base: 'grid', md: 'none' }} templateColumns="1fr" gap={6} pt={6}>
          {images.map((image, index) => (
            <GridItem key={index} display="flex" justifyContent="center">
              <ImageContent {...image} />
            </GridItem>
          ))}
        </Grid>

        {/* Desktop carousel */}
        <Flex display={{ base: 'none', md: 'flex' }} align="center" position="relative" mt={6}>
          <IconButton
            aria-label="Scroll Left"
            icon={<FaArrowLeft />}
            onClick={() => scroll('left')}
            position="absolute"
            left={{ base: '-2rem', '2xl': '-3rem' }}
            zIndex={2}
            borderRadius="full"
            size="md"
            bg="black"
            color="white"
            variant="solid"
            boxShadow="md"
            _hover={{ bg: '#301934' }}
          />

          <Flex
            ref={scrollRef}
            overflowX="auto"
            scrollBehavior="smooth"
            css={{
              scrollSnapType: 'x mandatory',
              '& > *': {
                scrollSnapAlign: 'start',
              },
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            gap={0}
            pt={4}
            width="100%"
          >
            {images.map((image, index) => (
              <Box
                key={index}
                ref={index === 0 ? itemRef : null}
                flex={`0 0 ${itemWidth}`}
                minW={itemWidth}
                maxW={itemWidth}
                px="0.75rem"
                display="flex"
                justifyContent="center"
              >
                <ImageContent {...image} />
              </Box>
            ))}
          </Flex>

          <IconButton
            aria-label="Scroll Right"
            icon={<FaArrowRight />}
            onClick={() => scroll('right')}
            position="absolute"
            right={{ base: '-2rem', '2xl': '-3rem' }}
            zIndex={2}
            borderRadius="full"
            size="md"
            bg="black"
            color="white"
            variant="solid"
            boxShadow="md"
            _hover={{ bg: '#301934' }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Carousel;
