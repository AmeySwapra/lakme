import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import overviewBg from "../assets/bg/overviewBg.jpg";
import ob from "../assets/bg/ob.png";
import divider from '../assets/bg/divider.jpg';

const MotionGridItem = motion(GridItem);

const Overview = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const imageAnimation = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, type: "spring" },
    },
  };

  const textAnimation = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, type: "spring" },
    },
  };

  return (
    <Box className="container" py={8} px={{ base: 4, md: 8, lg: 24 }}>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 6, lg: 12 }}
        alignItems="center"
      >
        {isDesktop && (
          <MotionGridItem
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
            position="relative"
          >
            <Image
              src={overviewBg}
              alt="Enpro Office"
              w="100%"
              borderRadius="md"
              zIndex={1}
              mb={4}
              position="relative"
            />
            <Image
              src={ob}
              alt="Background Image"
              position="absolute"
              top="-20px"
              left="calc(100% - 40px)"
              width="60px"
              height="calc(100% + 40px)"
              zIndex={0}
            />
          </MotionGridItem>
        )}

        <GridItem>
          <motion.div initial="hidden" animate="visible" variants={textAnimation}>
            <Heading as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
              Enduring promise of the finest quality industrial products.
            </Heading>
            <Image
              src={divider}
              alt="Divider"
              mb={4}
            />
            <Text fontSize="md">
              Established in 1988, ENPRO is a world leader in design and manufacture of{" "}
              <strong>Mechanical Fluid Systems</strong> and <strong>Process Equipment</strong>.
              Over the past 33 years, ENPRO has supplied over 4000 systems, with more than 80%
              of its products exported to over 50 countries worldwide.
            </Text>
            <Text fontSize="md" mt={4}>
              Enpro specializes in{" "}
              <strong>customer-engineered, built-to-spec solutions</strong> for a variety of
              applications in Hydrogen, Energy, Oil & Gas, Power, Water, Petrochemical,
              Fertilizer, Defence, and Food industries. Our state-of-the-art manufacturing
              facilities are equipped to build the highest quality equipment and systems for
              the most stringent global standards.
            </Text>
          </motion.div>
        </GridItem>

        {!isDesktop && (
          <GridItem mt={6}>
            <Image
              src={overviewBg}
              alt="Enpro Office"
              w="100%"
              borderRadius="md"
            />
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default Overview;
