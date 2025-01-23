import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  HStack,
  UnorderedList,
  ListItem,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const Header = ({ currentPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobileOrTablet = useBreakpointValue({ base: true, sm: true, md: false }); // Handle mobile & tablet (up to 1024px)

  // Framer Motion Animation Variants
  const variants = [
    { hidden: { y: -300, opacity: 0 }, visible: { y: 0, opacity: 1 } }, // Top animation
    { hidden: { y: -300, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { hidden: { x: -300, opacity: 0 }, visible: { x: 0, opacity: 1 } }, // Left animation
    { hidden: { x: -300, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { hidden: { x: 300, opacity: 0 }, visible: { x: 0, opacity: 1 } },  // Right animation
    { hidden: { y: 300, opacity: 0 }, visible: { y: 0, opacity: 1 } },  // Bottom animation
    { hidden: { y: 300, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  ];

  return (
    <Box as="header" bg="black" w="100%" boxShadow="sm">
      <Box className="container-wide" mx="auto" maxW="1200px" p={4}>
        {currentPage === "Homepage" ? (
          // Homepage Header
          <Flex alignItems="center" justifyContent="space-between">
            {/* Logo Section */}
            <Box>
              <RouterLink
                to="/website-homepage"
                title="Lakme Salon"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src="https://cdn4.singleinterface.com/files/outlet/logo/334963/Brand_logo_1_png_png.png"
                  alt="Lakme Salon Logo"
                  width="200px" // Increased logo size
                />
              </RouterLink>
            </Box>

            {/* Navbar Links Section */}
            <Flex alignItems="center">
              <UnorderedList
                styleType="none"
                m={0}
                display="flex"
                gap={6}
                alignItems="center"
              >
                <ListItem>
                  <Link
                    href="tel:18001231952"
                    display="flex"
                    alignItems="center"
                    color="white"
                    textDecoration="none" // Remove underline
                  >
                    <Icon as={PhoneIcon} w={5} h={5} mr={2} color="white" />
                    <Text fontSize="lg" color="white">
                      18001231952
                    </Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        ) : (
          // Website Homepage Header
          <Flex alignItems="center" justifyContent="space-between">
            {/* Logo Section */}
            <Box>
              <Image
                src="https://cdn4.singleinterface.com/files/outlet/logo/334963/Brand_logo_1_png_png.png"
                alt="Lakme Salon Logo"
                width="200px" // Increased logo size
              />
            </Box>

            {/* Navigation Links for Larger Screens */}
            <HStack
              spacing={6}
              display={{ base: "none", lg: "flex" }} // Hidden on small screens, show from medium (1024px) screens
            >
              {[
                { label: "Home", link: "/website-homepage" },
                { label: "Social Timeline", link: "/social-timeline" },
                { label: "Offers", link: "/offers" },
                { label: "Gallery", link: "/gallery" },
                { label: "Maps", link: "/map" },
                { label: "Contact Us", link: "/contact" },
                { label: "Shop Products", link: "#" },
                { label: "Nearby Salon", link: "/" },
              ].map((item, index) => (
                <RouterLink
                  key={index}
                  to={item.link}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "lg",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </RouterLink>
              ))}
            </HStack>

            <Button
              display={{ base: "flex", sm: "flex", lg: "none" }} // Show on small and medium screens
              onClick={onOpen}
              color="white"
              background={'black'}
              variant="outline"
            >
              <HamburgerIcon w={6} h={6} />
            </Button>

            {/* Drawer for Small Screens */}
            <Drawer isOpen={isOpen} size={'full'} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="#181818">
                <DrawerCloseButton color="white" />
                <DrawerBody>
                  <UnorderedList
                    styleType="none"
                    mt={10}
                    display="flex"
                    flexDirection="column"
                    gap={6}
                  >
                    {[
                      { label: "Home", link: "/website-homepage" },
                      { label: "Social Timeline", link: "/social-timeline" },
                      { label: "Offers", link: "/offers" },
                      { label: "Gallery", link: "/gallery" },
                      { label: "Maps", link: "/map" },
                      { label: "Contact Us", link: "/contact" },
                      { label: "Shop Products", link: "/https://shop.lakmesalon.in" },
                      { label: "Nearby Salon", link: "/" },
                    ].map((item, index) => (
                      <MotionBox
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={isMobileOrTablet ? variants[index % variants.length] : {}}
                        transition={{
                          duration: 5,
                          ease: "easeInOut",
                        }}
                      >
                        <ListItem>
                          <RouterLink
                            to={item.link}
                            isExternal={item.link.startsWith('http')}
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "lg",
                              textDecoration: "none",
                            }}
                            onClick={onClose}
                          >
                            {item.label}
                          </RouterLink>
                        </ListItem>
                      </MotionBox>
                    ))}
                  </UnorderedList>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Header;
