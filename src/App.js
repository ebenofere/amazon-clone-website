import React from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from 'components/layout';
import { CONTAINER_MAX_WIDTH } from 'config/layout';

function App() {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH}>
      <Header />
    </Container>
  );
}

export default App;
