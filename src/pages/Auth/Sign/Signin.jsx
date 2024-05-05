import React from "react";
import {
  Card,
  Center,
  Container,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Box,
  Checkbox,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";

import { object, string, ref } from "yup";

const signinValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("surname is required"),
  email: string().email("email is invalid").required("email is required"),
  password: string()
    .min(6, "Password must be at least 6 character")
    .required("password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("password is required"),
});

function Signin() {
  return (
    <Container>
      <Center minH="100vh">
        <Card Card p="6" borderRadius="1rem" w="456px">
          <Text fontWeight="medium" textStyle="h1" mt="10px">
            Welcome to crypto code{" "}
          </Text>
          <Text textStyle="p3" color="black.60" mt="20px">
            Enter your credentials to access the account{" "}
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <FormControl>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            name="email"
                            placeholder="enter your email"
                          />
                          <ErrorMessage name="email" />
                        </FormControl>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl>
                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            name="password"
                            type="password"
                            placeholder="enter your Password"
                          />
                          <ErrorMessage name="password" />
                        </FormControl>
                      )}
                    </Field>
                  </FormControl>
                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>
                    <Link to="/forget-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forget Password
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button type="submit" w="full">Login</Button>
                    <Link to="/signup">
                      <Button mt="3" w="full" variant="outline">
                        Create Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}

export default Signin;
