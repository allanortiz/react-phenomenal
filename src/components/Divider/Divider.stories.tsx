import React from 'react';
import { Box } from '../Box';
import Divider from './Divider';

export default { title: 'Divider' };

export const basic = () => (
  <Box pt="10px">
    <Divider />
  </Box>
);

export const vertical = () => (
  <Box pl='10px' height='200px' width="100%">
    <Divider orientation='vertical' />
  </Box>
);

export const middle = () => (
  <Box pt="10px">
    <Divider variant='middle' />
  </Box>
);

export const absolute = () => (
  <Box position="relative" mt="100px" height="10px">
    <Divider absolute />
  </Box>
);