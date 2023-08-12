import type { ReactNode } from "react";
import { Box, chakra, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";

const date = new Date();

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      as={Link}
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      isExternal
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg={useColorModeValue("gray.50", "blackAlpha.900")} color={useColorModeValue("gray.700", "gray.200")} borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}>
      <Container as={Stack} maxW={"8xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Text fontSize="sm">
          &copy; {date.getFullYear()} Afif Dev. Build with{" "}
          <Link href="https://nextjs.org/" isExternal>
            Next.JS
          </Link>{" "}
          &amp;{" "}
          <Link href="https://chakra-ui.com/" isExternal>
            Chakra UI
          </Link>
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/afif-dev"}>
            <BsGithub />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"https://twitter.com/afif_dev"}>
            <BsTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
