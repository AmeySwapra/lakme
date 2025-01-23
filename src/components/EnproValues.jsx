import React from "react";
import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import aboutp1 from '../assets/images/aboutp1.jpg'
import aboutp2 from '../assets/images/aboutp2.jpg'
const EnproValues = () => {
  
  const imageSrc = useBreakpointValue({
    base: aboutp2,
    md: aboutp1
  });

  return (
    <Box as="section" bg="gray.50" py={{ base: 10, md: 16 }} textAlign="center">
     
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        mb={{ base: 6, md: 8 }}
      >
        ENPRO Values
      </Heading>

     
      <Image
        src={imageSrc}
        alt="VISION, MISSION AND VALUES"
        w="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default EnproValues;
