'use client';
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';
import ScrollUpButton from '@/components/scrollUpButton';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <GridBackground />
      <Box minHeight="100vh" width="100vw">
        <Nav />
        <CustomHeading
          heading="SARFAD"
          description="CanSat tým"
        />
      </Box>
      <Box minHeight="80vh" width="100%" pt={5}>
        <TextContent
          id='cansat'
          heading="Co je to CanSat?"
          description="Soutěž pro týmy studentů, pořádaná Evropskou kosmickou agenturou. Cílem každého týmu je vytvořit 
          funkční satelit o velikosti plechovky. Satelit je vypuštěn z rakety ve výšce jednoho kilometru."
          image={true}
          imageSrc="/cansat.svg"
          imageAlt="Rocket"
          button={true}
          buttonText="Zjistit více"
          buttonLink="https://www.eserocz.cz/cansat"
        />
      </Box>
      <Box minHeight="80vh" width="100%">
        <Carousel
          id='co-umi'
          heading='Co umí náš CanSat?'
          images={[
            {
              src: '/carousel1.svg',
              alt: 'Image 1',
            },
            {
              src: '/carousel2.svg',
              alt: 'Image 2',
            },
            {
              src: '/carousel3.svg',
              alt: 'Image 3',
            },
            {
              src: '/carousel4.svg',
              alt: 'Image 4',
            },
          ]}
        >

        </Carousel>
      </Box>
      <Box minHeight="80vh" width="100%">
        <TextContent
          id='live-web'
          heading="Sleduj naší misi živě!"
          description="Všechna data se během letu ukládají do databáze, odkud se poté zobrazují na našem webu v různých 
          vizualizacích s aktualizováním v reálném čase."
          image={true}
          halfVisibleImage={false}
          imageSrc="/live.svg"
          imageAlt="Rocket"
          button={true}
          buttonText="Zobrazit web"
          buttonLink='/live-web'
        />
        <ScrollUpButton />
      </Box>
    </>
  );
}
