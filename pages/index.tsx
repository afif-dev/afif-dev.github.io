import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Stack, Image, Text, Heading, useColorModeValue, Center, keyframes } from "@chakra-ui/react";
// import { AnimatePresence, motion } from "framer-motion";

const Marquee = () => (
  <Box w="full" zIndex={0} pos="absolute" top={{ base: "58%", sm: "51%" }} fontSize={{ base: 100, sm: 140 }} fontStyle="italic">
    <div className="marquee">
      <div className="marquee-inner">
        <span>
          <div>PHP . JS . Python . GO . PHP . JS . Python . GO</div>
        </span>
      </div>
    </div>
  </Box>
);

const Page = () => {
  return (
    <Layout>
      <Box position="relative" zIndex={0} minH={{ base: "lg", md: "2xl" }}>
        <Box pos="absolute" w="full" maxH="2xl" overflow="hidden">
          <video autoPlay loop muted width="100%">
            <source src="/video/cover.mp4" type="video/mp4" />
          </video>
          <Box pos="absolute" w="full" h="full" top={0} bgGradient={useColorModeValue("linear(to-t, white, whiteAlpha.800, whiteAlpha.100)", "linear(to-t, black, blackAlpha.800, blackAlpha.100)")}></Box>
        </Box>

        <Container position="relative" maxW="4xl" pt={44} pb={20} zIndex={1} centerContent>
          <Image mt={-10} mb={10} src="/img/afif-dev.jpg" alt="Afif Dev" borderRadius="full" boxSize="150px" boxShadow={"0px 4px 28px -8px #D53F8C"} />
          <Stack spacing={{ base: "4", sm: "8" }} align={{ base: "left", sm: "center" }} w="full">
            <Heading as="h2" size="3xl" fontWeight="black">
              Hello, 👋
              <Text display={{ base: "block", sm: "inline" }} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                {` I'm`} Afif
              </Text>
            </Heading>
            <Heading as="h2" size={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="light">
              Fullstack Web Developer
            </Heading>
            <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="light">
              Develop &amp; build web things since 2009
            </Text>
          </Stack>
        </Container>
        <Marquee />
      </Box>

      <Container display="none" position="relative" zIndex={0} maxW="2xl" bg="blue.600" pt={16} centerContent>
        <Stack spacing={6}>
          <Heading as="h1" size="4xl" noOfLines={1}>
            (4xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="3xl" noOfLines={1}>
            (3xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="2xl">
            (2xl) In love with React & Next
          </Heading>
          <Heading as="h2" size="xl">
            (xl) In love with React & Next
          </Heading>
          <Heading as="h3" size="lg">
            (lg) In love with React & Next
          </Heading>
          <Heading as="h4" size="md">
            (md) In love with React & Next
          </Heading>
          <Heading as="h5" size="sm">
            (sm) In love with React & Next
          </Heading>
          <Heading as="h6" size="xs">
            (xs) In love with React & Next
          </Heading>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Page;
