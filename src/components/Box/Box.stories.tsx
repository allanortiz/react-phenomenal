import React from 'react';
import Box from './Box';
import styled from 'styled-components';

export default { title: 'Box' };

const Flex = styled(Box)`
  display: flex;
`;

export const basic = () => (
  <Box flex="1 1 auto" alignItems="center" justifyContent="space-between">
    <Box textAlign="center" m="16px" bg="cornsilk" p="16px">
      Center
    </Box>
    <Box textAlign="center" m="16px" bg="yellowgreen" p="16px">
      Center
    </Box>
    <Box textAlign="center" m="16px" bg="saddlebrown" color="white" p="16px">
      Center
    </Box>
  </Box>
);

export const flexbox = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box bg="cornsilk"  p="16px">Left</Box>
    <Box bg="yellowgreen" p="16px">Center</Box>
    <Box bg="saddlebrown" p="16px" color="white">Right</Box>
  </Flex>
);