/* eslint-disable react-hooks/rules-of-hooks */
// import { ReactNode } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, HStack, Link, IconButton, Button, useDisclosure, useColorMode, useColorModeValue, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

const MainLink = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/skills",
    title: "Skills",
  },
  {
    link: "#",
    title: "Experinces",
  },
  {
    link: "#",
    title: "Projects",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const MainNavLink = ({ link, title }: { link: string; title: string }) => {
  const router = useRouter();
  const colorbg = useColorModeValue("white", "black");
  return (
    <NextLink href={link} passHref>
      <Link
        bg={router.pathname === link ? colorbg : ""}
        px={4}
        py={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {title}
      </Link>
    </NextLink>
  );
};

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box pos="fixed" width="full" zIndex={999}>
      <Box pos="absolute" zIndex={0} w="105%" h="full" ml="-5px" bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")} backdropFilter="auto" backdropBlur="8px"></Box>
      <Box pos="relative" zIndex={1} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={1} alignItems={"center"}>
            <Box>
              <Link as={NextLink} href="/">
                Afif Dev
              </Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"} mr={4}>
              <HStack as={"nav"} spacing={2} display={{ base: "none", lg: "flex" }}>
                {MainLink.map((menu) => (
                  <MainNavLink key={menu.title} title={menu.title} link={menu.link}></MainNavLink>
                ))}
              </HStack>
            </HStack>
            <Button onClick={toggleColorMode} size={"md"} mr={4} variant={"solid"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button as={Link} size={"md"} mr={4} href="https://github.com/afif-dev" isExternal>
              <BsGithub />
            </Button>
            <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ lg: "none" }} onClick={isOpen ? onClose : onOpen} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {MainLink.map((menu) => (
                <MainNavLink key={menu.title} title={menu.title} link={menu.link}></MainNavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
