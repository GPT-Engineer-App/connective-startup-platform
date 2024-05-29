import { Container, Text, VStack, Box, Heading, IconButton, HStack, Image, Input, Button, Textarea } from "@chakra-ui/react";
import { FaSearch, FaUser, FaEnvelope, FaHandsHelping, FaFilter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Startup Connect
          </Heading>
          <Text fontSize="lg" color="gray.600">
            A unique and innovative platform designed to connect startup founders, co-founders, and investors.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Key Features and Functionalities
          </Heading>
          <VStack align="start" spacing={4}>
            <HStack>
              <IconButton aria-label="Category-wise Search" icon={<FaSearch />} size="lg" />
              <Text fontSize="md">Category-wise Search: Find co-founders and investors based on specific requirements.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Profile Creation" icon={<FaUser />} size="lg" />
              <Text fontSize="md">Profile Creation: Create detailed profiles including skills, experience, and interests.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Intuitive Interface" icon={<FaHandsHelping />} size="lg" />
              <Text fontSize="md">Intuitive Interface for Startups: Create detailed business profiles to attract relevant co-founders and investors.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Advanced Search" icon={<FaFilter />} size="lg" />
              <Text fontSize="md">Advanced Search and Filters for Investors: Search and filter startups based on investment criteria.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Secure Messaging" icon={<FaEnvelope />} size="lg" />
              <Text fontSize="md">Secure Messaging System: Communicate securely to discuss potential collaborations.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Dedicated Support" icon={<FaHandsHelping />} size="lg" />
              <Text fontSize="md">Dedicated Support System: Get guidance on funding, business strategy, and operational challenges.</Text>
            </HStack>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Platform Benefits
          </Heading>
          <VStack align="start" spacing={4}>
            <Text fontSize="md">Enhanced Connectivity: Centralized platform to increase connectivity between startups, co-founders, and investors.</Text>
            <Text fontSize="md">Personalized Matches: Advanced search filters to find the best possible matches for specific needs.</Text>
            <Text fontSize="md">Efficient Communication: Secure messaging system ensures seamless communication for collaborations and partnerships.</Text>
            <Text fontSize="md">Comprehensive Support: Dedicated support system to help startups handle various business challenges efficiently.</Text>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Get Started
          </Heading>
          <VStack spacing={4}>
            <Input placeholder="Enter your name" size="lg" />
            <Input placeholder="Enter your email" size="lg" />
            <Textarea placeholder="Tell us about your startup or investment interests" size="lg" />
            <Button colorScheme="teal" size="lg">
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
