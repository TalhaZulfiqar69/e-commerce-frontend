import React from "react";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          404 Not Found
        </Heading>
        <Text color={"gray.500"}>
          The page you are looking for is not exists. Click button below to
          continue to the website.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            rounded={"full"}
            px={6}
            colorScheme="primary"
            bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
            color="white"
            variant="solid"
            onClick={() => navigate("/")}
          >
            <AiOutlineArrowLeft /> &nbsp; TAKE ME BACK TO HOME
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NotFound;
