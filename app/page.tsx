'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Nav navItems={[
        { label: 'Domů', link: '/' },
        { label: 'Členové', link: '/' },
        { label: 'Lorem', link: '/' },
        { label: 'Lorem', link: '/' },
        { label: 'Live web', link: '/' },
      ]} />
      <GridBackground>
        <CustomHeading />
      </GridBackground>
      {/* <Box maxW="6xl" mx="auto" p={8} position="relative" zIndex={1}>
          <TextContent
          heading="Co je to CanSat"
          description='Soutěž pro týmy studentů, pořádaná Evropskou kosmickou agenturou. Cílem každého týmu je vytvořit 
          funkční satelit o velikosti plechovky. Satelit je vypuštěn z rakety ve výšce jednoho kilometru.'
          imageSrc="/vertical.jpg"
          imageAlt="Rocket"
          imageCaption="Rocket launch"
          />
          </Box> */}
    </>
  );
}
