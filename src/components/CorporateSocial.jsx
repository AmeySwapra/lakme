import React, { useEffect } from 'react';
import { Box, Container, Heading, Text, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const CorporateSocial = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);
  return (
    <Box py={10} >
      <Container maxW="container.xl">
        <Heading as="h2" textAlign="center" size="lg" mb={5} data-aos="fade-down">
          <span style={{ color: '#E53E3E' }}>Corporate Social</span> Responsibility
        </Heading>
        <Box textAlign="center" mb={5}>
          <Image
            src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
            alt="divider"
            mx="auto"
            data-aos="fade-down"
          />
        </Box>
        <Box data-aos="fade-down">
          <Text textAlign="center" mb={5}>
            Enpro is committed to operate and grow its business in a socially and environmentally responsible way.
            We aim to create educated, healthy, sustainable, and culturally vibrant communities. ENPRO believes in
            society building and overall development of communities in nearby localities, leading to societal sustainability.
            ENPRO’s CSR focus has been to contribute to the sustainable development of society &amp; environment,
            and to make our planet a better place for future generations.
          </Text>
        </Box>
        
        {/* Carousel Section */}
        <Box mb={5} data-aos="fade-down">
          <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
            <Box>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
                <Box textAlign="center">
                  <Link href="https://www.enproindustries.in/wp-content/uploads/2023/06/01.jpg" isExternal>
                    <Image
                      src="https://www.enproindustries.in/wp-content/uploads/2023/06/01.jpg"
                      alt="Blood Donation Camp 2022"
                      borderRadius="md"
                      boxSize="100%"
                      objectFit="cover"
                    />
                  </Link>
                  <Text mt={2} fontSize="md" fontWeight="bold">Blood Donation Camp 2022</Text>
                </Box>
                <Box textAlign="center">
                  <Link href="https://www.enproindustries.in/wp-content/uploads/2023/06/02.jpg" isExternal>
                    <Image
                      src="https://www.enproindustries.in/wp-content/uploads/2023/06/02.jpg"
                      alt="Tree Plantation"
                      borderRadius="md"
                      boxSize="100%"
                      objectFit="cover"
                    />
                  </Link>
                  <Text mt={2} fontSize="md" fontWeight="bold">Tree Plantation, where we planted 250 saplings</Text>
                </Box>
                <Box textAlign="center">
                  <Link href="https://www.enproindustries.in/wp-content/uploads/2023/06/03.jpg" isExternal>
                    <Image
                      src="https://www.enproindustries.in/wp-content/uploads/2023/06/03.jpg"
                      alt="Self-Help Group Formation"
                      borderRadius="md"
                      boxSize="100%"
                      objectFit="cover"
                    />
                  </Link>
                  <Text mt={2} fontSize="md" fontWeight="bold">Formation of Self-Help Group, a Capacity training building</Text>
                </Box>
                <Box textAlign="center">
                  <Link href="https://www.enproindustries.in/wp-content/uploads/2023/06/04-new.jpg" isExternal>
                    <Image
                      src="https://www.enproindustries.in/wp-content/uploads/2023/06/04-new.jpg"
                      alt="Bicycle Distribution"
                      borderRadius="md"
                      boxSize="100%"
                      objectFit="cover"
                    />
                  </Link>
                  <Text mt={2} fontSize="md" fontWeight="bold">Bicycle distribution, under Girl Education Meri Udan Project</Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Carousel>
        </Box>

        {/* CSR Policy Link */}
        <Box textAlign="center" mt={5}>
          <Link href="#policies" color="blue.500" fontSize="lg" fontWeight="bold" data-aos="fade-down-left">
            VIEW OUR CSR POLICY
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default CorporateSocial;
