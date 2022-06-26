import React, { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const PasswordInput = () => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <InputGroup
      size="md"
      m="20px"
      w="30%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ border: '1px solid black' }}
    >
      <Input
        pr="4.5rem"
        placeholder="Enter Password"
        type={show ? 'text' : 'password'}
      />
      <InputRightElement>
        <Button h="1.75rem" size="sm" onClick={handleChange}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;

// function PasswordInput() {
//     const [show, setShow] = React.useState(false)
//     const handleClick = () => setShow(!show)

//     return (
//       <InputGroup size='md'>
//         <Input
//           pr='4.5rem'
//           type={show ? 'text' : 'password'}
//           placeholder='Enter password'
//         />
//         <InputRightElement width='4.5rem'>
//           <Button h='1.75rem' size='sm' onClick={handleClick}>
//             {show ? 'Hide' : 'Show'}
//           </Button>
//         </InputRightElement>
//       </InputGroup>
//     )
//   }
