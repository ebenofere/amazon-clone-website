import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Logo } from './Logo';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks />
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </>
  );
};

export default Header;
