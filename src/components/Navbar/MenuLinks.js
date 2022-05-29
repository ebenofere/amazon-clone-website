import { Box, Stack } from '@chakra-ui/react';
import MenuItems from './MenuItems';

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pr={[4, 4, 0, 0]}
        style={{ border: '1px solid black' }}
      >
        <MenuItems to="/">Home</MenuItems>
        <MenuItems to="/how">How It Works</MenuItems>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
