import React from 'react';
import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import divider from '../assets/bg/divider.jpg'
import p1 from '../assets/enpro/p1.png'
import p2 from '../assets/enpro/p2.png'
import p3 from '../assets/enpro/p3.png'
const ProductsAndServices = () => {
  const services = [
    {
      title: 'Lube Oil Consoles',
      image: p1,
      alt: 'Saudi Arabia Service 1',
    },
    {
      title: 'Seal Gas Panels',
      image: p2,
      alt: 'Saudi Arabia Service 2',
    },
    {
      title: 'Site servicing & troubleshooting',
      image: p3,
      alt: 'Saudi Arabia Service 3',
    },
  ];

  return (
    <Box className="SA-services" py={16} bg="gray.100">
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          textAlign="center"
          mb={4}
          data-aos="fade-down"
        >
          Products <Text as="span" color="red.500">&amp; Services</Text>
        </Heading>

        {/* Decorative Line */}
        <Box textAlign="center" mb={12}>
          <Image
            src={divider}
            alt="Heading HR"
            mx="auto"
            data-aos="fade-down"
          />
        </Box>

        {/* Service Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="center">
          {services.map((service, index) => (
            <Box key={index} data-aos="flip-right">
              <Image
                src={service.image}
                alt={service.alt}
                boxSize="auto"
                mx="auto"
                className="img-fluid"
              />
              <Text
                fontWeight="medium"
                textTransform="uppercase"
                mt={4}
                data-aos="flip-up"
                fontSize="lg"
              >
                {service.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProductsAndServices;
