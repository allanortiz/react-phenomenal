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

export const anotherProperties = () => (
  <Box>
    <Typography variant="body1" fontSize="50px">Font size 50px</Typography>

    <Box>
      <Typography variant="body1" display="inline" color="brown">Inline with brown color</Typography>
      <Typography variant="body1" display="inline" color="yellowgreen">Inline with yellowgreen color</Typography>
      <Typography variant="body1" component="span">Span component</Typography>
    </Box>

    <br />

    <Typography variant="body1" textAlign="left">Text align left</Typography>

    <Typography variant="body1" textAlign="center">Text align center</Typography>

    <Typography variant="body1" textAlign="right">Text align right</Typography>

    <br />

    <Typography variant="body1" bg="red" color="white">Background color</Typography>

    <br />

    <div>There is already an h1 in the page, let's not duplicate it:</div>
    <Typography variant="h1" component="h2">
      h2 Heading like h1
    </Typography>
  </Box>
);