import React from "react";
import { Stack, Input, useColorModeValue, Container } from "@chakra-ui/react";

const SearchProduct = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 18 }}
      >
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          w={"full"}
          mt="8"
        >
          <Input
            type={"text"}
            placeholder={"search..."}
            color={useColorModeValue("gray.800", "gray.200")}
            bg={useColorModeValue("gray.100", "gray.600")}
            rounded={"full"}
            border={0}
            _focus={{
              bg: useColorModeValue("gray.200", "gray.800"),
              border: "orange.500",
              outline: "none",
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SearchProduct;
