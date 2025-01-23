import React, { useEffect } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutEnpro = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box py={{ base: 8, md: 16 }}>
      <Container maxW="container.lg">
        <Box textAlign="left" maxW="container.md" mx="auto">
          <Heading
            data-aos="zoom-in-right"
            mb={{ base: 6, md: 8 }}
            fontSize={{ base: '2xl', md: '4xl' }}
            color="black"
          >
            About Enpro Saudi Arabia
          </Heading>

          <Box
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          >
            <Text mb={4} fontSize={{ base: 'sm', md: 'md' }} color="black">
              ENPRO Saudi Arabia is a joint venture between Enpro Industries Pvt. Ltd. and Bandariyah International Company Factory for Metal Industries. By combining Enpro’s engineering and manufacturing expertise with Bandariyah group’s immense local experience, we aim to manufacture mechanical fluid systems in the Kingdom of Saudi Arabia by sourcing material within the Kingdom and recruiting local manpower.
            </Text>

            <Text mb={4} fontSize={{ base: 'sm', md: 'md' }} color="black">
              Our highly skilled application and engineering team is capable of adapting to the complex requirements of our customers and providing customized, cost-effective, and practical solutions. We follow all international codes and standards like API, ASME, ANSI, etc. Owing to more than 30 years of experience, we are conversant with all major end-customer standards as well.
            </Text>

            <Text mb={4} fontSize={{ base: 'sm', md: 'md' }} color="black">
              Our world-class manufacturing setup in Dammam 2nd Industrial City is ideally located close to our customers and suppliers for a better synergy. The facility is self-equipped with essential facilities to produce high-quality and reliable skid-mounted mechanical fluid systems and process equipment.
            </Text>

            <Text fontSize={{ base: 'sm', md: 'md' }} color="black">
              ENPRO has over 3 decades of engineering and manufacturing mechanical fluid systems to major oil & gas and power equipment manufacturers. We continuously strive to innovate and are actively involved in developing new products and improving services for our customers.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutEnpro;
