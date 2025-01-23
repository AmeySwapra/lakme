import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1988);

  const timelineData = [
    {
      year: "1988",
      title: "Humble beginnings",
      description:
        "ENPRO was born in the backyard of the residence of our founder – Mr. Srikrishna Karkare. The initial years involved trading of valves and pumps.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1988.jpg",
      alt: "Humble beginnings",
    },
    {
      year: "1990",
      title: "Our first facility",
      description:
        "Our first dedicated workplace was set up at Parmar Industrial complex in Chinchwad with a meager area of 400sq.ft. and a small office on the mezzanine.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1990.jpg",
      alt: "Our first facility",
    },
    {
      year: "1992",
      title: "Growth",
      description:
        "As the business grew, we shifted to a bigger facility in Chinchwad which is commonly known as ‘D1’ within the company. This facility gave us a capacity to approach international customers.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1992.jpg",
      alt: "Growth",
    },
    {
      year: "1994",
      title: "First international order",
      description:
        "ENPRO was awarded its first international export order from Hitachi. Since then with Hitachi’s support, Enpro has never looked back and has become a major exporter of its products.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1994.jpg",
      alt: "First international order",
    },
    {
      year: "1997",
      title: "Domestic growth",
      description:
        "ENPRO bagged major orders from Reliance for fuel systems and chemical injections systems for the Jamnagar Phase 1 project.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1997.jpg",
      alt: "Domestic growth",
    },
    {
      year: "2000",
      title: "International expansion",
      description:
        "More growth meant a bigger work area. We moved to an even bigger facility in Pimpri which today is the Headquarters of Enpro, also known as ‘A17’. We added a couple of continents to our exports – North America and Europe – when we received our first work orders from GE, making ENPRO a truly global company.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2000.jpg",
      alt: "International expansion",
    },
    {
      year: "2002",
      title: "Quality Systems",
      description:
        "ENPRO received the ISO9000 certification for its quality systems and also set up a 100% export oriented unit (EOU).",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-1.png",
      alt: "Quality Systems",
    },
    {
      year: "2008",
      title: "Design Expertise",
      description:
        "ENPRO received the ASME ‘U’ Stamp for the design and manufacture of pressure vessels. We also received ARAMCO and PDO approval for our products in the same year. Design has been a big strength of ENPRO and these certifications added further credibility to its overall design and fabrication capability.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2.png",
      alt: "Design Expertise",
    },
    {
      year: "2011",
      title: "Shifting of Manufacturing to Markal",
      description:
        "Probably the boldest step in the history of ENPRO was shifting its manufacturing to the outskirts of the city at Markal. The completion of this World class manufacturing facility enhanced ENPRO’s manufacturing capacity several folds and ENPRO became arguably one of the largest and best equipped manufacturers of Lube-oil systems world-wide.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2011.jpg",
      alt: "Shifting of Manufacturing to Markal",
    },
    {
      year: "2014",
      title: "Integrated Management System",
      description:
        "Enpro’s manufacturing plant received the Integrated management System certification from Bureau Veritas comprising of ISO 9001:2015 for Quality, BS OHSAS 18001:2007 for Health and Safety and ISO 14001:2015 for Environment Management.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2014.jpg",
      alt: "Integrated Management System",
    },
    {
      year: "2017",
      title: "Enpro Saudi Arabia",
      description:
        "ENPRO established a joint venture in the Kingdom of Saudi Arabia to manufacture skids and process equipment locally in-Kingdom to contribute to Saudi Aramco’s IKTVA initiative.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2017.jpg",
      alt: "Enpro Saudi Arabia",
    },
    {
      year: "2018",
      title: "Factory Expansion",
      description:
        "ENPRO doubled its manufacturing capacity at Markal to accommodate its new ‘Process Equipment Division’, in a bid to diversify into different product lines and industries.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2018.jpg",
      alt: "Factory Expansion",
    },
    {
      year: "2020",
      title: "New Corporate Headquarters",
      description:
        "Enpro shifted into a new corporate headquarters ‘HQ’ in Pune and brought all of its office spaces to a single location to build a better synergy in the team. The state-of-the-art office is a LEED® Platinum rated green building with best-in-class facilities and a focus on employee well-being.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2020.jpg",
      alt: "New Corporate Headquarters",
    },
    {
      year: "2021",
      title: "R&D Division",
      description:
        "Enpro established a dedicated R&D division, which is a DSIR-certified facility. Located next to our Markal manufacturing plant, this division focuses on refining current products and developing new products for new-age industries.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2021.jpg",
      alt: "R&D Division",
    },
    {
      year: "2023",
      title: "Enpro Renewables",
      description:
        "Enpro established its third division – Enpro Renewables – which specializes in providing solutions to sustainable industry segments like Hydrogen, Bio-fuels, Waste-conversion, Solar and Wind.",
      image:
        "https://www.enproindustries.in/wp-content/uploads/2023/07/Timeline-2023.jpg",
      alt: "Enpro Renewables",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = timelineData.findIndex(
        (item) => item.year === selectedYear
      );
      const nextIndex = (currentIndex + 1) % timelineData.length;
      setSelectedYear(timelineData[nextIndex].year);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedYear, timelineData]);

  return (
    <Box py={10} bg="white">
      <Container maxW="container.xl">
        {/* Section Heading */}
        <Heading as="h2" size="xl" textAlign="center" mb={8} color="#d00000">
          Our Journey Through the Years
        </Heading>

        {/* Year Buttons */}
        <Flex justify="center" wrap="wrap" gap={2} mb={8}>
          {timelineData.map((item) => (
            <Button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              bg={selectedYear === item.year ? "#d00000" : "gray.200"}
              color={selectedYear === item.year ? "white" : "black"}
              variant="solid"
              _hover={{
                bg: selectedYear === item.year ? "#d00000" : "gray.300",
              }}
              mx={2}
              width="100px"
              height="40px"
            >
              {item.year}
            </Button>
          ))}
        </Flex>

        {/* Timeline Content */}
        <Box textAlign="center">
          {timelineData
            .filter((item) => item.year === selectedYear)
            .map((item) => (
              <Box key={item.year}>
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={6}
                  justifyContent="center"
                  alignItems="center"
                  mb={4}
                >
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      maxW="100%"
                      h={{ base: "200px", md: "300px" }}
                      objectFit="cover"
                      boxShadow="lg"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="xl" color={'#d00000'} fontWeight="bold" mb={2}>
                      {item.title}
                    </Text>
                    <Text fontSize="lg">{item.description}</Text>
                  </Box>
                </Grid>
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
