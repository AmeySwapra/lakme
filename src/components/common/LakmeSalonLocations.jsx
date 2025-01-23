import React, { useState } from 'react';
import { Box, Button, Text, VStack, HStack, SimpleGrid, Icon, Heading } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaShoppingBag } from 'react-icons/fa';  
import Pagination from './Pagination';

const LakmeSalonLocations = ({ salons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const salonsPerPage = 6;

  
  const totalPages = Math.ceil(salons.length / salonsPerPage);

 
  const currentSalons = salons.slice(
    (currentPage - 1) * salonsPerPage,
    currentPage * salonsPerPage
  );

  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Box py={10} px={{ base: 4, md: 8, lg: 24 }} >
      <Heading as="h2" size="xl" textAlign="center" color="black" mb={8} textTransform="uppercase">
        Lakme Salon
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {currentSalons.map((salon) => (
          <Box
            key={salon.id}
            p={5}
            borderWidth={2}
            borderRadius="md"
            borderColor="#FAD298"
            boxShadow="lg"
            bg="black"
            color="white"
          >
            <HStack spacing={3} align="center" mb={4}>
              <Icon as={FaShoppingBag} boxSize={6} color="white" />
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                LAKME SALON
              </Text>
            </HStack>
            <VStack align="flex-start" spacing={2}>
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} boxSize={5} color="white" />
                <Text>{salon.address}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaPhoneAlt} boxSize={5} color="white" />
                <Text>{salon.phone}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaClock} boxSize={5} color="white" />
                <Text>Open until: {salon.hours}</Text>
              </HStack>
            </VStack>
            <HStack spacing={4} mt={4}>
              <Button
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{ bg: "linear-gradient(45deg, #98734b, #e7bf88)" }}
                as="a"
                href="/map"
              >
                MAP
              </Button>
              <Button
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{ bg: "linear-gradient(45deg, #98734b, #e7bf88)" }}
                as="a"
                href="/website-homepage"
              >
                WEBSITE
              </Button>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>

     
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default LakmeSalonLocations;
