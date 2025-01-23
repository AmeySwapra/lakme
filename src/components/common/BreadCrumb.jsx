import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function BreadCrumb({ currentPage }) {
  const linkColor = "gray.600";

  return (
    <Box
      py={4}
      px={{ base: 4, md: 8 }}
    >
      <Box
        maxW="calc(100% - 40px)" 
        mx="auto"
        mt={2}
      >
        <Breadcrumb color={linkColor} separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/"
              title="Home"
              color={"yellow.500"}
              _hover={{ color: "yellow.500" }}
              textDecoration="none"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage color="gray">
            <span >{currentPage}</span>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
}

export default BreadCrumb;
