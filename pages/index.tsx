import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Stack, Image, Text, Heading, useColorModeValue, Center } from "@chakra-ui/react";

const Page = () => {
  return (
    <Layout>
      <Box position="relative" zIndex={0} minH="4xl">
        <Box pos="absolute" w="full" maxH="4xl" overflow="hidden">
          <video autoPlay loop muted width="100%">
            <source src="/video/cover.mp4" type="video/mp4" />
          </video>
          <Box pos="absolute" w="full" h="full" top={0} bgGradient={useColorModeValue("linear(to-t, white, whiteAlpha.800, whiteAlpha.100)", "linear(to-t, black, blackAlpha.800, blackAlpha.100)")}></Box>
        </Box>

        <Container position="relative" maxW="4xl" pt={56} pb={20} centerContent>
          <Stack spacing={8} align="center" w="full">
            <Image mt={-10} src="/img/afif-dev.jpg" alt="Afif Dev" borderRadius="full" boxSize="150px" boxShadow={"0px 4px 28px -8px #D53F8C"} />
            <Heading as="h2" size="2xl">
              Hi, I'm Afif!
            </Heading>
            <Text>Welcome to my personal site!</Text>

            <Text display="none" color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </Container>
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
