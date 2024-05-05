import React from "react";
import { Card, Center, Icon, VStack, Text, Button, Box } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function RegisterSuccess() {
  return (
    <div>
      <Center minH="100vh">
        <Card Card p="6" borderRadius="1rem" w="456px">
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Successfully Registration
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Hurray ! You Have Successfully Created the Account. Enter to the
              App. Explore all it's Feature
            </Text>
            <Box width='full'>
            <Link to="/signin">
              <Button w="full" variant="outline">
                Enter the App
              </Button>
            </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </div>
  );
}

export default RegisterSuccess;
