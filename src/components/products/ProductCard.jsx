import React from "react";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Button,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <Container maxW={"7xl"}>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                mr={6}
              >
                {data.name}
              </Box>

              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>

            <Button
              mt="8"
              rounded={"full"}
              width={"full"}
              px={6}
              colorScheme="primary"
              bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
              color="white"
              variant="solid"
              onClick={() => navigate("/product-detail")}
            >
              VIEW PRODUCT
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProductCard;
