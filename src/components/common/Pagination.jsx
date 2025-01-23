import React from 'react';
import { HStack, Button, Text, Box, Icon } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={6}
      py={4}
      
      
    >
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        bg="transparent"
        color="#FAD298"
        fontWeight="bold"
        _hover={{
          bg: "#FAD298",
          color: "black",
          transform: "scale(1.1)",
        }}
        _disabled={{
          opacity: 0.5,
          cursor: "not-allowed",
        }}
        borderRadius="50%"
        size="lg"
        px={6}
      >
        <Icon as={FaArrowLeft} boxSize={5} />
      </Button>
      <Text fontSize="lg" mx={4} fontWeight="medium" color="gray.600">
        {`Page ${currentPage} of ${totalPages}`}
      </Text>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        bg="transparent"
        color="#FAD298"
        fontWeight="bold"
        _hover={{
          bg: "#FAD298",
          color: "black",
          transform: "scale(1.1)",
        }}
        _disabled={{
          opacity: 0.5,
          cursor: "not-allowed",
        }}
        borderRadius="50%"
        size="lg"
        px={6}
      >
        <Icon as={FaArrowRight} boxSize={5} />
      </Button>
    </Box>
  );
};

export default Pagination;
