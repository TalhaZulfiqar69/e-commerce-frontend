import React from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Links = [];

export const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        bgGradient="linear(to-r, #141e30, #243b55,blue.600)"
        fontWeight="semibold"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            background="#243b55"
            color="white"
            _hover={{ background: "#243b55", color: "#ffffff" }}
          />
          <HStack spacing={8} alignItems={"center"} color="white">
            <Box onClick={() => navigate("/")} cursor={"pointer"}>
              ECOMMERCE PROJECT
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              onClick={toggleColorMode}
              mr="4"
              _hover={{ background: "#243b55", color: "#ffffff" }}
              colorScheme="primary"
              bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
              color="white"
              variant="solid"
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              mr="4"
              _hover={{ background: "#243b55", color: "#ffffff" }}
              colorScheme="primary"
              bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
              color="white"
              variant="solid"
            >
              <AiOutlineShoppingCart size={40} />
            </Button>
            <Button
              w={"full"}
              _hover={{
                boxShadow: "lg",
                bgGradient: "linear(to-r, blue.600, #243b55, #141e30)",
                color: "#ffffff",
              }}
              colorScheme="primary"
              bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
              color="white"
              variant="solid"
              onClick={() => navigate("/signin")}
            >
              SIGN IN &nbsp;&nbsp;
              <AiOutlineLogin />
            </Button>

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="white">
              {Links.map((link) => (
                <NavLink key={link} color="white">
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
