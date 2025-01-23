import { Box, Container, Heading, Text, Image, UnorderedList, ListItem, Flex } from '@chakra-ui/react';
import renewableslogo from '../assets/logo/renewable-logo.png'
import divider from '../assets/bg/divider.jpg'
const Renewables = () => {
  return (
    <Box className="our-solution sec-padding" py={{ base: 6, md: 12 }}>
      <Container>
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          mb={4}
          data-aos="fade-down"
        >
          <span className="clr-red">Renewables</span>
        </Heading>

        <Box textAlign="center">
          <Image
            src={divider}
            alt="heading-hr1"
            className="heading-hr1"
            data-aos="fade-down"
            mb={4}
          />
        </Box>

        <Box textAlign="center">
          <Image
            src={renewableslogo}
            alt="Renewable Logo"
            className="renewable-logo"
            data-aos="flip-down"
            mb={4}
            maxW="200px"
            mx="auto"
          />
        </Box>

        <Box
          className="product-home-1"
          backgroundImage="url(https://www.enproindustries.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
          backgroundSize="cover"
          backgroundPosition="center"
          py={{ base: 6, md: 12 }}
        >
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
            <Box
              flex="1"
              order={{ base: 2, md: 1 }}
              textAlign="center"
              data-aos="fade-right"
            >
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/08/renewables-2.webp"
                alt="Renewables Image"
                className="img-fluid"
                boxSize="100%"
                objectFit="contain"
              />
            </Box>

            <Box flex="1" order={{ base: 1, md: 2 }} data-aos="fade-down">
              <Box className="solu-cont">
                <Heading as="h2" size="lg" mb={4}>
                  <Text as="span" fontWeight="bold" fontSize="xl">
                    Containerized packages
                  </Text>
                  &nbsp;or Modular Skids
                </Heading>
                <Image
                  src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
                  alt="heading-hr"
                  className="heading-hr1"
                  mb={4}
                />
                <Box className="solu-cont">
                  <Text as="strong" mb={2}>Applications:</Text>
                  <UnorderedList spacing={2} mb={4}>
                    <ListItem>Gasification Modules</ListItem>
                    <ListItem>Pyrolysis Packages</ListItem>
                    <ListItem>Electrolyzer Balance of Plants</ListItem>
                    <ListItem>Electrochemical Hydrogen Compressor</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Renewables;
