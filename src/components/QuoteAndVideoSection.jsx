import React from "react";
import { Box, Container, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import li from "../assets/bg/li.png";
import ri from "../assets/bg/ri.png";

const MotionBox = motion(Box);

const QuoteAndVideoSection = () => {
  const leftImagePosition = useBreakpointValue({
    base: "-40px",
    sm: "-60px",
    md: "-100px",
    lg: "-150px",
  });

  const rightImagePosition = useBreakpointValue({
    base: "-40px",
    sm: "-60px",
    md: "-100px",
    lg: "-150px",
  });

  return (
    <Box
      py={{ base: 6, md: 10, lg: 24 }}
      overflowX="hidden" // Prevent horizontal scrolling
    >
      <Container maxW="container.lg" px={{ base: 4, md: 8 }}>
        {/* Quote Section */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          overflow="hidden" // Ensure images do not overflow
        >
          {/* Left Quote Icon */}
          <Image
            src={li}
            alt="Left Quote Icon"
            position="absolute"
            left={leftImagePosition}
            top={{ base: "50%", lg: "0" }}
            transform="translateY(-50%)"
            zIndex={1}
            w={{ base: "30px", sm: "40px", md: "60px", lg: "80px" }}
          />
          {/* Quote Text */}
          <MotionBox
            className="quote-text"
            maxWidth={{ base: "100%", md: "90%", lg: "80%" }}
            mx="auto"
            px={{ base: 4, md: 8 }}
            pt={4}
            pb={6}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 8 }}
          >
            <Text
              fontSize={{ base: "16px", sm: "18px", md: "22px", lg: "30px" }}
              fontWeight="bold"
              lineHeight="1.5"
            >
              Our Mission: To be a world leader in energy &amp; process equipment with a focus on
              <br />
              realising the transition to clean energy.
            </Text>
          </MotionBox>
          {/* Right Quote Icon */}
          <Image
            src={ri}
            alt="Right Quote Icon"
            position="absolute"
            right={rightImagePosition}
            top={{ base: "50%", lg: "100%" }}
            transform="translateY(-50%)"
            zIndex={1}
            w={{ base: "30px", sm: "40px", md: "60px", lg: "80px" }}
          />
        </Box>

        {/* Video Section */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={{ base: 4, md: 8 }}
          borderRadius="md"
        >
          <Box
            as="iframe"
            width="100%"
            maxWidth="800px"
            height={{ base: "200px", sm: "250px", md: "315px" }}
            src="https://www.youtube.com/embed/DPDFUcAMySQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default QuoteAndVideoSection;
