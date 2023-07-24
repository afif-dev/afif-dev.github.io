/* eslint-disable react-hooks/rules-of-hooks */
// import { ReactNode } from "react";
import NextLink from 'next/link';
import { Box, Flex, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorMode, useColorModeValue, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

const MainLink = [
  {
    "link": "/about",
    "title": "About"
  },
  {
    "link": "/",
    "title": "Skills"
  },
  {
    "link": "/",
    "title": "Experinces"
  },
  {
    "link": "/",
    "title": "Projects"
  },
  {
    "link": "/contact",
    "title": "Contact"
  }
]


const MainNavLink = ({ link, title }: { link: string, title: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    as={NextLink}
    href={link}
  >
    {title}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box pos="fixed" width="full" zIndex={999}>
      <Box pos="absolute" zIndex={0} w="105%" h="full" ml="-5px" bg={useColorModeValue("gray.100", "gray.900")} opacity={0.8} backdropFilter="auto" backdropBlur="8px"></Box>
      <Box pos="relative" zIndex={1} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={1} alignItems={"center"}>
            <Box>
              <Link as={NextLink} href='/'>
                Afif Dev
              </Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"} mr={4}>
              <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                {MainLink.map((menu) => (
                  <MainNavLink key={menu.title} title={menu.title} link={menu.link} ></MainNavLink>
                ))}
              </HStack>
            </HStack>

            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"outline"} cursor={"pointer"} colorScheme={"teal"} size={"md"} mr={4} rightIcon={<AddIcon />}>
                Others
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>

            <Button onClick={toggleColorMode} size={"md"} mr={4} variant={"solid"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Button as={Link} size={"md"} mr={4} href="https://github.com/afif-dev" isExternal>
              <BsGithub />
            </Button>

            <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {MainLink.map((menu) => (
                <MainNavLink key={menu.title} title={menu.title} link={menu.link} ></MainNavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box >
  );
}
