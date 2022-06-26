import React from 'react';
import { Box, HStack, VStack, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text, Spacer, } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { GrLocation } from "react-icons/gr";

const Header = () => {
  let iconStyles = {
    color: "white"
  }

  const DeliverToLocation = ({ firstLine, secondLine }) => {
    return (
      <Box w='200px' mx='5px' display='flex' alignItems="center" justifyContent="center">
        <Box>
          <GrLocation style={iconStyles} />
        </Box>
        <Box>
          <Text fontSize='lg' color='#F3F3F3' >{firstLine}</Text>
          <Text fontSize='xl' color='white' fontWeight='bold' >{secondLine}</Text>
        </Box>
      </Box>
    )
  }

  return (
    <VStack p={5} bg={'#131921'} style={{ border: '1px solid black' }}>
      <Flex w="100%" align="center">
        <Heading ml="8" size="xl" fontWeight="semibold" color="orange.400">
          <Image src='https://res.cloudinary.com/ebenofere/image/upload/v1656188531/amazon-clone-app/amazon_logo_fuf1v4.svg' style={{ width: "100px" }} />
        </Heading>
        <Spacer />
        <DeliverToLocation firstLine="Deliver to Margaret" secondLine="Montreal H4B 2W" />
        <Spacer />
        <InputGroup>
          <Input placeholder='search for products' />
          <InputRightElement pointerEvents="none" children={<Search2Icon color="white" />} />
        </InputGroup>
        <DeliverToLocation firstLine="Hello, Ebenezer" secondLine="Account & Lists" />
        <DeliverToLocation firstLine="Returns" secondLine="& Orders" />
      </Flex>
    </VStack >
  );
};

export { Header };
