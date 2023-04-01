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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import classNames from "classnames";
import { BiShow, BiHide } from "react-icons/bi";

import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
            <Heading fontSize={"4xl"}>Sign up to your account</Heading>
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
                  fullname: "",
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  fullname: Yup.string()
                    .trim()
                    .max(255)
                    .required("Fullname is required"),
                  email: Yup.string()
                    .trim()
                    .email("Email is invalid")
                    .max(255)
                    .required("Email is required"),
                  password: Yup.string()
                    .trim()
                    .max(20, "Password must be at most 20 characters")
                    .min(8, "Password must be 8 characters at minimum")
                    .required("Password is required."),
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
                    <FormControl id="fullname">
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        id="full-name"
                        name="fullname"
                        type="text"
                        className={classNames([
                          errors.fullname && "border-2 border-rose-600",
                        ])}
                        placeholder="Fullname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.fullname}
                      />
                      <Text color="red" size={"small"} mt="1">
                        {errors.fullname && touched.fullname ? (
                          <Fragment>{errors.fullname}</Fragment>
                        ) : null}
                      </Text>
                    </FormControl>
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
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          maxLength="21"
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          id="password"
                          name="password"
                          className={classNames([
                            errors.password && "border-2 border-rose-600",
                          ])}
                          placeholder="Password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password.trim()}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? <BiShow /> : <BiHide />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Text color="red" size={"small"} mt="1">
                        {errors.password && touched.password ? (
                          <Fragment>{errors.password}</Fragment>
                        ) : null}
                      </Text>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Link color={"blue.400"} mt="4">
                          Forgot password?
                        </Link>
                      </Stack>
                      <Button
                        colorScheme="primary"
                        bgGradient="linear(to-r, #141e30, #243b55, blue.600)"
                        color="white"
                        variant="solid"
                        type="submit"
                        disabled={false}
                      >
                        Sign up
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

export default Register;
