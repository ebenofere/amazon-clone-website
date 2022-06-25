import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  Container,
  Heading,
  VStack,
  Flex,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { Header } from './components/layout';
import { Main } from './components/main/Main';
import { CONTAINER_MAX_WIDTH } from './config/layout';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './amazon.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
