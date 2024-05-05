import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Card, Center, Icon, Stack, Text, Button } from '@chakra-ui/react';
import { object, string } from 'yup';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ForgetPassword() {
    const forgetValidationSchema = object({
        email: string().email("email is invalid").required("email is required"),
    });

    return (
        <div>
            <Center minH="100vh">
                <Card p="6" borderRadius="1rem" w="456px">
                    <Link to='/signin'>
                        <Icon as={FaArrowLeft} boxSize="6"/>
                    </Link>
                    <Text fontWeight="medium" textStyle="h1" mt="4">
                        Forget Password{" "}
                    </Text>
                    <Text textStyle="p3" color="black.60" mt="4">
                        Enter Your email password for which amount you want reset your password
                    </Text>
                    <Formik
                        initialValues={{
                            email: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validationSchema={forgetValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt="8" spacing={6}>
                                    <Field name="email">
                                        {({ field, meta }) => (
                                            <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                                <FormLabel htmlFor="email">Enter Your Email</FormLabel>
                                                <Input
                                                    {...field}
                                                    name="email"
                                                    placeholder="enter your email"
                                                />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button w="full" type='submit' mt='4'>Reset password</Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </Center>
        </div>
    );
}

export default ForgetPassword;
