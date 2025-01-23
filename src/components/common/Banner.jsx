import { useEffect, useState } from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Banner = ({ imageUrl, title, isAboutUs }) => {
  const [isExact1024, setIsExact1024] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsExact1024(window.innerWidth === 1024);
    };

    
    checkScreenSize();

  
    window.addEventListener("resize", checkScreenSize);

   
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const transformY = useBreakpointValue({
    base: isAboutUs ? "-150%" : "-225%",
    md: isAboutUs ? "-200%" : "-225%",
    lg: isExact1024 ? "-220%" : "-350%", 
  });

  return (
    <Box position="relative" height={{ base: "200px", md: "600px" }} overflow="hidden">
      <Box
        height="100%"
        backgroundImage={`url(${imageUrl})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      ></Box>

      <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="rgba(0, 0, 0, 0.1)" zIndex={1}></Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Box
          position="absolute"
          top="50%"
          left="10%"
          transform={`translateY(${transformY})`}
          textAlign="left"
          color="whiteAlpha.900"
          zIndex={2}
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            mb={2}
            fontWeight="bold"
            color="whiteAlpha.900"
          >
            {title}
          </Heading>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Banner;
