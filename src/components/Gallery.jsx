import { Box, Container, Grid, Heading, Image, Text } from '@chakra-ui/react';

const galleryItems = [
  {
    href: "https://salons.lakmesalon.in/lakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852/Timeline-Photos",
    src: "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/473888040_18482642596028488_1352100746211108363_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hvQ53_Aju-kQ7kNvgEORHNq&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&edm=AKK4YLsEAAAA&_nc_gid=ApDwjCLyh2g4PbEZJtUm-AN&oh=00_AYAzySoXn0yID-zOdjtppu-HjjYJzOFpyuDeBwnrtV7Qww&oe=679537C0",
    alt: "Timeline Photos",
    label: "Timeline Photos",
  },
  {
    href: "https://salons.lakmesalon.in/lakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852/Timeline-Photos",
    src: "https://scontent-bom2-1.xx.fbcdn.net/v/t51.75761-15/474146642_18482334082028488_2081012307757732066_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PrAJXdeb2_cQ7kNvgHRPIoR&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZb9AnUF0YHCn7pbDykxhuO&oh=00_AYC0zJBGO3hyT2cOUDO9MKkdk1qPRnPlXb_U_D99YNFugQ&oe=67931B73",
    alt: "Showstopping Brides",
    label: "Showstopping Brides",
  },
  {
    href: "https://salons.lakmesalon.in/lakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852/Timeline-Photos",
    src: "https://scontent-bom2-2.xx.fbcdn.net/v/t51.75761-15/474141508_18482154124028488_819747702910582604_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kZ5jmqOyVOcQ7kNvgHDjL08&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&edm=AKK4YLsEAAAA&_nc_gid=AZb9AnUF0YHCn7pbDykxhuO&oh=00_AYAsnVua1R3sX2uHkLdOV2BgVky9PodZcUgm-JcFbUaQFQ&oe=67932BF4",
    alt: "Showstopping Brides Contest",
    label: "Showstopping Brides Contest",
  },
  {
    href: "https://salons.lakmesalon.in/lakme-salon-beauty-parlour-greater-kailash-2-new-delhi-344852/Timeline-Photos",
    src: "https://scontent-bom1-1.xx.fbcdn.net/v/t51.75761-15/473992404_18482049025028488_6075001976675685408_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rhg7QS57u0EQ7kNvgGkFnmR&_nc_zt=23&_nc_ht=scontent-bom1-1.xx&edm=AKK4YLsEAAAA&_nc_gid=AZb9AnUF0YHCn7pbDykxhuO&oh=00_AYDM3KGIPlSpRP5dE-P-Bir81sL6gY_HrKySoTu3zyzZgw&oe=6793418B",
    alt: "EaseMyTrip Collaboration",
    label: "EaseMyTrip Collaboration",
  }
];

const GalleryItem = ({ href, src, alt, label }) => (
  <Box
    as="a"
    href={href}
    target="_blank"
    display="block"
    position="relative"
    overflow="hidden"
    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
  >
    <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.4)" color="white" display="flex" justifyContent="center" alignItems="center">
      <Text fontSize="lg" textAlign="center">
        {label}
      </Text>
    </Box>
    <Image
      src={src}
      alt={alt}
      borderRadius="md"
      boxSize="100%"
      objectFit="cover"
    />
  </Box>
);

const Gallery = () => {
  return (
    <Box as="section" id="gallery-section" py={10} px={{base:4, md: 8, lg:24}}>
      <Container maxW="container.xl">
        <Heading as="h2" textAlign={'center'} size="lg" mb={6}>
          Gallery
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              href={item.href}
              src={item.src}
              alt={item.alt}
              label={item.label}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
