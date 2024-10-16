'use client'
import Nav from '@/components/Navbar';
import CustomHeading from '@/components/CustomHeading';
import GridBackground from '@/components/GridBackground';
import TextContent from '@/components/TextContent';
import { Box } from '@chakra-ui/react';

export default function Members() {
  return (
    <>
      <GridBackground>
      </GridBackground>
      <Box height="100vh" width="100vw">
        <Nav />
        <CustomHeading
          heading='Členové týmu'
          description='WIP'
        />
      </Box>
    </>
  );
}
