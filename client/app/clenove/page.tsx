'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import { Box } from '@chakra-ui/react';
import Carousel from '@/components/Carousel';

export default function Members() {
  return (
    <>
      <GridBackground>
      </GridBackground>
      <Box height="100vh" width="100vw">
        <Nav />
        <CustomHeading
          heading='Členové týmu'
        />
      </Box>
      <Carousel
        id='team'
        heading='Náš tým'
        images={[
          {
            src: '/prokop.webp',
            alt: 'Prokop Havlík',
            captionHeading: 'Prokop Havlík',
            captionDescription: 'Vedoucí týmu',
            button: true,
            overlayText: ''
          },
          {
            src: '/daniel.webp',
            alt: 'Daniel Tomis',
            captionHeading: 'Daniel Tomis',
            lightBg: true,
            captionDescription: 'Programátor webu',
            button: true,
            overlayText: ''
          },
          {
            src: '/jakub.webp',
            alt: 'Jakub Holub',
            captionHeading: 'Jakub Holub',
            captionDescription: 'Manažer týmu',
            button: true,
            overlayText: ''
          },
          {
            src: '/david.webp',
            alt: 'David Oprštěný',
            captionHeading: 'David Oprštěný',
            captionDescription: 'PR a marketing',
            button: true,
            overlayText: ''
          },
          {
            src: '/alexandr.webp',
            alt: 'Alexandr Chovanec',
            captionHeading: 'Alexandr Chovanec',
            lightBg: true,
            captionDescription: 'Konstrukce a výroba',
            button: true,
            overlayText: ''
          },
        ]}
      >

      </Carousel>
    </>
  );
}
