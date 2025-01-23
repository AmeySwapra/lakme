import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificationApprovals = () => {
  const certificates = [
    [
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/AD-2000-MERKBLATT-HP-CERTIFICATE.jpg',
        alt: 'AD-2000-MERKBLATT-HP-CERTIFICATE',
        name: 'AD-2000-MERKBLATT-HP-CERTIFICATE',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/Aramco.jpg',
        alt: 'Aramco',
        name: 'Aramco',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/EIL-Revalidation.jpg',
        alt: 'EIL-Revalidation',
        name: 'EIL-Revalidation',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/IMS-Certificate.jpg',
        alt: 'IMS-Certificate',
        name: 'IMS-Certificate',
      },
    ],
    [
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/ISO-3834-2.jpg',
        alt: 'ISO-3834-2',
        name: 'ISO-3834-2',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/ISO-3834-2-ANNEXURE.jpg',
        alt: 'ISO-3834-2-ANNEXURE',
        name: 'ISO-3834-2-ANNEXURE',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/MCCIA.jpg',
        alt: 'MCCIA',
        name: 'MCCIA',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/ONGC.jpg',
        alt: 'ONGC',
        name: 'ONGC',
      },
    ],
    [
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/Toyo-Engg-Approved-Vendor.jpg',
        alt: 'Toyo-Engg-Approved-Vendor',
        name: 'Toyo-Engg-Approved-Vendor',
      },
      {
        src: 'https://www.enproindustries.in/wp-content/uploads/2023/06/Vendor-Approval-to-nadhira-from-PDO-Enpro-as-prinicipal.jpg',
        alt: 'Vendor-Approval-to-nadhira-from-PDO-Enpro-as-prinicipal',
        name: 'Vendor Approval to Nadhira',
      },
    ],
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Box py={10} overflowX={'hidden'}>
      <Container maxW="container.xl">
        <Heading textAlign="center" size="lg" mb={5} data-aos="fade-down">
          Certification &amp; <Text as="span" color="red.500">Approvals</Text>
        </Heading>
        <Box textAlign="center" mb={5}>
          <Image
            src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
            alt="divider"
            mx="auto"
            data-aos="fade-down"
          />
        </Box>
        <Box data-aos="fade-down">
          <Slider {...settings}>
            {certificates.map((group, index) => (
              <Box key={index} px={5}>
                <Box display="flex" justifyContent="center" flexWrap="wrap">
                  {group.map((cert, idx) => (
                    <VStack
                      key={idx}
                      mx={2}
                      mb={5}
                      boxShadow="md"
                      p={3}
                      borderRadius="md"
                      bg="white"
                    >
                      <a href={cert.src} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={cert.src}
                          alt={cert.alt}
                          boxSize="200px"
                          objectFit="cover"
                          data-aos="zoom-in"
                        />
                      </a>
                      <Text fontSize="sm" textAlign="center">
                        {cert.name}
                      </Text>
                    </VStack>
                  ))}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationApprovals;
