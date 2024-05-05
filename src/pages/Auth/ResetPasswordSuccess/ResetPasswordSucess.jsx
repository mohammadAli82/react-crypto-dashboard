import React from "react";
import { Card, Center, Icon, VStack, Text, Button, Box } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ResetPasswordSuccess() {
  return (
    <div>
      <Center minH="100vh">
        <Card Card p="6" borderRadius="1rem" w="456px">
          <VStack spacing={6}>
          <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text fontWeight="medium" textStyle="h1" mt="4">
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now You Can Access Your Account.
            </Text>
            <Box width='full'>
                <Link to='/signin'>
                <Button w="full">Signin</Button>
                </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </div>
  );
}

export default ResetPasswordSuccess;
