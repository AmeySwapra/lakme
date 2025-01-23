import React from "react";
import { Box, Image, Text, Link, Button, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialTimeline = ({ limit = 0 }) => { 
  const timelineData = [
    {
      link: "https://salons.lakmesalon.in/lakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852/TimelineDetails/336839",
      title: "This win is worth its weight in gold Congratulations to Anisha for spinning her way to a gold coin. Manifest a Happy New You by spinning the wheel with the link in our bio and stand a chance to win a gold coin",
      image: {
        src: "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/473888040_18482642596028488_1352100746211108363_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hvQ53_Aju-kQ7kNvgEORHNq&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApDwjCLyh2g4PbEZJtUm-AN&oh=00_AYAzySoXn0yID-zOdjtppu-HjjYJzOFpyuDeBwnrtV7Qww&oe=679537C0",
        alt: "This win is worth its weight in gold Congratulations to Anisha for spinning her way to a gold coin",
      },
      message: "This win is worth its weight in gold! Congratulations to Anisha for spinning her way to a gold coin. Manifest a Happy New You by spinning the wheel with the link in our bio and stand a chance to win a gold coin!",
      postedOn: "20 Jan 2025 12:31 PM",
      shares: [
        {
          platform: "Facebook",
          shareLink: "https://www.shareaholic.com/api/share/?v=2&apitype=1&apikey=30d081a8c9fac908c376e9c37db6fded&service=5&media_link=https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/473888040_18482642596028488_1352100746211108363_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hvQ53_Aju-kQ7kNvgEORHNq&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApDwjCLyh2g4PbEZJtUm-AN&oh=00_AYAzySoXn0yID-zOdjtppu-HjjYJzOFpyuDeBwnrtV7Qww&oe=679537C0&link=https%3A%2F%2Fsalons.lakmesalon.in%2Flakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852%2FTimelineDetails%2F336839&source=store_locator&tags=",
          icon: <FaFacebook />,
          ariaLabel: "Share on Facebook",
        },
        {
          platform: "Linkedin",
          shareLink: "https://www.shareaholic.com/api/share/?v=2&apitype=1&apikey=30d081a8c9fac908c376e9c37db6fded&service=88&title=This+win+is+worth+its+weight+in+gold%21+Congratulations+to+Anisha+for+spinning+her+way+to+a+gold+coin.+%0AManifest+a+Happy+New+You+by+spinning+the+wheel+with+the+link+in+our+bio+and+stand+a+chance+to+win+a+gold+coin%21&link=https%3A%2F%2Fsalons.lakmesalon.in%2Flakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852%2FTimelineDetails%2F336839&source=store_locator&tags=",
          icon: <FaLinkedin />,
          ariaLabel: "Share on LinkedIn",
        },
      ],
    },
    
    {
      link: "https://example.com/timeline/1",
      title: "Exciting new trends in 2025! Discover what's hot in fashion this year.",
      image: {
        src: "https://cdn4.singleinterface.com/files/offer-images/2466413/home_page-479_1732775429_offer1.png",
        alt: "Exciting new trends in 2025!",
      },
      message: "Stay updated with the latest fashion trends of 2025. Click the link to explore!",
      postedOn: "15 Jan 2025 10:00 AM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/fashion", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/fashion", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    {
      link: "https://example.com/timeline/2",
      title: "Meet our team of talented professionals at the upcoming workshop.",
      image: {
        src: "https://cdn4.singleinterface.com/files/offer-images/2466414/home_page-6685_1732775463_offer2.png",
        alt: "Upcoming workshop image",
      },
      message: "Join us for an exclusive workshop with industry experts. Register now!",
      postedOn: "14 Jan 2025 2:45 PM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/workshop", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/workshop", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    {
      link: "https://example.com/timeline/3",
      title: "5 tips for flawless makeup - expert advice from our stylists.",
      image: {
        src: "https://cdn4.singleinterface.com/files/offer-images/2466415/home_page-6255_1732775493_offer3.png",
        alt: "Makeup tips image",
      },
      message: "Discover expert makeup tips to achieve the perfect look. Click to learn more!",
      postedOn: "12 Jan 2025 9:30 AM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/makeup", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/makeup", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    {
      link: "https://example.com/timeline/4",
      title: "Announcing our new product line - Skincare Revolution.",
      image: {
        src: "https://cdn4.singleinterface.com/files/offer-images/2466416/home_page-7126_1732775516_offer4.png",
        alt: "Skincare revolution image",
      },
      message: "Introducing our latest skincare products. Experience the change today!",
      postedOn: "10 Jan 2025 6:00 PM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/skincare", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/skincare", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    {
      link: "https://example.com/timeline/5",
      title: "A glimpse into our charitable initiatives for the community.",
      image: {
        src: "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/473888040_18482642596028488_1352100746211108363_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hvQ53_Aju-kQ7kNvgEORHNq&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApDwjCLyh2g4PbEZJtUm-AN&oh=00_AYAzySoXn0yID-zOdjtppu-HjjYJzOFpyuDeBwnrtV7Qww&oe=679537C0",
        alt: "Charity event image",
      },
      message: "Making a difference together! Learn more about our community initiatives.",
      postedOn: "8 Jan 2025 11:15 AM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/charity", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/charity", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    {
      link: "https://example.com/timeline/6",
      title: "Happy New Year 2025 - Let's make it a year to remember!",
      image: {
        src: "https://cdn4.singleinterface.com/files/offer-images/2466415/home_page-6255_1732775493_offer3.png",
        alt: "Happy New Year 2025 image",
      },
      message: "Wishing you a wonderful New Year filled with success and happiness!",
      postedOn: "1 Jan 2025 12:00 AM",
      shares: [
        { platform: "Facebook", shareLink: "https://facebook.com/share/newyear", icon: <FaFacebook />, ariaLabel: "Share on Facebook" },
        { platform: "LinkedIn", shareLink: "https://linkedin.com/share/newyear", icon: <FaLinkedin />, ariaLabel: "Share on LinkedIn" },
      ],
    },
    
  ];
  


  const displayedData = limit > 0 ? timelineData.slice(0, limit) : timelineData;

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} py={4} px={{ base: 4, md: 8, lg: 24 }}>
      {displayedData.map((item, index) => (
        <GridItem key={index}>
          <Box borderRadius="lg" overflow="hidden" boxShadow="lg" bg="black" color="white" p={4} height="600px" display="flex" flexDirection="column" justifyContent="space-between">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={item.image.src} alt={item.image.alt} width="100%" height="250px" objectFit="contain" borderRadius="md" />
            </Link>
            <Box>
              <Text fontWeight="bold" fontSize="md" mt={2}>
                {item.title}
              </Text>
              <Text mt={2} fontSize="sm" noOfLines={3}>
                {item.message}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" mt={2}>
                Posted on: {item.postedOn}
              </Text>
              <HStack spacing={4} mt={2}>
                {item.shares.map((share, shareIndex) => (
                  <Link key={shareIndex} href={share.shareLink} target="_blank" rel="noopener noreferrer" aria-label={share.ariaLabel}>
                    <Button leftIcon={share.icon} colorScheme="blue" size="xs">
                      {share.platform}
                    </Button>
                  </Link>
                ))}
              </HStack>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SocialTimeline;













