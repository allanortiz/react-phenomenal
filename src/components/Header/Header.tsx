import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';

type HeaderProps = {
  startSlot: () => React.ReactElement;
  endSlot: () => React.ReactElement;
};

const Header: React.FC<HeaderProps> = ({
  startSlot,
  endSlot
}) => {
  return (
    <Container>
      Header
    </Container>
  )
}

export default Header;
