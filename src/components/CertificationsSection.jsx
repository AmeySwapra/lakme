import React from 'react';
import { Box, Container, Heading, Image, SimpleGrid, Text, Flex } from '@chakra-ui/react';

const CertificationsSection = () => {
  return (
    <Box as="section" className="corporate-social" py={{ base: 10, md: 16 }}>
      <Container maxW="container.lg">
        <Flex direction="column" align="center" justify="center">
          <Heading as="h2" fontSize="2xl" mb={4} color="red.500" data-aos="fade-down" textAlign="center">
            Certifications <span className="clr-red">&amp; Approvals</span>
          </Heading>
          
          <Box mb={6} display="flex" justifyContent="center">
            <Image
              src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
              className="heading-hr1"
              alt="heading-hr1"
              data-aos="fade-down"
              maxWidth="100%" 
              objectFit="contain" 
            />
          </Box>

          <Box
            id="corporate"
            className="carousel slide common-carousel"
            data-ride="carousel"
            data-aos="fade-down"
          >
            {/* Indicators */}
            <Box as="ul" className="carousel-indicators" textAlign="center">
              <Box
                as="li"
                data-target="#corporate"
                data-slide-to="0"
                className="active"
              ></Box>
            </Box>

            {/* The slideshow */}
            <Box className="carousel-inner">
              <Box className="carousel-item active">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={{ base: 6, md: 12 }} justifyContent={'center'}>
                  <Box data-aos="fade-up" textAlign="center">
                    <Box className="certi-col">
                      <a
                        href="https://www.enproindustries.in/wp-content/uploads/2023/06/ceritificate-1.jpg"
                        data-lightbox="slide-show-3"
                      >
                        <Image
                          src="https://www.enproindustries.in/wp-content/uploads/2023/06/ceritificate-1.jpg"
                          alt="Enpro Saudi Arabia certificate of approval"
                          className="img-fluid w-100"
                          boxSize="100%"
                          objectFit="cover"
                          mx="auto" // This ensures the certificate image is centered horizontally
                        />
                      </a>
                      <Text className="certi-name" mt={4}>
                        Enpro Saudi Arabia
                      </Text>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CertificationsSection;
