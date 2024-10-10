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
        <Nav navItems={[
          { label: 'Domů', link: '/' },
          { label: 'Co je to Cansat?', link: '/' },
          { label: 'Co umí?', link: '/' },
          { label: 'Členové', link: '/clenove' },
          { label: 'Live web', link: '/' },
        ]} />
        <GridBackground>
          <CustomHeading
            heading='Členové týmu'
          />
        </GridBackground>
      </Box>
    </>
  );
}
