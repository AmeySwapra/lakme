import React from 'react';
import { Box, Container, Grid, Text, Link, Heading, Icon, Button, useBreakpointValue, Image } from '@chakra-ui/react';
import { FaPhone, FaMapMarkedAlt, FaEnvelope, FaGlobe, FaQrcode } from 'react-icons/fa';
import qr from '../assets/images/download.png'
const Contact = () => {
  const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' });

  return (
    <Box as="section" id="section1" py={12} px={{ base: 4, md: 8, lg: 24 }}>
      <Container maxW="container.xl">
        <Box as="article">
          <Heading as="h2" textAlign="center" mb={8} fontSize={{ base: '2xl', md: '3xl' }} color="gray.800">
            Contact Us
          </Heading>
          <Grid
            templateColumns={gridTemplateColumns}
            gap={{ base: 8, md: 16 }}
            justifyContent="space-between"
            alignItems="start"
          >
           
            <Box
              bg="gray.50"
              p={6}
              borderRadius="lg"
              boxShadow="xl"
              _hover={{ boxShadow: '2xl' }}
              transition="all 0.3s ease"
            >
              <Heading as="h3" size="lg" mb={4} color="gray.700">Lakme Salon</Heading>
              <Box mb={6}>
                <Text color="gray.600" mb={2}>
                  <Icon as={FaMapMarkedAlt} mr={3} color="teal.500" />
                  Ramphal Chowk, Sec 7 Dwarka, Delhi
                </Text>
                <Text color="gray.600" mb={2}>
                  <Icon as={FaMapMarkedAlt} mr={3} color="teal.500" />
                  Property No D/415, 1st Floor, Ramphal Chowk Road, Sector 7, Dwarka, New Delhi - 110045
                </Text>
                <Text color="gray.600" mb={2}>
                  <Icon as={FaPhone} mr={3} color="teal.500" />
                  <Link href="tel:18441231952" color="teal.500" fontWeight="bold">
                    18441231952
                  </Link>
                </Text>
              </Box>
            </Box>

          
            <Box
              bg="gray.50"
              p={6}
              borderRadius="lg"
              boxShadow="xl"
              _hover={{ boxShadow: '2xl' }}
              transition="all 0.3s ease"
            >
              <Box mb={6}>
                <Text color="gray.600" mb={2}>
                  <Icon as={FaGlobe} mr={3} color="teal.500" />
                  <Link
                    href="https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Home"
                    isExternal
                    color="teal.500"
                    fontWeight="bold"
                  >
                    lakmesalon.in
                  </Link>
                </Text>
                <Text color="gray.600" mb={2}>
                  <Icon as={FaEnvelope} mr={3} color="teal.500" />
                  <Link href="mailto:lakmesalonindia1@gmail.com" color="teal.500" fontWeight="bold">
                    lakmesalonindia1@gmail.com
                  </Link>
                </Text>
              </Box>

              {/* QR Code Section */}
              <Box bg="gray.100" p={6} borderRadius="lg" boxShadow="md">
                <Heading as="h4" size="md" mb={4} color="gray.700">
                  Discover More With Us
                </Heading>
                <Box>
                  <Text color="gray.600" mb={4}>
                    <Image src={qr} alt='qr-code' />
                    Tell us about your experience. Scan this QR code to discover more with us.
                  </Text>
                  <Button
                    as="a"
                    href="https://salons.lakmesalon.in/downloadqrcode/MzM0OTYz/MzQ5NzMw"
                    target="_blank"
                    colorScheme="teal"
                    size="lg"
                    fontWeight="bold"
                    w="full"
                  >
                    Download QR
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
