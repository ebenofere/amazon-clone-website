import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="left" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <NavBar />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
