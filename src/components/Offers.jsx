import React, { useRef } from "react";
import { Box, Heading, Text, Image, Link, SimpleGrid, Button, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const MotionBox = motion(Box);

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "New Customers Offer",
      imgSrc: "https://cdn4.singleinterface.com/files/offer-images/2466413/home_page-479_1732775429_offer1.png",
      validTill: "30-04-2025",
      link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/New-Customers-Offer-2466413",
    },
    {
      id: 2,
      title: "Happy Hours Offer",
      imgSrc: "https://cdn4.singleinterface.com/files/offer-images/2466414/home_page-6685_1732775463_offer2.png",
      validTill: "30-04-2025",
      link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Happy-Hours-Offer-2466414",
    },
    {
      id: 3,
      title: "Birthday Makeup Offer",
      imgSrc: "https://cdn4.singleinterface.com/files/offer-images/2466415/home_page-6255_1732775493_offer3.png",
      validTill: "30-04-2025",
      link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Birthday-Makeup-Offer-2466415",
    },
    {
      id: 4,
      title: "Series Offer",
      imgSrc: "https://cdn4.singleinterface.com/files/offer-images/2466416/home_page-7126_1732775516_offer4.png",
      validTill: "30-04-2025",
      link: "https://salons.lakmesalon.in/lakme-salon-ramphal-chowk-sec-7-dwarka-delhi-beauty-salons-sector-7-dwarka-new-delhi-349730/Offers/Series-Offer-2466416",
    },
  ];

  const getRandomDirection = () => {
    const directions = [
      { x: 200, y: 0 }, 
      { x: -200, y: 0 }, 
      { x: 0, y: 200 }, 
      { x: 0, y: -200 }, 
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <Box as="section" py={10} overflow={'hidden'}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Offers
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} px={{ base: 4, md: 8, lg: 24 }} spacing={8}>
        {offers.map((offer) => {
          const randomDirection = getRandomDirection();
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <MotionBox
              key={offer.id}
              ref={ref}
              initial={{ ...randomDirection, opacity: 0 }}
              animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 5 }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)" }}
              transitionTimingFunction="ease-in-out"
            >
              <Link href={offer.link} target="_blank" _hover={{ textDecoration: "none" }}>
                <Image src={offer.imgSrc} alt={offer.title} />
              </Link>
              <VStack spacing={4} p={6} align="center">
                <Text fontWeight="bold" fontSize="lg" color="gray.700" textAlign="center">
                  {offer.title}
                </Text>
                <Text fontSize="sm" color="gray.500" textAlign="center">
                  Valid Till: {offer.validTill}
                </Text>
                <Button
                  as={Link}
                  href={offer.link}
                  target="_blank"
                  color="black"
                  bg="linear-gradient(45deg, #e7bf88, #98734b)"
                  _hover={{ bg: "linear-gradient(45deg, #98734b, #e7bf88)" }}
                  size="md"
                >
                  View Details
                </Button>
              </VStack>
            </MotionBox>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Offers;
