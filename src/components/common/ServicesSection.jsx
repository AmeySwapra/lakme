import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Icon,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import img1 from '../../assets/logo/boss.png';
import img2 from '../../assets/logo/mortgage.png';
import img3 from '../../assets/logo/file.png';
import img4 from '../../assets/logo/apartment.png';
import img5 from '../../assets/logo/deal.png';
import img6 from '../../assets/logo/tools-and-utensils.png';

const ServicesSection = ({ isHomepage }) => {
  const gridColumns = useBreakpointValue({ base: 1, md: 3 });

  const services = [
    {
      img: img1,
      description:
        'Expert advise through proper consultation on Investment and End user options for both residential & commercial.',
    },
    {
      img: img2,
      description:
        'Home loans from various banks and financial institutes Like HDFC, ICICI, SBI, BOI, L&T, LICHFL and PNB housing finance limited.',
    },
    {
      img: img3,
      description:
        'Real Estate Services: Agreement (Notary/Registered), POA, MOU, Police Verification, etc.',
    },
    {
      img: img4,
      description:
        'NRI Real Estate Management: Take care of your home from far away. Buying, Selling, Managing, Monitoring your property with utmost transparency at a minimal cost.',
    },
    {
      img: img5,
      description:
        'Tailor made & personalized deals that no online portal can offer, then be it Magic Bricks, 99 Acres, Common Floor, Quikr, Housing.com or No Broker.com.',
    },
    {
      img: img6,
      description:
        'Property Management: We manage, maintain & furnish the property used by the tenants. We manage the upkeep of the property (electric failures, fixtures, plumbing, painting, rent collection, payments, inspection, lease etc).',
    },
  ];

  return (
    <Box py={10} px={{ base: 4, md: 8, lg: 14 }} bg="#f8f8f8">
      
      {isHomepage && (
        <Box mb={8} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Welcome to Harleen Realtors™
          </Text>
          <Text fontSize="lg" mb={4}>
            Selling Lifestyles through Real Estate.
          </Text>
          <Text fontSize="md">
            Harleen Realtors™ is a MahaRERA certified real estate company dealing in New Launches, Resales & Rentals of residential and commercial projects in Pune. Because of our relationships, consistent performance and networking with major developers, traders, investors, and stakeholders, we get the best deals. That’s why we assure you the best deals guaranteed. ‘‘Trust us and Try us”.
          </Text>
        </Box>
      )}

     
      <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={6}>
        {services.map((service, index) => (
          <GridItem key={index}>
            <VStack
              spacing={4}
              align="center"
              bg="white"
              p={6}
              shadow="md"
              borderRadius="md"
              h="240px"
              justifyContent="space-between"
            >
              <Image src={service.img} alt={`Service ${index + 1}`} boxSize={16} />
              <Text textAlign="center" fontSize="md">
                {service.description}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>

      
      {!isHomepage && (
        <Box mt={10} p={6} bg="blue.100" borderRadius="md" display="flex" alignItems="center">
          <Icon as={FaInfoCircle} boxSize={6} color="blue.500" mr={4} />
          <Box>
            <Text fontSize="md" mb={2}>
              All these services are available for a minimal charge of ₹ 1100/- towards registration & consultation fee. We generally refund/adjust this fee against the service fee, so that there is no direct cost to you.
            </Text>
            <Text fontSize="sm" fontStyle="italic">
              *Conditions Apply*
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ServicesSection;
