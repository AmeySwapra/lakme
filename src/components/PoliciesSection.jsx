import { Box, Container, Heading, SimpleGrid, Link, Text } from '@chakra-ui/react';

const PoliciesSection = () => {
  return (
    <Box id="policies" bg="#d00000" py="8">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" color="white" mb={{ base: 6, md: 8 }} textAlign="center">
          Policies
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/CSR-POLICY_EIPL-ID-COM-32-Final-02.01.2023.pdf"
            label="CSR POLICY"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/Vigil-Mechanism-Whistle-Blower-Policy_Enpro-ID-COM-33-Final.pdf"
            label="Vigil Mechanism & Whistle Blower Policy"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/1.-24th-AGM-Notice-22-23-R1.pdf"
            label="24th AGM Notice"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2023/05/4-annual-return-for-FY-20-21.pdf"
            label="Annual Return for FY 20-21"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2023/05/5-annual-return-for-FY-21-22.pdf"
            label="Annual Return for FY 21-22"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/Annual-Return-for-FY-22-23.pdf"
            label="Annual Return for FY 22-23"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2023/05/6-CSR-projects-approved-by-board-for-FY-21-22.pdf"
            label="CSR Projects approved by Board for FY 21-22"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2023/09/CSR-Projects-approved-by-Board-22-23-1.pdf"
            label="CSR Projects approved by Board for FY 22-23"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/CSR-Projects-approved-by-Board-23-24-1.pdf"
            label="CSR Projects approved by Board for FY 23-24"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2023/07/SUSTAINABILITY-REPORT-21-22.pdf"
            label="Corporate Sustainability Report"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/EIPL-Policy-on-Sexual-Harassment-at-Workplace-ID-COM-31.pdf"
            label="Policy on Sexual Harassment at Workplace"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/EOGM-Notice-FINAL.pdf"
            label="1st EOGM Notice"
          />
          <PolicyLink
            href="https://www.enproindustries.in/wp-content/uploads/2024/04/2-EOGM-Notice-FINAL.pdf"
            label="2nd EOGM Notice"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const PolicyLink = ({ href, label }) => {
  return (
    <Link href={href} isExternal>
      <Box
        bg="white"
        p="4"
        boxShadow="md"
        borderRadius="md"
        transition="all 0.3s"
        _hover={{ bg: 'gray.100', transform: 'scale(1.05)' }}
      >
        <Text>{label}</Text>
      </Box>
    </Link>
  );
};

export default PoliciesSection;
