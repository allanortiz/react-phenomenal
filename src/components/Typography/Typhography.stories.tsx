import React from 'react';
import { Box } from '../Box';
import Typography from './Typography';

export default { title: 'Typhography' };

export const basic = () => (
  <Box>
    <Box mb="10px">
      <Typography variant="h1">h1. Heading</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="h2">h2. Heading</Typography>
    </Box>
    
    <Box mb="10px">
      <Typography variant="h3">H3. Heading</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="h4">H4. Heading</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="h5">H5. Heading</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="h6">H6. Heading</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="subtitle1">subtitle1</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="subtitle2">subtitle2</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="body1">body1</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="body2">body2</Typography>
    </Box>

    <Box mb="10px">
      <Typography variant="caption">caption</Typography>
    </Box>
  </Box>
);