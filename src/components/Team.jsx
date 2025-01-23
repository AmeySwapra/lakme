import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import divider from '../assets/bg/divider.jpg'; 
import teamImage from '../assets/enpro/team.jpg'; 

const Team = () => {
  return (
    <Box py={16}>
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          color="red.500"
          textAlign="center"
          mb={4}
          data-aos="fade-down"
        >
          Team
        </Heading>

        {/* Decorative Line */}
        <Box textAlign="center" mb={8}>
          <Image
            src={divider}
            alt="Heading Divider"
            mx="auto"
            data-aos="fade-down"
          />
        </Box>

        {/* Team Image */}
        <Box data-aos="flip-left">
          <Image
            src={teamImage}
            alt="Saudi Arabia Team"
            width="100%"
            borderRadius="md"
            boxShadow="md"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
