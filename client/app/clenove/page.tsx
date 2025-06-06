'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import { Box } from '@chakra-ui/react';
import Carousel from '@/components/Carousel';
import ScrollUpButton from '@/components/scrollUpButton';

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
            src: '/members/prokop.webp',
            alt: 'Prokop Havlík',
            captionHeading: 'Prokop Havlík',
            captionDescription: 'Vedoucí týmu',
            button: true,
            overlayText: 'Navrhuje PCB, programuje pozemní stanici a sekundární misi.'
          },
          {
            src: '/members/jakub.webp',
            alt: 'Jakub Holub',
            captionHeading: 'Jakub Holub',
            lightBg: true,
            captionDescription: 'Manažer týmu',
            button: true,
            overlayText: 'Navrhuje konstrukci CanSatu, stará se o hladký project management a pomáhá vytvářet grafiku.'
          },
          {
            src: '/members/daniel.webp',
            alt: 'Daniel Tomis',
            captionHeading: 'Daniel Tomis',
            lightBg: true,
            captionDescription: 'Programátor webu',
            button: true,
            overlayText: 'Programuje hlavní web, live web a stará se o interpretaci dat.'
          },
          {
            src: '/members/david.webp',
            alt: 'David Oprštěný',
            captionHeading: 'David Oprštěný',
            lightBg: true,
            captionDescription: 'PR a marketing',
            button: true,
            overlayText: 'Shání sponzory, designuje grafiku, fotí a pomáhá při konstrukci CanSatu.'
          },
          {
            src: '/members/alexandr.webp',
            alt: 'Alexandr Chovanec',
            captionHeading: 'Alexandr Chovanec',
            lightBg: true,
            captionDescription: 'Konstrukce a výroba',
            button: true,
            overlayText: 'Vytváří padák, hlavní fyzik a pomáhá se sekundární misí.'
          },
        ]}
      >
      </Carousel>
      <ScrollUpButton />
    </>
  );
}
