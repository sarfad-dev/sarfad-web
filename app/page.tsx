'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import Carousel from '@/components/Carousel';

import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box height="100vh" width="100vw">
        <Nav/>
        <GridBackground>
          <CustomHeading 
            heading='SARFAD'
            description='CanSat tým'
          />
        </GridBackground>
      </Box>
      <TextContent
        heading="Co je to CanSat?"
        description='Soutěž pro týmy studentů, pořádaná Evropskou kosmickou agenturou. Cílem každého týmu je vytvořit 
        funkční satelit o velikosti plechovky. Satelit je vypuštěn z rakety ve výšce jednoho kilometru.'
        image={true}
        imageSrc="/cansat.svg"
        imageAlt="Rocket"
        button={true}
        buttonText="Zjistit více"
      />
      {/* <Carousel
        heading='Co umí náš CanSat'
        images={[
          { src: '/carousel1.svg', heading: 'Primární mise', description: 'Měření teploty a tlaku'},
          { src: '/carousel2.svg', heading: 'Pozemní stanice', description: 'Přijímání dat z CanSatu'},
          { src: '/carousel3.svg', heading: 'Konstruckce', description: 'Vysoká odolnost'},
          { src: '/carousel4.svg', heading: 'Konstrukce', description: 'Měření teploty a tlaku'},
          { src: '/carousel4.svg', heading: 'Konstrukce', description: 'Měření teploty a tlaku'},
          { src: '/carousel4.svg', heading: 'Konstrukce', description: 'Měření teploty a tlaku'},
          { src: '/carousel4.svg', heading: 'Konstrukce', description: 'Měření teploty a tlaku'},
        ]}
      /> */}
      <TextContent
        heading="Sleduj naší misi živě!"
        description='Všechna data se během letu ukládají do databáze, 
        odkud se poté zobrazují na našem webu v různých vizualizacích s aktualizováním v reálném čase'
        image={true}
        imageSrc="/live.svg"
        imageAlt="Rocket"
        button={true}
        buttonText="Zobrazit web"
      />
    </>
  );
}
