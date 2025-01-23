import React from "react";
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import divider from '../assets/bg/divider.jpg'
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const EnproContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Box textAlign="center" mb={8}>
        <MotionHeading
          size="xl"
          mb={4}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
        >
          Contact Us
        </MotionHeading>
        <Box
          bgImage={`url(${divider})`}
          bgSize="cover"
          bgPosition="center"
          h="3px"
          w={'10%'}
          mx="auto"
        ></Box>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        w="100%"
        p={{ base: 4, md: 8, lg: 24 }}
        ref={ref}
      >
        {/* Left Section */}
        <MotionBox
          bg="#d00000"
          color="white"
          p="30px 60px"
          w={{ base: "100%", md: "45%" }}
          textAlign="left"
          boxShadow="lg"
          initial={{ x: "-200px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2 }}
        >
          <MotionHeading
            size="md"
            mb={4}
            display="flex"
            alignItems="center"
            gap={2}
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            <Icon as={FaMapMarkerAlt} />
            <Box>ENPRO SAUDI ARABIA LTD</Box>
          </MotionHeading>

          <MotionText
            fontSize="lg"
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            Makkah Street - 148, Cross - 81, 2nd Dammam Industrial City, Dammam
            34331, Saudi Arabia
          </MotionText>

          <MotionHeading
            size="md"
            mt={6}
            mb={4}
            display="flex"
            alignItems="center"
            gap={2}
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            <Icon as={FaPhoneAlt} />
            <Box>PHONE</Box>
          </MotionHeading>

          <MotionText
            fontSize="lg"
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 3 }}
          >
            +966 13 834 7721
          </MotionText>
        </MotionBox>

        {/* Right Section */}
        <MotionBox
          w={{ base: "100%", md: "65%" }}
          bg="white"
          boxShadow="lg"
          h="400px"
          initial={{ y: "-200px", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.564589076438!2d73.80072811420595!3d18.638643970418578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b849bf4eb72f%3A0xd6d5612f2f70b8ba!2sEnpro%20Industries%20Pvt.%20Ltd%20Headquarters.!5e0!3m2!1sen!2sin!4v1648207375065!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </MotionBox>
      </Flex>
    </>
  );
};

export default EnproContact;
