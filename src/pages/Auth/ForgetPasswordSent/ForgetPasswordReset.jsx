import React from "react";
import { Card, Center, Icon, VStack, Text, Button } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

function ForgetPasswordReset() {
  return (
    <div>
      <Center minH="100vh">
        <Card Card p="6" borderRadius="1rem" w="456px">
          <VStack spacing={6}>
          <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text fontWeight="medium" textStyle="h1" mt="4">
              Sent Successfull{" "}
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              we have sent you an email verification to{" "}
              <b style={{ color: "black" }}>kazmiwrite@gmail.com</b>&nbsp;
              Please Follow the instructions from the email. we have sent you an
              email verification to {""}
            </Text>
          </VStack>
        </Card>
      </Center>
    </div>
  );
}

export default ForgetPasswordReset;
