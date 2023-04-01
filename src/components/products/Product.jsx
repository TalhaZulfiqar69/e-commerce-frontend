import React from "react";
import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SearchProduct from "./SearchProduct";

const Products = () => {
  return (
    <>
      <SearchProduct />
      <Container maxW={"9xl"}>
        <SimpleGrid columns={5}>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
          <Box>
            <ProductCard />
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Products;
