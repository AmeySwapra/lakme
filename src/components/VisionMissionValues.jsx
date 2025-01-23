import React from "react";
import { Box, Container, Heading, Text, Image, Divider, VStack } from "@chakra-ui/react";
import divider from '../assets/bg/divider.jpg'
const VisionMissionValues = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 10, md: 16 }} textAlign="center">
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          mb={{ base: 6, md: 8 }}
        >
          VISION, MISSION <Text as="span" color="red.500">AND VALUES</Text>
        </Heading>
        
        {/* Horizontal Divider */}
        <Box mb={8}>
          <Image
            src={divider}
            alt="Heading Divider"
            mx="auto"
            maxW="200px"
          />
        </Box>

        {/* Content Section */}
        <VStack
          spacing={6}
          mx="auto"
          maxW="800px"
          borderBottom="2px"
          borderColor="gray.200"
          pb={6}
        >
          <Text fontSize="lg" fontWeight="bold">
            ENPRO’s mission is “To be a world leader in energy & process equipment with a focus on realising the transition to clean energy.”
          </Text>
          <Text fontSize="md" color="gray.700">
            We envision ENPRO to be a highly profitable, customer-focused company with a global footprint based on high ethical standards, with a strong commitment to quality and a bias towards growth and continual improvement. While achieving this, ENPRO lays utmost emphasis on safety, dignity of the individual, integrity in all transactions, and responsibility towards our community and environment.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default VisionMissionValues;
