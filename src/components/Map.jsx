import React from "react";
import { Box, Heading, Button, Container } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box as="section" px={{ base: 4, md: 8, lg: 24 }} py={10}>
      <Container maxW="container.xl">
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={6}>
            Map
          </Heading>
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
          >
            <iframe
              title="Outlet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28963.407164084686!2d77.22054321296113!3d28.535516198978643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31c80d7d6fb%3A0x23e7cd0c72aa4e96!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1618250395816!5m2!1sen!2sus"
              style={{
                width: "100%",
                height: "400px",
                border: "0",
              }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Box>
          <Button
            as="a"
            href="https://www.google.com/maps/place/New+Delhi,+Delhi,+India"
            target="_blank"
           
            mt={6}
            onClick={() => console.log("Directions button clicked")}
            color="black"
            bg="linear-gradient(45deg, #e7bf88, #98734b)"
            _hover={{
              bg: "linear-gradient(45deg, #98734b, #e7bf88)",
            }}
          >
            Get Directions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Map;
