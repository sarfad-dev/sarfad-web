'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
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
