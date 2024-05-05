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
  Flex,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";

import { object, string, ref } from "yup";

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("surname is required"),
  email: string().email("email is invalid").required("email is required"),
  password: string()
    .min(6, "Password must be at least 6 character")
    .required("password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must wattch")
    .required("password is required"),
});

function Signup() {
  return (
    <Container>
      <Center minH="100vh">
        <Card Card p="6" borderRadius="1rem" w="456px">
          <Text fontWeight="medium" textStyle="h1">
            Welcome to crypto code{" "}
          </Text>
          <Text textStyle="p" color="black.60">
            Welcome to crypto code{" "}
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="enter your name"
                          />
                          <ErrorMessage name="name" />
                        </FormControl>
                      )}
                    </Field>
                    <FormControl>
                      <Field name="surname">
                        {({ field, meta }) => (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="surname">SurName</FormLabel>
                            <Input
                              {...field}
                              name="surname"
                              placeholder="enter your Sur name"
                            />
                          </FormControl>
                        )}
                      </Field>
                    </FormControl>
                  </Flex>
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
                  <FormControl>
                    <Field name="repeatpassword">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="repeatpassword">
                            repeatpassword
                          </FormLabel>
                          <Input
                            {...field}
                            name="repeatpassword"
                            placeholder="repeat password"
                            type="password"
                          />
                          <ErrorMessage name="repeatpassword" />
                        </FormControl>
                      )}
                    </Field>
                  </FormControl>
                  <Checkbox>
                    I agree with{" "}
                    <Text as="span" color="p.purple">
                      Terms and conditions
                    </Text>
                  </Checkbox>
                  <Button type="submit">Create Account</Button>
                  <Text textStyle="p" color="black.60">
                    Already Have a account ?{" "}
                    <Link to="/signin">
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}

export default Signup;
