import React from 'react';
import { Box, Flex, Text, Icon, VStack } from '@chakra-ui/react';
import { FaGlobe, FaStore, FaStar, FaComments } from 'react-icons/fa'; 

const InfoWidget = () => {
  return (
    <Box py={10} bg="gray.100" px={{ base: 4, md: 8 }} overflow={'hidden'}>
      <Flex
        direction={{ base: 'column', md: 'row' }} 
        align="center"
        justify="center"
        wrap="wrap"
        gap={6}
      >
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={6}
          w={{ base: 'full', md: '48%' }} 
          maxW="lg"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Flex align="center" justify="center">
              <Icon as={FaGlobe} boxSize={6} color="blue.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">200+</Text>
              <Text>Cities</Text>
            </Flex>
          </VStack>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={6}
          w={{ base: 'full', md: '48%' }} 
          maxW="lg"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Flex align="center" justify="center">
              <Icon as={FaStore} boxSize={6} color="green.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">450+</Text>
              <Text>Stores</Text>
            </Flex>
          </VStack>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={6}
          w={{ base: 'full', md: '48%' }} 
          maxW="lg"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Flex align="center" justify="center">
              <Icon as={FaStar} boxSize={6} color="yellow.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">4.8</Text>
              <Text>Avg Rating</Text>
            </Flex>
          </VStack>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={6}
          w={{ base: 'full', md: '48%' }} 
          maxW="lg"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Flex align="center" justify="center">
              <Icon as={FaComments} boxSize={6} color="red.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">366K+</Text>
              <Text>Reviews</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default InfoWidget;
