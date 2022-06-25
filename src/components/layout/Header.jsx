import React from 'react';
import { Box, HStack, VStack, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text, Spacer, } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { GrLocation } from "react-icons/gr";

const Header = () => {
  let iconStyles = {
    color: "white"
  }

  return (
    <VStack p={5} bg={'#131921'} style={{ border: '1px solid black' }}>
      <Flex w="100%" align="center">
        <Heading ml="8" size="xl" fontWeight="semibold" color="orange.400">
          <Image src='https://res.cloudinary.com/ebenofere/image/upload/v1656188531/amazon-clone-app/amazon_logo_fuf1v4.svg' style={{ width: "100px" }} />
        </Heading>
        <Spacer />
        <Box w='200px' mx='20px' display='flex' alignItems="center" justifyContent="space-between" style={{ border: "1px solid white" }}>
          <Box mr="10px">
            <GrLocation style={iconStyles} />
          </Box>
          <Box>
            <Text fontSize='lg' color='white' >Deliver to Margaret</Text>
            <Text fontSize='xl' color='white' fontWeight='bold' >Montreal H4B 2W‌</Text>
          </Box>
        </Box>
        <Spacer />
        <InputGroup>
          <Input placeholder='search for products' />
          <InputRightElement pointerEvents="none" children={<Search2Icon color="white" />} />
        </InputGroup>
      </Flex>
    </VStack >
  );
};

export { Header };
