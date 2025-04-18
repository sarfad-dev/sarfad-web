import { 
  Box, 
  Heading, 
  Text, 
  useBreakpointValue 
} from "@chakra-ui/react";
import { desc } from "framer-motion/client";

interface CustomHeadingProps {
  heading: string;
  description?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({heading, description}) => {
  const letterSpacing = useBreakpointValue({ base: 5, md: 10 });
  const fontWeight = useBreakpointValue({ base: "bold", md: "semibold" });

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
        fontWeight={fontWeight} 
        letterSpacing={letterSpacing}
      >
        {heading}
      </Heading>
      <Text 
        fontSize={{ base: "1xl", md: "4xl", lg: "5xl" }} 
        mt={2}
      >
        {description}
      </Text>
    </Box>
  );
}

export default CustomHeading;
