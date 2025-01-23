import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

import divider2 from "../assets/bg/divider2.jpg";
import net from "../assets/logo/net.png";
import set from "../assets/logo/set.png";
import indus from "../assets/logo/indus.png";
import global from "../assets/logo/global.png";
import people from "../assets/logo/people.png";
import hook from "../assets/logo/hook.png";
import contactbg from "../assets/bg/counter-bg.jpg";

const CompanyNumbers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={{ base: 6, md: 8, lg: 16 }}
      height="auto"
      overflowX={"hidden"}
    >
      <Container maxW="container.xl">
        
        <Heading
          as="h2"
          textAlign="center"
          color="white"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={{ base: 4, md: 6, lg: 8 }}
          data-aos="fade-down"
        >
          Company in Numbers
        </Heading>

      
        <Box
          textAlign="center"
          mb={8}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={divider2}
            alt="divider"
            data-aos="fade-down"
            maxW={{ base: "80%", md: "60%" }}
          />
        </Box>

        
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 6, md: 8 }}
          textAlign={{ base: "center", lg: "center" }}
        >
          
          <GridItem
            data-aos="fade-left"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", lg: "center" }}
            justifyContent={{ lg: "center" }}
          >
            <Box>
              <Heading
                as="h3"
                size="lg"
                color="white"
                mb={{ base: 4, md: 6 }}
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Global Presence
              </Heading>

              
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
                mb={6}
              >
                <Image
                  src={set}
                  alt="Active systems"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    4000+
                  </Text>
                  <Text color="white">Active systems worldwide</Text>
                </Box>
              </Box>

              
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
                mb={6}
              >
                <Image
                  src={net}
                  alt="International clients"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    125+
                  </Text>
                  <Text color="white">International clients</Text>
                </Box>
              </Box>

              
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
              >
                <Image
                  src={global}
                  alt="Countries of installation"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    50+
                  </Text>
                  <Text color="white">Countries of installation</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

         
          <GridItem
            data-aos="fade-right"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", lg: "center" }}
            justifyContent={{ lg: "center" }}
          >
            <Box>
              <Heading
                as="h3"
                size="lg"
                color="white"
                mb={{ base: 4, md: 6 }}
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Scale and Size
              </Heading>

              
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
                mb={6}
              >
                <Image
                  src={hook}
                  alt="Lifting capacity"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    100Ton
                  </Text>
                  <Text color="white">Lifting capacity</Text>
                </Box>
              </Box>

              
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
                mb={6}
              >
                <Image
                  src={indus}
                  alt="Manufacturing space"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    30,000m²
                  </Text>
                  <Text color="white">M² manufacturing space</Text>
                </Box>
              </Box>

             
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
              >
                <Image
                  src={people}
                  alt="Employees"
                  boxSize={{ base: "40px", md: "50px" }}
                />
                <Box ml={{ sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    500+
                  </Text>
                  <Text color="white">Employees</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CompanyNumbers;
