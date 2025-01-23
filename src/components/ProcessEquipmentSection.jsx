import { Box, Container, Heading, Text, Grid, Flex, Image, List, ListItem, Divider } from "@chakra-ui/react";

const ProcessEquipmentSection = () => {
  return (
    <Box py={12} overflowX="hidden">
      <Container maxW="container.lg">
        <Heading as="h1" mb={4} textAlign="center" data-aos="fade-down">
          Process <Text as="span" color="red.500">Equipment</Text>
        </Heading>
        
        <Box textAlign="center" data-aos="fade-down">
          <Image 
            src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg" 
            alt="heading-hr1"
            mx="auto"
          />
        </Box>

        {/* Product 1: Gas Coolers */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-1.webp" 
                alt="Gas Coolers"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                <strong>Gas</strong> Coolers
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Intercoolers and Aftercoolers for Centrifugal Compressors</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Plain tube and Plate-fin type</ListItem>
                <ListItem>Up to 300,000kg/h flows</ListItem>
                <ListItem>Pressure Drop up to 30mBar</ListItem>
                <ListItem>Conforming to TEMA RCB, ASME, AD Merkblatter, EN13445</ListItem>
                <ListItem>Materials: Copper alloy, Nickel Alloy, SS304L, SS316L, SS904L, Titanium, Super Duplex</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>

        {/* Product 2: Shell & Tube Heat Exchangers */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                <strong>Shell</strong> & Tube Heat Exchangers
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Applications: ZLD / Desalination / Chemical / Food / Oil & Gas / Power / Pharmaceutical</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Optimally designed for high performance and long life using PVElite, NozzlePro and HTRI</ListItem>
                <ListItem>Conforming to TEMA RCB</ListItem>
                <ListItem>Material: Stainless Steel, Carbon Steel, Admirality Brass, Duplex, Cupro Nickel, Titanium Grade 2, Super Duplex Stainless Steel</ListItem>
              </List>
            </Box>
            <Flex justify="center" data-aos="fade-left">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-2.webp" 
                alt="Shell & Tube Heat Exchangers"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
          </Grid>
        </Box>

        {/* Product 3: Pressure Vessels */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-3.webp" 
                alt="Pressure Vessels"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                <strong>Pressure</strong> Vessels
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>For normal as well as hazardous application</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Optimally designed for high performance and long life using PVElite and NozzlePro software</ListItem>
                <ListItem>Diameter: Up to 4m</ListItem>
                <ListItem>Length: Up to 50m</ListItem>
                <ListItem>Weight: Up to 100Ton</ListItem>
                <ListItem>Thickness: Up to 100mm</ListItem>
                <ListItem>Materials: Incoloy 825, Super Duplex and Super Austenitic Stainless Steel, SS316, SS304, Carbon Steel</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>

        {/* Product 4: Crystallizers */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                Crystallizers
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>Applications: Zero Liquid Discharge and Chemicals</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>MOC: Super Duplex and Super Austenitic Stainless Steel</ListItem>
              </List>
            </Box>
            <Flex justify="center" data-aos="fade-left">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-4-2.webp" 
                alt="Crystallizers"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
          </Grid>
        </Box>

        {/* Product 5: Condensers */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Flex justify="center" data-aos="fade-right">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-5.webp" 
                alt="Condensers"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                Condensers
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>For Power applications</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Tubes: Admirality Brass, Titanium, Super Duplex, Super Austenitic Stainless Steel</ListItem>
                <ListItem>Shell: Carbon Steel</ListItem>
              </List>
            </Box>
          </Grid>
        </Box>

        {/* Product 6: Air Coolers */}
        <Box 
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
          backgroundSize="cover"
          py={12}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} alignItems="center">
            <Box data-aos="fade-down">
              <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                Air Coolers
              </Heading>
              <Divider my={4} />
              <Text fontWeight="bold">Application:</Text>
              <List spacing={2}>
                <ListItem>For natural gas application</ListItem>
              </List>
              <Text fontWeight="bold" mt={3}>Specifications:</Text>
              <List spacing={2}>
                <ListItem>Material: Stainless Steel, Carbon Steel</ListItem>
              </List>
            </Box>
            <Flex justify="center" data-aos="fade-left">
              <Image 
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/Process-equipment-6.webp" 
                alt="Air Coolers"
                boxSize="full"
                objectFit="contain"
              />
            </Flex>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default ProcessEquipmentSection;
