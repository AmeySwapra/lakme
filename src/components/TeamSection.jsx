import React from "react";
import { Box, Flex, Heading, Text, Image, VStack, Stack } from "@chakra-ui/react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "SRIKRISHNA KARKARE",
      title: "Founder, Chairman and Managing Director | IIT Bombay",
      description:
        "Srikrishna graduated as a Mechanical Engineer from IIT Bombay. After short stints with Eicher and Thermax, he took the entrepreneurial path and founded Enpro Industries in 1988. Srikrishna is well versed in Oil & Gas industrial products and has a keen interest in product development, sustainability and mountaineering.",
      img: "https://www.enproindustries.in/wp-content/uploads/2023/07/srikrishna-karkare.png",
      imgFlip: "left",
    },
    {
      name: "ALKA KARKARE",
      title: "Joint Managing Director | IIT Bombay",
      description:
        "Alka is a Chemical Engineer from IIT Bombay. After working with Praj in their early years, Alka co-founded Enpro Industries with Srikrishna. A proud woman leader, Alka leads the Engineering, Project Management, HR and Admin functions.",
      img: "https://www.enproindustries.in/wp-content/uploads/2023/07/alka-karkare.png",
      imgFlip: "right",
    },
    {
      name: "ANUJ KARKARE",
      title: "Deputy Managing Director | IIT Bombay | INSEAD Business School",
      description:
        "An alumnus of IIT Bombay and INSEAD Business school, Anuj is the second generation and Deputy Managing Director at Enpro Industries. Anuj leads the strategy and digitization initiatives at Enpro. He is a promoter of sustainable commuting through electric mobility and cycle-to-work initiatives. He is an Ironman New Zealand finisher, and an avid marathoner and mountaineer.",
      img: "https://www.enproindustries.in/wp-content/uploads/2023/07/anuj-karkare.png",
      imgFlip: "left",
    },
  ];

  return (
    <Box as="section" py={12} px={{base: 4, md:8, lg:24}} bg="gray.50">
      <Box textAlign="center" mb={8}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          <Text as="span" color="red.500">
            Team
          </Text>
        </Heading>
        <Image
          src="https://www.enproindustries.in/wp-content/themes/enpro/assets/images/heading-hr.jpg"
          alt="heading-hr1"
          mx="auto"
        />
      </Box>

      {teamMembers.map((member, index) => (
        <Flex
          key={member.name}
          direction={{ base: "column", md: index % 2 === 1 ? "row-reverse" : "row" }}
          align="center"
          mb={12}
        >
          {/* Team Image */}
          <Box flex="1" textAlign="center" mb={{ base: 6, md: 0 }}>
            <Image
              src={member.img}
              alt={member.name}
              borderRadius="md"
              boxShadow="lg"
              data-aos={`flip-${member.imgFlip}`}
            />
          </Box>

          {/* Team Info */}
          <VStack flex="2" align="start" spacing={4} px={{ base: 4, md: 8 }}>
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} data-aos="fade-down">
              {member.name}
            </Heading>
            <Text fontWeight="medium" color="gray.600" data-aos="fade-down">
              {member.title}
            </Text>
            <Text color="gray.700" data-aos="fade-down">
              {member.description}
            </Text>
          </VStack>
        </Flex>
      ))}
    </Box>
  );
};

export default TeamSection;
