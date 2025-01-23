import { Box, Grid, GridItem, Heading, Text, Image, Link } from '@chakra-ui/react';
import p1 from '../assets/images/p1.webp';
import p2 from '../assets/images/p2.webp';
import p3 from '../assets/images/p3.webp';
import divider from '../assets/bg/divider.jpg';

const ProductSections = () => {
  return (
    <Box>
      {/* Section 1 */}
      <Box
        backgroundImage="url(http://enpro.brightbraintech.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
        backgroundSize="cover"
        py={{ base: 8, md: 12 }}
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} alignItems="center">
          <GridItem textAlign="center">
            <Image
              src={p1}
              alt="Engineered Skid Systems"
              boxSize="100%"
              objectFit="contain"
            />
          </GridItem>
          <GridItem>
            <Link href="/engineered-fluid-systems/">
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  data-aos="fade-down"
                >
                  <strong>Engineered</strong>
                  <br />
                  <Text as="span" fontWeight="normal">
                    Skid Systems
                  </Text>
                </Heading>
                <Image
                  src={divider}
                  alt="heading-hr"
                  className="heading-hr1 aos-init aos-animate"
                  data-aos="fade-down"
                  
                />
                <Text data-aos="fade-down" mt={4}>
                  Enpro’s ‘System Engineering Division’ specialises in all kinds of skid-mounted systems custom-designed for a variety of critical industrial applications. Enpro conforms to all international codes and standards and end-customer specifications. Enpro has a multi-disciplinary engineering expertise of process engineers, piping engineers, static equipment engineers, and electrical and instrumentation engineers, capable of designing the most complex skids.
                </Text>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>

      {/* Section 2 */}
      <Box
        backgroundImage="url(http://enpro.brightbraintech.in/wp-content/themes/enpro/assets/images/home/product-bg-right.png)"
        backgroundSize="cover"
        py={{ base: 8, md: 12 }}
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} alignItems="center">
          <GridItem>
            <Link href="/process-equipments/">
              <Box pl={{ base: 0, md: 4 }}>
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  data-aos="fade-down"
                >
                  <strong>Process</strong>
                  <br />
                  Equipment
                </Heading>
                <Image
                  src={divider}
                  alt="heading-hr"
                  className="heading-hr1 aos-init"
                  data-aos="fade-down"
                  
                />
                <Text data-aos="fade-down" mt={4}>
                  Enpro’s Process Equipment Division excels in design and manufacture of various types of critical process equipment. We focus on high-quality fabrication of heat exchangers and pressure vessels with expertise in exotic metallurgies like titanium, cupro-nickel, super duplex, incoloy, and hastelloy.
                </Text>
              </Box>
            </Link>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              src={p2}
              alt="Process Equipment"
              boxSize="100%"
              objectFit="contain"
            />
          </GridItem>
        </Grid>
      </Box>

      {/* Section 3 */}
      <Box
        backgroundImage="url(http://enpro.brightbraintech.in/wp-content/themes/enpro/assets/images/home/product-bg-left.png)"
        backgroundSize="cover"
        py={{ base: 8, md: 12 }}
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} alignItems="center">
          <GridItem textAlign="center">
            <Image
              src={p3}
              alt="Renewables"
              boxSize="100%"
              objectFit="contain"
            />
          </GridItem>
          <GridItem>
            <Link href="/engineered-fluid-systems/">
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  data-aos="fade-down"
                >
                  <strong>Renewables</strong>
                </Heading>
                <Image
                  src={divider}
                  alt="heading-hr"
                  className="heading-hr1 aos-init"
                  data-aos="fade-down"
                 
                />
                <Text data-aos="fade-down" mt={4}>
                  ‘Enpro Renewables’ specializes in providing solutions to sustainable industry segments like Hydrogen, Bio-fuels, Waste-conversion, Solar, and Wind.
                </Text>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductSections;
