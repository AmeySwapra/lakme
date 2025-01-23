import React from "react";
import { Box, Text, Flex, Image, VStack, Container } from "@chakra-ui/react";
import contactbg from "../assets/bg/counter-bg.jpg";

const GeneralAbout = () => {
  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={{ base: 6, md: 12 }}
      color="white"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 8, lg: 24 }}
        gap={8}
        align="flex-start"
      >
        {/* Left Section */}
        <VStack align="flex-start" spacing={6} flex={{ md: "0.5" }}>
          <Text
            data-aos="fade-right"
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
          >
            ENPRO is short for
          </Text>
          <Text data-aos="fade-right">
            ‘Energy and Process’ – the two major applications of our products.
          </Text>

          <Text
            data-aos="fade-right"
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
          >
            ENPRO also stands for
          </Text>
          <Text data-aos="fade-right">
            ‘Enduring Promise’ – a promise of quality, integrity, reliability,
            and innovation.
          </Text>
        </VStack>

        {/* Right Section */}
        <VStack align="flex-start" spacing={4} flex={{ md: "0.7" }}>
          <Text
            data-aos="fade-down"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
          >
            ENPRO Industries is a family-owned business headquartered in Pune,
            India. We specialize in the design and manufacture of{" "}
            <strong>mechanical fluid systems</strong> and{" "}
            <strong>process equipment</strong> for a variety of applications in
            Hydrogen, Energy, Oil & Gas, Power, Water, Petrochemical,
            Fertilizer, Defence, and Food industries.
          </Text>
          <Text
            data-aos="fade-down"
            fontSize={{ base: "md", md: "lg" }}
            mt={2}
            lineHeight="tall"
          >
            We specialize in{" "}
            <strong>
              <span style={{ fontWeight: "bold" }}>
                custom-engineered, built-to-spec solutions
              </span>
            </strong>{" "}
            for a variety of applications complying with major global customer
            standards. ENPRO is a global leader in many of its product
            categories like ‘Lube-Oil Consoles’ and ‘Gas-Seal Panels’ with
            unmatched technical expertise and a global experience of 33+ years.
            Our state-of-the-art manufacturing facilities are equipped to build
            the highest quality equipment and systems for the most stringent
            global standards.
          </Text>
        </VStack>
      </Flex>

      {/* Bottom Section */}
      <Container maxW="container.lg" textAlign="center" mt={{ base: 6, md: 12 }}>
        <Text
          data-aos="flip-up"
          fontWeight="bold"
          fontSize={{ base: "lg", md: "xl" }}
        >
          ‘Customer is King’
        </Text>
        <Text
          data-aos="flip-up"
          mt={4}
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="tall"
        >
          ENPRO ensures that every customer is treated with respect and with
          special attention. This serves to be the first and foremost reason for
          ENPRO’s success. Our customer-centric teams continuously engage with
          customers right from the pre-bid phase to post-order completion to
          support them in all possible ways. Accommodating changes during
          projects and offering flexibility in engineering is our forte.
        </Text>
      </Container>
    </Box>
  );
};

export default GeneralAbout;
