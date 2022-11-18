import type { ReactElement } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { Container, Box, Stack, Card, CardBody, Image, Text, Heading, useColorModeValue, Center } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Page = () => {
  return (
    <Layout>
      <Box position="relative" zIndex={0} h={{ xl: "5xl" }}>
        <Box pos="absolute" zIndex={0} mt={16} w="full">
          <video autoPlay loop muted width="100%">
            <source src="/video/cover.mp4" type="video/mp4" />
          </video>
          <Box pos="absolute" w="full" h="full" top={0} bgGradient={useColorModeValue("linear(to-t, white, whiteAlpha.800, whiteAlpha.100)", "linear(to-t, black, blackAlpha.800, blackAlpha.100)")}></Box>
        </Box>

        <Center pt={60}>
          <Card maxW="sm">
            <CardBody>
              <Image mt={-16} src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Center>

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
      </Box>
    </Layout>
  );
};

export default Page;
