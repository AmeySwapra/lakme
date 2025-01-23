import {
    Box,
    Container,
    Heading,
    Divider,
    Image,
    SimpleGrid,
    VStack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  const EngineeringCapability = () => {
    const softwareCapabilities = [
      "https://www.enproindustries.in/wp-content/uploads/2023/06/1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/2.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/3.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/4.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/5.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/6.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/7.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/8.jpg",
    ];
  
    const designStandards = [
      "https://www.enproindustries.in/wp-content/uploads/2023/06/1-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/2-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/3-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/4-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/5-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/14.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/6-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/7-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/8-1.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/9.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/10.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/11.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/12.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/15.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/16.jpg",
      "https://www.enproindustries.in/wp-content/uploads/2023/06/17.jpg",
    ];
  
    return (
      <Box bg="gray.50" py={10}>
        <Container maxW="6xl">
          <VStack spacing={4} align="center">
            <Heading
              as="h2"
              size="xl"
              color="red.500"
              textAlign="center"
            >
              Engineering <Text as="span" color="black">Capabilities</Text>
            </Heading>
            <Divider borderColor="red.500" w={32} />
          </VStack>
  
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
            <Box>
              <Heading as="h3" size="md" mb={4} textAlign="center">
                SOFTWARE CAPABILITIES
              </Heading>
              <SimpleGrid columns={{ base: 3, md: 4 }} spacing={4}>
                {softwareCapabilities.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Software Capability"
                    borderRadius="md"
                    boxShadow="lg"
                    _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                  />
                ))}
              </SimpleGrid>
            </Box>
  
            <Box>
              <Heading as="h3" size="md" mb={4} textAlign="center">
                DESIGN STANDARDS
              </Heading>
              <SimpleGrid columns={{ base: 3, md: 4 }} spacing={4}>
                {designStandards.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Design Standard"
                    borderRadius="md"
                    boxShadow="lg"
                    _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
  export default EngineeringCapability;
  