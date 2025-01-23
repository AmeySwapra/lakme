import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { motion } from "framer-motion";
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import banner4 from '../assets/banner/banner4.webp';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeCard() {
  const [slider, setSlider] = useState(null);
  const [animationKey, setAnimationKey] = useState(Math.random());

  const intervalRef = useRef(null);

  const cards = [
    {
      title: "CRITICAL PROCESS EQUIPMENTS",
      image: banner1,
    },
    {
      title: "WORLD CLASS MANUFACTURING FACILITIES",
      image: banner2,
    },
    {
      title: "SUSTAINABLE OPERATIONS",
      image: banner3,
    },
    {
      title: "ENGINEERED SKID SYSTEM",
      image: banner4,
    },
  ];

  const letterAnimation = {
    hidden: { x: 500, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 50 },
    }),
  };

  const startAutoSlide = () => {
    if (slider) {
      intervalRef.current = setInterval(() => {
        slider.slickNext();
        setAnimationKey(Math.random());
      }, 5000);
    }
  };

  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  React.useEffect(() => {
    startAutoSlide();
    return clearAutoSlide;
  }, [slider]);

  return (
    <Box
      position="relative"
      height={{ base: "400px", md: "600px" }}
      width="full"
      overflow="hidden"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "10px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: "10px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>

      <Slider
        {...settings}
        ref={(c) => setSlider(c)}
        beforeChange={(current, next) => {
          setAnimationKey(Math.random());
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ base: "400px", md: "600px" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
           
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.4)" 
            />

            <Container size="container.xl" height="100%" position="relative">
              <Stack
                spacing={4}
                position="absolute"
                top="50%" 
                left="50%" 
                transform="translate(-50%, -50%)" 
                color="white"
                textAlign="center" 
                width="auto"
              >
                <Heading
                  fontSize={{base: '30px', md: '45px', lg: '58px'}} 
                  lineHeight="shorter"
                  letterSpacing="wide"
                >
                  {card.title.split("").map((letter, i) => (
                    <motion.span
                      key={`${index}-title-${i}`}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
