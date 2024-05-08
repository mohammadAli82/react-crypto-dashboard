import React from "react";
import {
  Card,
  Center,
  Icon,
  VStack,
  Text,
  Button,
  useToast,
  Container,
  Spinner,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import {  useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

function RegisterEmailVerify() {
  const toast = useToast();
  const location = useLocation();
  const email = location.state?.email ?? " ";

  if (email === " ") {
    return <Center h="100vh">Invalid Email</Center>;
  }
  const { isSuccess, isLoading } = useQuery({
    queryKey: ["sendverificationmail"],
    queryFn:()=> sendVerificationMail({email}),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      toast({
        title: "Sign up error.",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });
  if(isLoading){
    <Center h="100vh">
      <Spinner/>
    </Center>
  }

  return (
    <div>
      <Container>
        <Center minH="100vh">
          {isSuccess && (
            <Card Card p="6" borderRadius="1rem" w="456px">
              <VStack spacing={6}>
                <Icon as={HiOutlineMail} boxSize="48px" color="p.purple" />
                <Text textStyle="h4" color="p.black" fontWeight="medium">
                  Email Verification
                </Text>
                <Text textAlign="center" textStyle="p2" color="black.60">
                  we have sent you an email verification to{" "}
                  <b style={{ color: "black" }}>{email}</b>&nbsp; you did not
                  receive it click the button below
                </Text>
                <Button w="full" variant="outline">
                  Re-send Email
                </Button>
              </VStack>
            </Card>
          )}
        </Center>
      </Container>
    </div>
  );
}

export default RegisterEmailVerify;
