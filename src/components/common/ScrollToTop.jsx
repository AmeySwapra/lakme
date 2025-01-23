import React, { useState, useEffect } from "react";
import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex="10"
      display={isVisible ? "block" : "none"}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<ChevronUpIcon />}
        size="lg"
        fontSize="24px"
        bg="#fdb92e"
        color="white"
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
        onClick={scrollToTop}
        w="50px"
        h="50px"
      />
    </Box>
  );
};

export default ScrollToTop;
