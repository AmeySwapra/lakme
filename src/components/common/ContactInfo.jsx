import { Box, Grid, Heading, Text, Link, Image, Stack, Flex } from "@chakra-ui/react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Box className="contact-info" py={10} px={{base:4, md:8, lg: 24}}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={5}
        px={4}
      >
        <Box>
          <Flex flexDirection="column" gap={2}>
            <Flex alignItems="center" gap={4}>
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/06/mobile-icon.png"
                alt="Mobile Icon"
                boxSize="30px"
              />
              <Heading size="lg">Enquiries</Heading>
            </Flex>
            <Stack mt={2}>
              <Link href="mailto:enquiries.sed@enproindia.com" fontSize="lg">
                <Text>
                  <strong>Skids:</strong>
                  <br />
                  enquiries.sed@enproindia.com
                </Text>
              </Link>
              <Link href="mailto:enquiries.ped@enproindia.com" fontSize="lg">
                <Text>
                  <strong>Process Equipment:</strong>
                  <br />
                  enquiries.ped@enproindia.com
                </Text>
              </Link>
              <Link href="mailto:enquiries.red@enproindia.com" fontSize="lg">
                <Text>
                  <strong>Renewables:</strong>
                  <br />
                  enquiries.red@enproindia.com
                </Text>
              </Link>
              <Link href="mailto:pme@enproindia.com" fontSize="lg">
                <Text>
                  <strong>General Queries/Grievance:</strong>
                  <br />
                  Mrs. Kalyani Kulkarni <br />
                  pme@enproindia.com
                </Text>
              </Link>
            </Stack>
          </Flex>
        </Box>

        <Box>
          <Flex flexDirection="column" gap={5}>
            <Flex alignItems="center" gap={4}>
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/06/location-icon.png"
                alt="Location Icon"
                boxSize="30px"
              />
              <Heading size="lg">
                <Link href="https://goo.gl/maps/BY63VwCurLEFqasV7" target="_blank" fontSize="lg">
                  India Headquarters
                </Link>
              </Heading>
            </Flex>
            <Text fontSize="lg">
              A17/18, H-Block, MIDC Pimpri, Pune – 411018, Maharashtra, India
              <br />
              Corporate Identification Number (CIN) - U74210PN1999PTC013421
            </Text>

            <Flex alignItems="center" gap={4} mt={5}>
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/07/location-icon.png"
                alt="Location Icon"
                boxSize="30px"
              />
              <Heading size="lg">
                <Link href="https://goo.gl/maps/rVXhoykTDdwY35Xk7" target="_blank" fontSize="lg">
                  Enpro Saudi Arabia
                </Link>
              </Heading>
            </Flex>
            <Text fontSize="lg">
              Makkah Street - 148, Cross – 81, 2nd Dammam Industrial City, Dammam 34331,
              Saudi Arabia.
            </Text>
          </Flex>
        </Box>

        <Box>
          <Flex flexDirection="column" gap={2}>
            <Flex alignItems="center" gap={4}>
              <Image
                src="https://www.enproindustries.in/wp-content/uploads/2023/06/location-icon.png"
                alt="Location Icon"
                boxSize="30px"
              />
              <Heading size="lg">
                <Link href="https://goo.gl/maps/XksBkeCf5Dyczrb47" target="_blank" fontSize="lg">
                  India Manufacturing Facility
                </Link>
              </Heading>
            </Flex>
            <Text fontSize="lg">
              Enpro Industries Pvt Ltd.
              <br />
              Gat no. 215/2 Alandi Markal Road, Taluka Khed, Markal, Maharashtra 412105
            </Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
