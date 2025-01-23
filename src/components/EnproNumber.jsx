import React from 'react';
import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import contactbg from '../assets/bg/counter-bg.jpg';
import divider from '../assets/bg/divider.jpg';

const EnproNumber = () => {
  const numbers = [
    { value: 45, suffix: '%+', label: 'IKTVA Content' },
    { value: 5000, suffix: 'm²', label: 'Manufacturing Area' },
    { value: 30, suffix: ' Ton', label: 'Crane capacity' },
    { value: 60, suffix: '+', label: 'Skids annual manufacturing capacity' },
    { value: null, label: 'In-house Blasting and Painting booth', extra: true },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={{ base: 8, md: 16 }}
      overflowX="hidden"
    >
      <Container maxW="container.lg" px={{ base: 4, md: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          color="white"
          textAlign="center"
          mb={{ base: 4, md: 6 }}
          data-aos="fade-down"
        >
          Company in Numbers
        </Heading>

        <Box textAlign="center" mb={{ base: 8, md: 12 }}>
          <Image src={divider} alt="Heading HR" mx="auto" data-aos="fade-down" />
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 6, md: 8 }}
          textAlign="center"
          ref={ref}
        >
          {numbers.map((item, index) => (
            <Box key={index} data-aos="fade-left">
              {item.value !== null && inView && (
                <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="white" mb={2}>
                  <CountUp start={0} end={item.value} duration={2} suffix={item.suffix || ''} />
                </Text>
              )}
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                fontWeight={item.extra ? 'semibold' : 'normal'}
              >
                {item.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EnproNumber;
