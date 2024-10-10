'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';

export default function Members() {
  return (
    <>
      <Box height="100vh" width="100vw">
        <Nav />
        <GridBackground>
          <CustomHeading
            heading='Členové týmu'
          />
        </GridBackground>
      </Box>
    </>
  );
}
