import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Box } from '../Box';

export default { title: 'Container' };

const StyledBox = styled(Box)`
  background-color: #cfe8fc;
  height: 100vh;
`;

export const basic = () => (
  <Container breakpoint="md">
    <StyledBox bg="cornsilk"></StyledBox>
  </Container>
);

export const fixed = () => (
  <Container breakpoint="md" fixed>
    <StyledBox bg="cornsilk"></StyledBox>
  </Container>
);

export const withoutPadding = () => (
  <Container breakpoint="md" disableGutters>
    <StyledBox bg="cornsilk"></StyledBox>
  </Container>
);
