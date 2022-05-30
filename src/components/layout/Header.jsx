import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box w="full" h={'10rem'}>
      <HStack justify={'space-between'} h="full">
        <Box w="30%" h="full" border="1px solid">
          Left Box
        </Box>
        <Box w="30%" h="full" border="1px solid">
          Middle Box
        </Box>
        <Box w="30%" h="full" border="1px solid">
          Right Box
        </Box>
      </HStack>
    </Box>
  );
};

export { Header };
