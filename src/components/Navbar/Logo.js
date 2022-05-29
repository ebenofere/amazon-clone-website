import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
// import logo from './logo.svg';

export const Logo = props => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};
