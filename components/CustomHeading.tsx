import { 
  Box, 
  Heading, 
  Text 
} from "@chakra-ui/react";

const CustomHeading = () => {
  return (
    <Box 
      textAlign="center" 
      height="100vh"
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
    >
      <Heading 
        fontSize={{ base: "5xl", md: "7xl", lg: "9xl" }} 
        fontWeight="semibold" 
		    letterSpacing={10}
      >
        SARFAD
      </Heading>
      <Text 
        fontSize={{ base: "1xl", md: "4xl", lg: "5xl" }} 
        mt={2}
      >
        CanSat tým
      </Text>
    </Box>
  );
}

export default CustomHeading;
