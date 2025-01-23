import React from 'react';
import { Box, Container, Grid, Heading, Text, Link, Icon, Flex, Image } from '@chakra-ui/react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const JobPostingSection = () => {
  return (
    <Box py={10} bg="#f9f9f9">
      <Container maxW="container.xl">
        {/* Section Heading */}
        <Heading as="h2" size="xl" textAlign="center" mb={8} data-aos="fade-down">
          Latest Job Postings
        </Heading>

        {/* External Job Listings iframe */}
        <Box mb={10}>
          <iframe
            src="https://enpro.keka.com/careers/api/embedjobs/ed00b274-82e4-4385-8429-1f5b1c091f7a"
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Job Listings"
          />
        </Box>

        {/* Job Listings Section (Example jobs displayed as cards) */}
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={6}>
          {/* Example Job Card 1 */}
          <Box
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl' }}
            data-aos="flip-left"
          >
            <Heading size="md" mb={4}>
              Senior Software Engineer
            </Heading>
            <Flex align="center" mb={4}>
              <Icon as={FaBriefcase} mr={2} />
              <Text fontWeight="bold">Full-Time</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>New York, NY</Text>
            </Flex>
            <Link
              href="#"
              color="blue.500"
              fontWeight="bold"
              isExternal
              display="block"
              textAlign="center"
              mt={4}
            >
              Apply Now
            </Link>
          </Box>

          {/* Example Job Card 2 */}
          <Box
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl' }}
            data-aos="flip-left"
          >
            <Heading size="md" mb={4}>
              Data Scientist
            </Heading>
            <Flex align="center" mb={4}>
              <Icon as={FaBriefcase} mr={2} />
              <Text fontWeight="bold">Part-Time</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>San Francisco, CA</Text>
            </Flex>
            <Link
              href="#"
              color="blue.500"
              fontWeight="bold"
              isExternal
              display="block"
              textAlign="center"
              mt={4}
            >
              Apply Now
            </Link>
          </Box>

          {/* Example Job Card 3 */}
          <Box
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl' }}
            data-aos="flip-left"
          >
            <Heading size="md" mb={4}>
              Marketing Manager
            </Heading>
            <Flex align="center" mb={4}>
              <Icon as={FaBriefcase} mr={2} />
              <Text fontWeight="bold">Full-Time</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>Chicago, IL</Text>
            </Flex>
            <Link
              href="#"
              color="blue.500"
              fontWeight="bold"
              isExternal
              display="block"
              textAlign="center"
              mt={4}
            >
              Apply Now
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobPostingSection;
