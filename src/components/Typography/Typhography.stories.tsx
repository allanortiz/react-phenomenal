import React from 'react';
import { Box } from '../Box';
import Typography from './Typography';

export default { title: 'Typhography' };

export const basic = () => (
  <Box ml="20px">
    <Typography variant="h1">h1. Heading</Typography>

    <Typography variant="h2">h2. Heading</Typography>

    <Typography variant="h3">h3. Heading</Typography>

    <Typography variant="h4">h4. Heading</Typography>

    <Typography variant="h5">h5. Heading</Typography>

    <Typography variant="h6">h6. Heading</Typography>

    <Typography variant="subtitle1">subtitle1</Typography>
  
    <Typography variant="subtitle2">subtitle2</Typography>

    <Typography variant="body1">body1</Typography>

    <Typography variant="body2">body2</Typography>
 
    <Box>
      <Typography variant="caption">caption</Typography>
    </Box>
  </Box>
);