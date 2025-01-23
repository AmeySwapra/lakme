import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

const cards = [
  {
    id: 1,
    title: "Skin",
    description:
      "Get glowing with our exclusive skin treatments using the Lakme Salon Professional Range. Enjoy innovations like Hydra Facial, all-natural Nature Nurture, and Dermalogica range of services.",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/334963/1349_1732624830_1895173080100102430X430Skin.png",
    link: "https://www.lakmesalon.in/all-services#skin-skincare-treatments-1",
  },
  {
    id: 2,
    title: "Hair",
    description:
      "Transform your style with our trendsetting hair services. From expert colouring and stylish cuts to rejuvenating hair spa treatments and advanced botox services.",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/334963/1827_1732624830_2619173080100101430X430Hair.png",
    link: "https://www.lakmesalon.in/all-services#hair-form-7",
  },
  {
    id: 3,
    title: "Makeup",
    description:
      "Get wedding ready with Lakme Salon's signature bridal makeup collection, Ethereal Bloom, perfect for all bridal occasions. We also offer makeup for every occasion.",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/334963/4918_1732624831_34941730801002430X430Makeup03.png",
    link: "https://www.lakmesalon.in/all-services#makeup-styling-13",
  },
  {
    id: 4,
    title: "Hands & Feet",
    description:
      "Pamper yourself with Lakme Salon's luxurious hands & feet services, including manicures and pedicures. Enjoy our nail art, nail extensions, gel polish & more.",
    image:
      "https://cdn4.singleinterface.com/files/banner_images/334963/2990_1732625087_HandsFeet.png",
    link: "https://www.lakmesalon.in/all-services#hands&feet-handcare-17",
  },
];

const FeaturedServices = () => {
  return (
    <Box py={10} px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Featured Services
      </Heading>

      
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
        spacing={6}
        justifyItems="center"
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            bg="black"
            border="2px solid #98734b"
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            w="100%"
            maxW="300px"
          >
            <Image
              src={card.image}
              alt={card.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box bg="black" p={4} color="white" textAlign="center">
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {card.title}
              </Text>
              <Text fontSize="sm">{card.description}</Text>
            </Box>
            <VStack py={4} bg="black">
              <Button
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{
                  bg: "linear-gradient(45deg, #98734b, #e7bf88)",
                }}
                size="md"
                
              >
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedServices;
