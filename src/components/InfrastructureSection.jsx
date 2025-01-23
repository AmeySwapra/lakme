import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import divider from '../assets/bg/divider.jpg';
import p1 from '../assets/infra/p1.jpg';
import p2 from '../assets/infra/p2.jpg';
import p3 from '../assets/infra/p3.jpg';
import p4 from '../assets/infra/p4.jpg';
import p5 from '../assets/infra/p5.jpg';
import p6 from '../assets/infra/p6.jpg';
import p7 from '../assets/infra/p7.jpg';

const InfrastructureSection = () => {
  return (
    <Box as="section" py={{ base: 8, md: 16 }} overflowX="hidden">
      <Container maxW="container.lg" px={{ base: 4, md: 8 }}>

        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={4} color="red.500" textAlign="center">
          Infrastructure
        </Heading>

        {/* Divider */}
        <Box textAlign="center" mb={6}>
          <Image src={divider} alt="heading-hr1" mx="auto" data-aos="fade-down" />
        </Box>

        {/* Top Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
          <Box data-aos="flip-left">
            <Image src={p1} alt="Infrastructure" w="100%" h="auto" objectFit="cover" />
            <Text mt={4} fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold">
              5000m² area
            </Text>
          </Box>
          <Box data-aos="fade-left">
            <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={{ base: 'justify', md: 'left' }}>
              Enpro Saudi Arabia has a world-class manufacturing facility of more than 20,000 sq. ft. area designed
              with lean principles for smooth material flow. The factory is capable of manufacturing more than 15
              mechanical fluid systems simultaneously, and over 60 skids annually.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Lower Section */}
        <Box py={{ base: 8, md: 16 }}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6 }} w="100%">
            {[ 
              { title: '5,000m² Manufacturing Area', imageSrc: p2 },
              { title: '20+ Welding Stations', imageSrc: p3 },
              { title: 'In-house Painting Booth', imageSrc: p4 },
              { title: '30T Crane Capacity', imageSrc: p5 },
              { title: 'In-house Shot-Blasting Booth', imageSrc: p1 },
              { title: 'Multi-level Rack Storage', imageSrc: p6 },
              { title: 'API 614 Testing Facility', imageSrc: p7 }
            ].map((item, index) => (
              <Box key={index} data-aos="zoom-in-left" textAlign="center" w="100%">
                <a href={item.imageSrc} data-lightbox="slide-show-" data-title={item.title}>
                  <Box mb={2}>
                    <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="bold" color="red.500">
                      {item.title}
                    </Text>
                  </Box>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    w="100%"
                    h={{ base: '200px', md: '300px' }}
                    objectFit="cover"
                    borderRadius="md"
                  />
                </a>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default InfrastructureSection;
