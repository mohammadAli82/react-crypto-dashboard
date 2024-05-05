import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Card, Center, Stack, Text, Button } from "@chakra-ui/react";
import { object, ref, string } from "yup";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function ResetPassword() {
  const resetValidationSchema = object({
    password: string()
      .min(6, "Password must be at least 6 character")
      .required("password is required"),
    repeatPassword: string()
      .oneOf([ref("password"), null], "Password must wattch")
      .required("password is required"),
  });

  return (
    <div>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text fontWeight="medium" textStyle="h1" mt="4">
            Reset Password{" "}
          </Text>
          <Text textStyle="p3" color="black.60" mt="4">
            Enter Your New Password
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={resetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <FormControl>
                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="password">New Password</FormLabel>
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
                    <Field name="repeatPassword:">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="repeatPassword">
                            New Repeat Password
                          </FormLabel>
                          <Input
                            {...field}
                            name="repeatPassword"
                            placeholder="repeat password"
                            type="password"
                          />
                          <ErrorMessage color="red" name="repeatPassword" />
                        </FormControl>
                      )}
                    </Field>
                  </FormControl>
                  <Button w="full" type="submit" mt="4">
                    Reset password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </div>
  );
}

export default ResetPassword;
