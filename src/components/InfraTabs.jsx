import { Tab, TabList, TabPanel, TabPanels, Tabs, Box, SimpleGrid, Image } from '@chakra-ui/react';
import p1 from '../assets/eng/p1.jpg';
import p2 from '../assets/eng/p2.jpg';
import p3 from '../assets/eng/p3.jpg';
import p4 from '../assets/eng/p4.jpg';
import p5 from '../assets/eng/p5.jpg';
import p6 from '../assets/eng/p6.jpg';
import p7 from '../assets/eng/p7.jpg';
import p8 from '../assets/eng/p8.jpg';
import p9 from '../assets/eng/p9.jpg';
import p10 from '../assets/eng/p10.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageTabs = () => {
  return (
    <Box maxWidth="1200px" mx="auto" p={{ base: 4, md: 8 }}>
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ base: 2, md: 4 }}
        >
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'} >Engineered Skids Division</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'}>Process Equipment Division</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'}>Headquaters</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'}>Enpro Saudi Arabia</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'}>R & D Facility</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }} color={'#d00000'}>A Sustainable Workplace</Tab>
        </TabList>

        <TabPanels>
          {Array(6)
            .fill(null)
            .map((_, tabIndex) => (
              <TabPanel key={tabIndex}>
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={{ base: 2, md: 4 }}
                >
                  {shuffleArray(images)
                    .slice(0, 6)
                    .map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        boxSize="100%"
                        objectFit="cover"
                        borderRadius="md"
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ImageTabs;
