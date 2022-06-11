import { Box, HStack, VStack, Flex, Heading, } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <VStack p={5} style={{ border: '1px solid black' }} className="page">
      <Flex w="100%">
        <Heading ml="8" size="xl" fontWeight="semibold" color="orange.400">
          Amazon
        </Heading>
      </Flex>
    </VStack>
  );
};

export { Header };
