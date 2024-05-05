import React from 'react'
import {Card, Center, Icon, VStack,Text,Button}from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi';

function RegisterEmailVerify() {
  return (
    <div>
      <Center minH="100vh">
      <Card Card p="6" borderRadius="1rem" w="456px">
      <VStack spacing={6}>
      <Icon as={HiOutlineMail} boxSize="48px" color="p.purple" />
      <Text textStyle="h4" color="p.black" fontWeight='medium'>
        Email Verification
      </Text>
      <Text textAlign='center' textStyle="p2" color="black.60">
      we have sent you an email verification to <b style={{color:"black"}}>kazmiwrite@gmail.com</b>&nbsp; 
      you didnot receive it click the button below
      </Text>
      <Button w='full' variant="outline">
        Re-send Email
      </Button>
      </VStack>
      </Card>
      </Center>
    </div>
  )
}

export default RegisterEmailVerify
