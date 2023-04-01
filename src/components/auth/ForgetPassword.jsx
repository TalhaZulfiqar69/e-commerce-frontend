import React, { useState, Fragment } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import classNames from "classnames";

import { Formik } from "formik";
import * as Yup from "yup";

const ForgetPassword = () => {
  return (
    <Box p={4}>
      <Flex
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Opps ! Forget your password ?</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .trim()
                    .email("Email is invalid")
                    .max(255)
                    .required("Email is required"),
                })}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values,
                }) => (
                  <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input
                        id="email-address"
                        name="email"
                        type="email"
                        className={classNames([
                          errors.email && "border-2 border-rose-600",
                        ])}
                        placeholder="Email address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                      />
                      <Text color="red" size={"small"} mt="1">
                        {errors.email && touched.email ? (
                          <Fragment>{errors.email}</Fragment>
                        ) : null}
                      </Text>
                    </FormControl>
                    <Stack spacing={10} mt="9">
                      <Button
                        colorScheme="primary"
                        bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
                        color="white"
                        variant="solid"
                        type="submit"
                        disabled={false}
                      >
                        Send Password Reset Link
                      </Button>
                    </Stack>
                  </form>
                )}
              </Formik>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ForgetPassword;
