import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    HStack,
    Icon,
    Button,
    VStack,
    Link,
    List,
    ListItem,
    Image,
  } from '@chakra-ui/react';
  import { FaStar, FaStarHalfAlt, FaQrcode, FaUsers } from 'react-icons/fa';
  import qr from '../assets/images/download.png';
  
  export default function AboutSection() {
    return (
      <Container maxW="container.xl" px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'} py={10}>
        {/* About Section */}
        <Box textAlign="center" mb={10}>
          <Heading as="h2" size="lg" mb={4}>
            About Lakme Salon
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="tall">
            Lakmé Lever Pvt. Ltd., a 100% subsidiary of Hindustan Unilever Limited, operates India’s premier Lakmé Salon chain,
            with 450+ salons across 200 cities and over 40 years of experience in beauty, hair, and skin care.
            <br />
            <br />
            Lakmé Salon offers a diverse range of services tailored for every beauty need, from bridal hair and makeup to hair
            transformations and skin care treatments. Beyond hair and makeup, Lakmé Salon provides a full range of beauty treatments
            such as manicures and pedicures, hair spa treatments, and waxing services.
            <br />
            <br />
            The address of this salon is No M/61, Ground Floor, M Block Market, Greater Kailash 2, New Delhi, Delhi.
          </Text>
        </Box>
  
        {/* Ratings and Reviews Section */}
        <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
          {/* Store Ratings */}
          <Box flex={1} borderWidth="1px" boxShadow="lg" borderRadius="md" p={6}>
            <HStack spacing={4} alignItems="center" mb={4}>
              <Icon as={FaUsers} color="blue.500" boxSize={6} />
              <Heading as="h3" size="md">
                Store Ratings
              </Heading>
            </HStack>
            <Flex alignItems="center" mb={4}>
              <HStack spacing={1}>
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStarHalfAlt} color="yellow.400" />
              </HStack>
              <Text ml={2} fontWeight="bold">
                4.8
              </Text>
            </Flex>
            <Button
              color="black"
              bg="linear-gradient(45deg, #e7bf88, #98734b)"
              _hover={{
                bg: 'linear-gradient(45deg, #98734b, #e7bf88)',
              }}
              as={Link}
              href="https://search.google.com/local/writereview?placeid=ChIJcfpfy3_hDDkRUF12VrC6_kA"
              isExternal
            >
              Submit a Review
            </Button>
          </Box>
  
          {/* Reviews */}
          <Box flex={1} borderWidth="1px" boxShadow="lg" borderRadius="md" p={6}>
            <HStack spacing={4} alignItems="center" mb={4}>
              <Icon as={FaUsers} color="blue.500" boxSize={6} />
              <Heading as="h3" size="md">
                Reviews
              </Heading>
            </HStack>
            <List spacing={4}>
              <ListItem>
                <Text fontWeight="bold">Payal Punjabi</Text>
                <Text fontSize="sm" color="gray.600">
                  Posted on: 04-01-2025
                </Text>
                <HStack spacing={1}>
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                </HStack>
                <Text>Got a hair spa done, very happy with the services. Arsh is your go-to guy here!</Text>
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Priyanshu Chandra</Text>
                <Text fontSize="sm" color="gray.500">
                  Posted on: 01-01-2025
                </Text>
                <HStack spacing={1}>
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                  <Icon as={FaStar} color="yellow.600" />
                </HStack>
                <Text>
                  I love the services; they are fantastic. I have been a regular customer there. Special thanks to Mr. Rahul
                  Kuwala. I love that you always come to work with a bright smile and a fantastic attitude!
                </Text>
              </ListItem>
            </List>
            <Flex justifyContent="space-between" mt={4}>
              <Button
                as={Link}
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{
                  bg: 'linear-gradient(45deg, #98734b, #e7bf88)',
                }}
                href="https://search.google.com/local/writereview?placeid=ChIJcfpfy3_hDDkRUF12VrC6_kA"
                isExternal
              >
                Submit a Review
              </Button>
              <Button
                as={Link}
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{
                  bg: 'linear-gradient(45deg, #98734b, #e7bf88)',
                }}
                href="https://search.google.com/local/reviews?placeid=ChIJcfpfy3_hDDkRUF12VrC6_kA"
                isExternal
              >
                View All
              </Button>
            </Flex>
          </Box>
  
          {/* QR Code Section */}
          <Box flex={1} borderWidth="1px" boxShadow="lg" borderRadius="md" p={6}>
            <HStack spacing={4} alignItems="center" mb={4}>
              <Icon as={FaQrcode} color="blue.500" boxSize={6} />
              <Heading as="h3" size="md">
                Discover More With Us
              </Heading>
            </HStack>
            <Box textAlign="center">
              <Image src={qr} alt="qr-img" />
              <Text mt={4} fontSize="sm" color="gray.500">
                Scan the QR code to discover more!
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
  