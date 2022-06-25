import { Box, HStack, VStack, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'

import React from 'react';

const Header = () => {
  return (
    <VStack p={5} bg={'#131921'} style={{ border: '1px solid black' }}>
      <Flex w="100%" >
        <Heading ml="8" size="xl" fontWeight="semibold" color="orange.400">
          <Image src='https://res.cloudinary.com/ebenofere/image/upload/v1656188531/amazon-clone-app/amazon_logo_fuf1v4.svg' style={{ width: "90px" }} />
        </Heading>
        <Box>
          <Text fontSize='lg' color='white' >Deliver to Margaret</Text>
        </Box>
        <InputGroup>
          <Input placeholder='search for products' />
          <InputRightElement pointerEvents="none" children={<Search2Icon color="white" />} />
        </InputGroup>
      </Flex>
    </VStack>
  );
};

export { Header };
