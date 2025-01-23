import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Grid,
  VStack,
} from "@chakra-ui/react";

const OutletCard = ({
  title,
  link,
  address,
  phone,
  directionLink,
  googleLink,
  openTime,
  rating,
}) => (
  <Box
    border="1px solid #ddd"
    borderRadius="md"
    overflow="hidden"
    boxShadow="lg"
    minHeight="400px"
    width="100%"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    p="4"
  >
    <VStack align="stretch">
      <Heading as="h3" size="md">
        <Link href={link} isExternal>
          {title}
        </Link>
      </Heading>

      <Flex justify="center" mb="2">
        <Box>{rating}</Box>
      </Flex>

      <Text fontSize="sm" color="gray.500">
        {address}
      </Text>

      <Text fontSize="sm" color="blue.500">
        <Link href={`tel:${phone}`}>{phone}</Link>
      </Text>

      <Text fontSize="sm" color="green.500">
        Open until {openTime}
      </Text>
    </VStack>

    <Flex justify="space-between" mt="4">
      <Button
        color="black"
        bg="linear-gradient(45deg, #e7bf88, #98734b)"
        _hover={{
          bg: "linear-gradient(45deg, #98734b, #e7bf88)",
        }}
        size="sm"
        as={Link}
        href={`tel:${phone}`}
      >
        Call
      </Button>
      <Button
        color="black"
        bg="linear-gradient(45deg, #e7bf88, #98734b)"
        _hover={{
          bg: "linear-gradient(45deg, #98734b, #e7bf88)",
        }}
        size="sm"
        as={Link}
        href={directionLink}
      >
        Directions
      </Button>
    </Flex>
  </Box>
);

const NearbyOutlets = () => {
  const outlets = [
    {
      title: "Lakme Salon",
      link: "https://salons.lakmesalon.in/lakme-salon-lal-sai-mandir-marg-janakpuri-delhi-beauty-parlour-janakpuri-new-delhi-349727/Home",
      address:
        "No 240, Block C2A, Lal Sai Mandir Marg, Janakpuri, New Delhi, Delhi - 110058",
      phone: "+918130354729",
      openTime: "09:00 PM",
      rating: "⭐⭐⭐⭐☆",
      directionLink: "https://maps.google.com/maps?cid=435194553910713102",
    },
    {
      title: "Lakme Salon",
      link: "https://salons.lakmesalon.in/lakme-salon-pushkar-enclave-paschim-vihar-delhi-beauty-parlour-paschim-vihar-new-delhi-349745/Home",
      address:
        "No G/133, Pushkar Enclave, Paschim Vihar, New Delhi, Delhi - 110063",
      phone: "+919971549785",
      openTime: "09:00 PM",
      rating: "⭐⭐⭐⭐☆",
      directionLink: "https://maps.google.com/maps?cid=8546364632848804903",
    },
    {
      title: "Lakme Salon",
      link: "https://salons.lakmesalon.in/lakme-salon-dwarka-delhi-beauty-parlour-dwarka-new-delhi-349748/Home",
      address: "Shop No. 6, Dwarka, New Delhi, Delhi - 110075",
      phone: "+919971549785",
      openTime: "09:00 PM",
      rating: "⭐⭐⭐⭐☆",
      directionLink: "https://maps.google.com/maps?cid=8546364632848804903",
    },
  ];

  return (
    <Box className="nearby_outlet_03" py={10} px={{ base: 4, md: 8, lg: 24 }}>
      <Heading as="h2" textAlign="center" fontSize="2xl" mb="6">
        Nearby Lakme Salon Salons
      </Heading>

      <Flex justify="center" align="center" direction="column">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }} // Responsive grid
          gap={6}
          justifyItems="center"
          width="100%"
        >
          {outlets.map((outlet, index) => (
            <OutletCard key={index} {...outlet} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default NearbyOutlets;
