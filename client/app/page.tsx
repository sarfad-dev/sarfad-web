'use client';
import dynamic from 'next/dynamic';
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';
import ScrollUpButton from '@/components/scrollUpButton';
const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });

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
          imageSrc="/cansat.webp"
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
            src: '/carousel-1/primarniMise.webp',
            alt: 'Primární mise',
            captionHeading: 'Primární mise',
            captionDescription: 'Sledování atmosférických podmínek',
            lightBg: false,
            button: true,
            overlayText: 'CanSat měří teplotu, tlak a vlhkost pomocí senzoru BME280 od společnosti BOSCH s vysokou přesností a rychlou odezvou.'
          },
          {
            src: '/carousel-1/pozemniStanice.webp',
            alt: 'Pozemní stanice',
            captionHeading: 'Pozemní stanice',
            captionDescription: 'Příjem a vizualizace dat',
            lightBg: false,
            button: true,
            overlayText: 'Každou sekundu přijímáme telemetrii z CanSatu a zobrazujeme ji živě ve webovém rozhraní s grafy a logováním.'
          },
          {
            src: '/carousel-1/zaznamLetu.webp',
            alt: 'Záznam letu',
            captionHeading: 'Záznam letu',
            captionDescription: 'Integrovaná kamera',
            lightBg: false,
            button: true,
            overlayText: 'Během sestupu CanSat natáčí video směrem dolů, což umožňuje vizuální analýzu letu a prostředí pod sebou.'
          },
          {
            src: '/carousel-1/pcb.webp',
            alt: 'Plošný spoj',
            captionHeading: 'Plošný spoj',
            captionDescription: 'Návrh a výroba PCB',
            lightBg: false,
            button: true,
            overlayText: 'Všechny komponenty spojuje náš vlastní dvouvrstvý plošný spoj navržený v KiCADu — kompaktní, přehledný a optimalizovaný pro letecké podmínky.'
          },
          {
            src: '/carousel-1/zachrannySystem.webp',
            alt: 'Záchranný systém',
            captionHeading: 'Záchranný systém',
            captionDescription: 'Speciální padák',
            lightBg: false,
            button: true,
            overlayText: 'Padák z oranžového polyamidu s prstencovým tvarem zajišťuje stabilní sestup a minimalizuje otáčení, což zlepšuje kvalitu videozáznamu.'
          },
          {
            src: '/carousel-1/lokalizace.webp',
            alt: 'Lokalizace',
            captionHeading: 'Lokalizace',
            captionDescription: 'Aplikace pro nálezení',
            lightBg: false,
            button: true,
            overlayText: 'Naše aplikace umožňuje uživatelům najít CanSat pomocí GPS souřadnic a zobrazuje aktuální polohu na mapě.'
          },
          {
            src: '/carousel-1/oboustrannaKomunikace.webp',
            alt: 'Oboustranná komunikace',
            captionHeading: 'Oboustranná komunikace',
            captionDescription: 'Ovládání na dálku',
            lightBg: true,
            button: true,
            overlayText: 'CanSat je vybaven modulem LoRa, který umožňuje obousměrnou komunikaci mezi pozemní stanicí a CanSatem. Tato technologie zajišťuje spolehlivý přenos dat na velké vzdálenosti.'
          },
          {
            src: '/carousel-1/dataIRT.webp',
            alt: 'Interpretace dat',
            captionHeading: 'Interpretace dat',
            captionDescription: 'Data v reálném čase na webu',
            lightBg: false,
            button: true,
            overlayText: 'Naše webová aplikace zpracovává a vizualizuje data v reálném čase, což umožňuje uživatelům sledovat let a analyzovat naměřené hodnoty.'
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
          imageSrc="/team.webp"
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
          imageSrc="/live.webp"
          imageAlt="Rocket"
          button={true}
          buttonText="Zobrazit web"
          buttonLink='/live-web'
        />
      </Box>
      <Box minHeight="80vh" width="100%">
        <Carousel
          id='sponzori'
          heading='Naši sponzoři'
          images={[
            {
              src: '/sponsors/pojfm.webp',
              alt: 'Poj-FM',
              button: true,
              overlayText: 'Střední průmyslová škola ve Frýdku-Místku, kde tým SARFAD vznikl a rozvíjí své projekty.'
            },
            {
              src: '/sponsors/laskakit.webp',
              alt: 'Laskakit',
              button: true,
              overlayText: 'Český dodavatel vývojových kitů a elektronických komponent pro ESP32, Arduino, Raspberry Pi a další.'
            },
            {
              src: '/sponsors/pojspace.webp',
              alt: 'PojSpace',
              button: true,
              overlayText: 'Technologický klub studentů SPŠ Frýdek-Místek, který propojuje mladé nadšence do IT, elektrotechniky a vesmíru.'
            },
            {
              src: '/sponsors/notion.webp',
              alt: 'Notion',
              button: true,
              overlayText: 'Notion je nástroj pro organizaci a spolupráci, který nám pomáhá spravovat projekty a dokumentaci.'
            },
            {
              src: '/sponsors/prusaresearch.webp',
              alt: 'Prusa Research',
              button: true,
              overlayText: 'Česká firma známá svými 3D tiskárnami a inovativními technologiemi, která nám poskytla 3D tiskárnu PRUSA MK4S.'
            },
            {
              src: '/sponsors/velux.webp',
              alt: 'Velux',
              button: true,
              overlayText: 'Dánská nadace The VELUX Foundations, která podporuje inovativní vzdělávání a projekty s dopadem na společnost.'
            }
            
          ]}
          >
        </Carousel>
      </Box>
      <ScrollUpButton />
    </>
  );
}
