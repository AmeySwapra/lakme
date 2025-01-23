import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Select,
  Button,
  Container,
  Grid,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box as="section" px={{base:4, md:8, lg:24}}  py={10}>
      <Container maxW="container.xl">
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          border="3px solid"
          borderColor=" #98734b"
        >
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Get In Touch
          </Heading>
          <Text textAlign="center" mb={6}>
            Write to us with your query and we shall get back.
          </Text>

          {/* Divider */}
          <Divider borderColor="gray.300" mb={6} />

          <form action="/enterprises/sendContactUsEmail" method="POST">
            {/* Name and Email */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mb={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name *"
                  maxLength="50"
                  name="name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input
                  type="email"
                  placeholder="Email *"
                  maxLength="100"
                  name="email"
                />
              </FormControl>
            </Grid>

            {/* Phone and Product */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mb={4}>
              <FormControl isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone No. *"
                  maxLength="10"
                  name="phone_number"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Product</FormLabel>
                <Select name="applied_for" placeholder="I want to">
                  <option value="Book an appointment">Book an appointment</option>
                  <option value="Raise an issue">Raise an issue</option>
                  <option value="Others">Others</option>
                </Select>
              </FormControl>
            </Grid>

            {/* Disclaimer */}
            <Box mb={6} fontSize="md" color="gray.600">
              Disclaimer: By submitting the details, you agree to the following
              Terms and Privacy Policy. You are at least 18, have read and
              agreed to Unilever{" "}
              <Link
                href="https://www.unilevernotices.com/privacy-notices/india-english.html"
                isExternal
                color="blue.500"
              >
                Privacy Notice
              </Link>{" "}
              along with the{" "}
              <Link
                href="https://www.unilevernotices.com/cookie-notices/india-english.html"
                isExternal
                color="blue.500"
              >
                Cookie Notice
              </Link>{" "}
              and are okay to receive offers and updates from trusted{" "}
              <Link
                href="https://www.lakmesalon.in/terms-conditions-general"
                isExternal
                color="blue.500"
              >
                Hindustan Unilever Limited Brands
              </Link>{" "}
              via E-Mail, SMS, and online advertisements tailored to your
              interests and preferences.
            </Box>

            {/* Submit Button */}
            <Flex justifyContent="center">
              <Button
                type="submit"
                color="black"
                bg="linear-gradient(45deg, #e7bf88, #98734b)"
                _hover={{
                  bg: "linear-gradient(45deg, #98734b, #e7bf88)",
                }}
                px={10}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
