import { useEffect } from 'react';
import { Box, Container, Heading, Text, Grid, Flex, Image, List, ListItem, Divider } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkidSystems = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Box py={12} overflowX="hidden">
      <Container maxW="container.lg">
        <Heading as="h1" mb={4} textAlign="center" data-aos="fade-down">
          Engineered <Text as="span" color="red.500">Skid Systems</Text>
        </Heading>

        <Box textAlign="center" data-aos="fade-down">
          <Image
            src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
            alt="heading-hr1"
            mx="auto"
          />
        </Box>

        {/* Product 1: Lube Oil Consoles */}
        <Box
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/skids-1.webp"
                alt="Lube Oil Consoles"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize="xl" mb={4}>
                <strong>Lube</strong> Oil Consoles
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Lubrication systems for engines and turbines</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Pressure up to 300 bar</ListItem>
                <ListItem>Flow rates up to 500 L/min</ListItem>
                <ListItem>Conforming to API standards</ListItem>
                <ListItem>Materials: Stainless Steel, Carbon Steel, Super Duplex</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>

        {/* Product 2: Pumping Skid Systems */}
        <Box
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize="xl" mb={4}>
                Pumping Skid Systems
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Used for transferring fluids in industrial processes</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Designed for high efficiency and reliability</ListItem>
                <ListItem>Flow rate: 1000 L/min</ListItem>
                <ListItem>Pressure rating up to 100 bar</ListItem>
                <ListItem>Materials: Stainless Steel, Carbon Steel, Super Duplex</ListItem>
              </List>
            </Box>
            <Flex justify="center" data-aos="fade-left">
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/skids-2.webp"
                alt="Pumping Skid Systems"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
          </Grid>
        </Box>

        {/* Product 3: Water Treatment Skids */}
        <Box
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/skids-3.webp"
                alt="Water Treatment Skids"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize="xl" mb={4}>
                Water Treatment Skids
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Used for water purification in various industries</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Flow rate up to 5000 L/h</ListItem>
                <ListItem>Pressure: Up to 10 bar</ListItem>
                <ListItem>Conforming to international standards</ListItem>
                <ListItem>Materials: Stainless Steel, FRP, PVC</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>

        {/* Product 4: Hydraulic Power Units */}
        <Box
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize="xl" mb={4}>
                Hydraulic Power Units
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Used for controlling hydraulic systems</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Pressure rating: up to 350 bar</ListItem>
                <ListItem>Flow rate: up to 120 L/min</ListItem>
                <ListItem>Conforming to ISO 9001 standards</ListItem>
                <ListItem>Materials: Carbon Steel, Stainless Steel</ListItem>
              </List>
            </Box>
            <Flex justify="center" data-aos="fade-left">
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/skids-4.webp"
                alt="Hydraulic Power Units"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
          </Grid>
        </Box>

        {/* Product 5: Chemical Injection Skids */}
        <Box
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/skids-5.webp"
                alt="Chemical Injection Skids"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize="xl" mb={4}>
                Chemical Injection Skids
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Injection of chemicals for various industrial processes</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Pressure: up to 150 bar</ListItem>
                <ListItem>Flow rate: up to 200 L/h</ListItem>
                <ListItem>Materials: Stainless Steel, Carbon Steel</ListItem>
                <ListItem>Designed for hazardous chemicals</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkidSystems;
