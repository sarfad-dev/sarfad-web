import { Box, Heading, Text } from "@chakra-ui/react";

const CustomHeading = () => {
  return (
    <Box 
      textAlign="center" 
      height="100vh" // Full viewport height to center vertically
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
    >
      <Heading 
        fontSize={{ base: "4xl", md: "7xl", lg: "9xl" }} // Responsive font size
        fontWeight="normal" // Set fontWeight to normal to remove bold
		letterSpacing={10}
      >
        SARFAD
      </Heading>
      <Text 
        fontSize={{ base: "1xl", md: "4xl", lg: "5xl" }} // Responsive subtext size
        mt={2} // margin-top for spacing between heading and subtext
      >
        CanSat tým
      </Text>
    </Box>
  );
}

export default CustomHeading;
