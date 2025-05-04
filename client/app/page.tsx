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
          isLCP={true}
          button={true}
          buttonText="Zjistit více"
          buttonLink="https://www.eserocz.cz/cansat"
        />
      </Box>
      <Box minHeight="80vh" width="100%" pt={10}>
        <Carousel
          id='co-umi'
          heading='Co umí náš CanSat?'
          images={[
            {
              src: '/pojfm.webp',
              alt: 'Image 1',
              captionHeading: 'Primární mise',
              captionDescription: 'Měření teploty a tlaku',
              button: true,
              overlayText: 'Měření teploty a tlaku pomocí senzoru BME280 od společnosti BOSCH'
            },
            {
              src: '/pojfm.webp',
              alt: 'Image 2',
              captionHeading: 'Pozemní stanice',
              captionDescription: 'Přijímání dat z CanSatu',
              button: true,
            },
            {
              src: '/pojfm.webp',
              alt: 'Image 3',
              captionHeading: 'Konstrukce',
              captionDescription: 'Vysoká odolnost',
              lightBg: true,
              button: true,
            },
            {
              src: '/pojfm.webp',
              alt: 'Image 4',
              captionHeading: '',
              captionDescription: '',
              lightBg: true,
              button: true
            },
          ]}
        >
        </Carousel>
      </Box>
      <Box minHeight="80vh" width="100%" pt={10}>
        <TextContent
          id='kdo-jsme'
          heading="Kdo jsme?"
          description="Jsme tým studentů Střední průmyslové školy ve Frýdku-Místku (POJ-FM) pro rok 2025, zvaný SARFAD. 
          Naším cílem je vytvořit funkční CanSat, který splní všechny požadavky soutěže."
          image={true}
          imageSrc="/cansat.svg"
          imageAlt="Tým"
          button={true}
          buttonText="Zobrazit členy týmu"
          buttonLink='/clenove'
        />
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
      <Box minHeight="80vh" width="100%">
        <Carousel
          id='sponsors'
          heading='Naši sponzoři'
          images={[
            {
              src: '/pojfm.webp',
              alt: 'Poj-FM',
              button: true,
              overlayText: 'Střední průmyslová škola ve Frýdku-Místku, na kterou chodí členové týmu SARFAD.',
            },
            {
              src: '/laskakit.webp',
              alt: 'laskakit',
              button: true,
              overlayText: 'Český e-shop, který prodává elektroniku pro vývojové desky ESP, RPI, Arduino...',
            },
            {
              src: 'pojspace.webp',
              alt: 'PojSpace',
              button: true,
              overlayText: 'Studentský technologický klub, působící na Střední průmyslové škole ve Frýdku-Místku.',
            },
            {
              src: 'velux.webp',
              alt: 'Velux',
              button: true,
              overlayText: 'Nadace The Velux Foundations, která podporuje školy s proaktivním myšlením.',
            }
          ]}
          >
        </Carousel>
      </Box>
    </>
  );
}
