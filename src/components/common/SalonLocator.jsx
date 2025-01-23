import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { TbLocationDiscount } from "react-icons/tb";
import { PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SalonLocator = ({ currentPage }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");

  const handleSearch = () => {
    console.log("Search triggered:", { state, city, locality });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const bannerImages = [
    {
      src: "https://cdn4.singleinterface.com/files/enterprise/coverphoto/334963/banner-2-26-11-24-04-07-41.png",
      alt: "Bloom",
    },
    {
      src: "https://cdn4.singleinterface.com/files/enterprise/coverphoto/334963/banner-3-26-11-24-04-08-28.png",
      alt: "Natural",
    },
    {
      src: "https://cdn4.singleinterface.com/files/enterprise/coverphoto/334963/lakme-salon-13-12-24-04-47-21.jpg",
      alt: "Happy New You",
    },
    
  ];
  

  return (
    <Box py={10} px={{ base: 4, lg: 20 }}>
      <Container maxW="container.xl">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={10}
          justify="space-between"
        >
          {currentPage === "websiteHomepage" ? (
            <Box
              bg="#181818"
              padding="60px 30px"
              boxShadow="md"
              borderWidth="4px"
              borderColor="#fad298"
              borderRadius="lg"
              height="400px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              color="white"
            >
              {/* Header Section */}
              <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
                Lakme Salon
              </Text>

              {/* Body Section */}
              <VStack spacing={4} align="stretch">
                {/* Address */}
                <Flex align="center" spacing={3}>
                  <Icon as={TbLocationDiscount} boxSize={5} color="white" />
                  <Text>Ramphal Chowk, Sec 7 Dwarka, Delhi</Text>
                </Flex>

                {/* Full Address */}
                <Flex align="center" spacing={3}>
                  <Icon as={TbLocationDiscount} boxSize={5} color="white" />
                  <Text>
                    <address>
                      <span>
                        Property No D/415, 1st Floor, Ramphal Chowk Road
                      </span>
                      <br />
                      <span>Sector 7, Dwarka</span>
                      <br />
                      <span>New Delhi - 110045</span>
                    </address>
                  </Text>
                </Flex>

                {/* Phone Number */}
                <Flex align="center" spacing={3}>
                  <Icon as={PhoneIcon} boxSize={5} color="white" />
                  <Link href="tel:18441231952" color="white" fontWeight="bold">
                    18441231952
                  </Link>
                </Flex>

                {/* Store Hours */}
                <Flex align="center" spacing={3}>
                  <Icon as={TimeIcon} boxSize={5} color="white" />
                  <Text>
                    <span>Open until 09:00 PM</span>
                  </Text>
                </Flex>

                {/* Actions Section */}
                <Flex justify="space-between" mt={4}>
                  <Link
                    href="tel:18441231952"
                    color="white"
                    fontWeight="bold"
                    p={2}
                  >
                    <Button
                      color="black"
                      bg="linear-gradient(45deg, #e7bf88, #98734b)"
                      _hover={{
                        bg: "linear-gradient(45deg, #98734b, #e7bf88)",
                      }}
                      leftIcon={<PhoneIcon />}
                    >
                      Call
                    </Button>
                  </Link>
                  <Link
                    href="http://www.google.com/maps/place/28.5839722%2C77.071246"
                    target="_blank"
                    color="white"
                    fontWeight="bold"
                    p={2}
                  >
                    <Button
                      color="black"
                      bg="linear-gradient(45deg, #e7bf88, #98734b)"
                      _hover={{
                        bg: "linear-gradient(45deg, #98734b, #e7bf88)",
                      }}
                      leftIcon={<TbLocationDiscount />}
                    >
                      Directions
                    </Button>
                  </Link>
                </Flex>
              </VStack>
            </Box>
          ) : (
            <Box
              flex="1"
              bg="#181818"
              padding="60px 30px"
              boxShadow="md"
              borderWidth={"4px"}
              borderColor="#fad298"
              borderRadius="lg"
              height="400px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              color="white"
            >
              <Heading as="h2" size="lg" mb={4}>
                Lakme Salon
              </Heading>
              <Text mb={4}>Locate the nearest salon(s)</Text>
              <VStack spacing={4} align="stretch">
                <Input
                  placeholder="Search nearby salons by locality"
                  variant="filled"
                  bg="black"
                  color="white"
                  _placeholder={{ color: "white" }}
                  border="1px solid white"
                />
                <Text textAlign="center" fontWeight="bold">
                  OR
                </Text>
                <Select
                  placeholder="State*"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  bg="black"
                  color="white"
                  _placeholder={{ color: "white" }}
                  sx={{
                    "::placeholder": { color: "white" },
                    option: { color: "black" },
                  }}
                >
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="arunachal-pradesh">Arunachal Pradesh</option>
                  <option value="assam">Assam</option>
                  <option value="bihar">Bihar</option>
                  <option value="chandigarh">Chandigarh</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                </Select>
                <Select
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  isDisabled={!state}
                  bg="black"
                  color="white"
                  _placeholder={{ color: "white" }}
                  sx={{
                    option: { color: "black" },
                  }}
                >
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                </Select>
                <Select
                  placeholder="Locality"
                  onChange={(e) => setLocality(e.target.value)}
                  value={locality}
                  isDisabled={!city}
                  bg="black"
                  color="white"
                  _placeholder={{ color: "red" }}
                  sx={{
                    option: { color: "black" },
                  }}
                >
                  <option value="andheri">Andheri</option>
                  <option value="bandra">Bandra</option>
                </Select>
                <Button
                  color="black"
                  bg="linear-gradient(45deg, #e7bf88, #98734b)"
                  _hover={{ bg: "linear-gradient(45deg, #98734b, #e7bf88)" }}
                  onClick={handleSearch}
                  disabled={!locality}
                >
                  Search
                </Button>
              </VStack>
            </Box>
          )}

          <Box
            flex="2"
            height="min-content"
            display={{ base: "block", lg: "block" }}
            overflow="hidden"
          >
            <Slider {...settings}>
              {bannerImages.map((image, index) => (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={index}
                  borderRadius="md"
                  w="100%"
                  h="400px"
                  objectFit="contain"
                />
              ))}
            </Slider>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default SalonLocator;
