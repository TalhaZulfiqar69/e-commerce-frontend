import React from "react";
import { Box, Stack, Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box mb={8}>
      <Stack spacing={8} mt={4}>
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      </Stack>
    </Box>
  );
};
