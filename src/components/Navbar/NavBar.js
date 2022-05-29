import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Logo } from './Logo';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';
import NavBarContainer from './NavBarContainer';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <ColorModeSwitcher justifySelf="flex-end" />
    </NavBarContainer>
  );
};

export default NavBar;
