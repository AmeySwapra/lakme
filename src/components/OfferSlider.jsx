import React from "react";
import { Box, Image, Text, Link, Flex, VStack, Button } from "@chakra-ui/react";
import Slider from "react-slick";

const offers = [
  {
    id: 1,
    title: "New Customers Offer",
    imgSrc:
      "https://cdn4.singleinterface.com/files/offer-images/2466413/home_page-479_1732775429_offer1.png",
    validTill: "30-04-2025",
    link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/New-Customers-Offer-2466413",
  },
  {
    id: 2,
    title: "Happy Hours Offer",
    imgSrc:
      "https://cdn4.singleinterface.com/files/offer-images/2466414/home_page-6685_1732775463_offer2.png",
    validTill: "30-04-2025",
    link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Happy-Hours-Offer-2466414",
  },
  {
    id: 3,
    title: "Birthday Offer",
    imgSrc:
      "https://cdn4.singleinterface.com/files/offer-images/2466415/home_page-6255_1732775493_offer3.png",
    validTill: "30-04-2025",
    link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Birthday-Makeup-Offer-2466415",
  },
  {
    id: 4,
    title: "Series Offer",
    imgSrc:
      "https://cdn4.singleinterface.com/files/offer-images/2466416/home_page-7126_1732775516_offer4.png",
    validTill: "30-04-2025",
    link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Series-Offer-2466416",
  },
];

const OfferSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          centerMode: true, 
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          centerMode: false, 
        },
      },
    ],
  };

  return (
    <Box maxW="100%" py={10} px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'}>
      <Slider {...settings}>
        {offers.map((offer) => (
          <Box
            key={offer.id}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            p={4}
            w="full"
          >
            <Link href={offer.link} isExternal>
              <Flex
                direction={{ base: "column", md: "row" }} 
                align="center"
                justify="space-evenly"
                wrap="wrap"
              >
                <Image
                  src={offer.imgSrc}
                  alt={offer.title}
                  objectFit="cover"
                  width={{ base: "100%", md: "70%" }} 
                  height="auto"
                  maxH="400px"
                  borderRadius="md"
                />
                <VStack
                  align="flex-start"
                  spacing={2}
                  ml={{ base: 0, md: 4 }}
                  maxW={{ base: "100%", md: "30%" }} 
                  mt={{ base: 4, md: 0 }}
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {offer.title}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    Valid till: {offer.validTill}
                  </Text>
                  <Button
                    color="black"
                    bg="linear-gradient(45deg, #e7bf88, #98734b)"
                    _hover={{
                      bg: "linear-gradient(45deg, #98734b, #e7bf88)",
                    }}
                    variant="outline"
                    mt={4}
                  >
                    View Details
                  </Button>
                </VStack>
              </Flex>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default OfferSlider;
