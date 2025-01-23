import React, { useState } from 'react';
import { 
  Box, Container, Text, Link, Button, Flex, Icon, HStack, VStack, Heading, Tag 
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = ({ currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
    "Chhattisgarh", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", 
    "Jammu And Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Nagaland", "Odisha", "Puducherry", 
    "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal"
  ];

  const tags = [
    "Lakme Salon", "Lakme Bridal Package", "Lakme Pre Bridal Package",
    "Lakme Wedding Makeup", "Lakme Bridal Makeup", "Lakme Party Makeup",
    "Lakme Engagement Makeup", "Lakme Bridal Services", "Lakme Makeup Trial",
    "Lakme HD Bridal Makeup", "Lakme Salon Near Me", "Lakme Salon Products",
    "Lakme Salon Manicure Services", "Lakme Salon Pedicure Treatments",
    "Lakme Salon Nail Art Designs", "Lakme Salon Hand Spa Therapy",
    "Lakme Salon Foot Care Solutions", "Lakme Salon Nail Extensions",
    "Lakme Salon Paraffin Wax Treatment", "Lakme Salon Skin Care Services",
    "Lakme Salon Hair Styling", "Lakme Salon Facial Treatments",
    "Lakme Salon Waxing Services", "Lakme Salon Threading and Shaping",
    "Lakme Salon Hair Coloring", "Lakme Salon Haircut and Styling",
    "Lakme Salon Beauty Package"
  ];

  const visibleStates = isExpanded ? states : states.slice(0, 6);

  if (currentPage === 'homePage') {
    return (
      <Box bg="black" color="white" py={8} px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'}>
        <Container maxW="container.lg">
          <Box mb={6}>
            <Text fontSize="lg" mb={2}>States we are present in</Text>
            <Text fontSize="md">
              {visibleStates.map((state, index) => (
                <span key={state}>
                  <Link href={`https://salons.lakmesalon.in/location/${state.toLowerCase().replace(/ /g, '-')}`} isExternal>
                    {state}
                  </Link>
                  {index < visibleStates.length - 1 && ' / '}
                </span>
              ))}
            </Text>
            {!isExpanded && (
              <Button variant="link" color="white" onClick={() => setIsExpanded(true)} mt={2}>
                View More...
              </Button>
            )}
          </Box>

          <Flex justify="space-between" align="center">
            <Text fontSize="sm">© 2024 All Rights Reserved.</Text>

            <HStack spacing={4}>
              <Link href="https://www.facebook.com/206548989388642" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://www.instagram.com/lakmesalon/" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="https://www.lakmesalon.in/?utm_source=store_locator&utm_medium=brand_website" isExternal>
                <Icon as={FaGlobe} boxSize={6} />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    );
  }

  if (currentPage === 'websiteHomepage') {
    return (
      <Box bg="gray.800" color="white" py={8} overflow={'hidden'} px={{ base: 4, md: 8, lg: 24 }}>
        <Container maxW="container.lg">
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" size="md" mb={4}>Nearby Locality</Heading>
              <HStack spacing={4} wrap="wrap">
                {["Ramphal Chowk Road", "Block D", "Sector 7 Dwarka", "Dwarka"].map((locality) => (
                  <Link
                    key={locality}
                    href={`https://salons.lakmesalon.in/?search=${locality.replace(/ /g, '+')}`}
                    isExternal
                    color="whiteAlpha.900"
                  >
                    {locality}
                  </Link>
                ))}
              </HStack>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={4}>Categories</Heading>
              <Text>Beauty Parlour</Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={4}>Tags</Heading>
              <HStack spacing={2} wrap="wrap">
                {tags.map((tag) => (
                  <Text key={tag}>{tag} |</Text>
                ))}
              </HStack>
            </Box>
          </VStack>

          <Flex justify="space-between" align="center" mt={8}>
            <Text fontSize="sm">© 2024 All Rights Reserved.</Text>

            <HStack spacing={4}>
              <Link href="https://www.facebook.com/206548989388642" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://www.instagram.com/lakmesalon/" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="https://www.lakmesalon.in/?utm_source=store_locator&utm_medium=brand_website" isExternal>
                <Icon as={FaGlobe} boxSize={6} />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    );
  }

  return null;
};

export default Footer;
