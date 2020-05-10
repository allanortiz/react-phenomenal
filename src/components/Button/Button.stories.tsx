import React from 'react';
import { Box } from '../Box';
import Button from './Button';

export default { title: 'Button' };

export const basic = () => (
  <Box display="flex" color="#fff" m="20px">
    <Button>
      DEFAULT
    </Button>

    <Button color='primary'>
      PRIMARY
    </Button>

    <Button color='accent'>
      ACCENT
    </Button>

    <Button disabled>
      DISABLED
    </Button>

    <Button href="/" color='primary'>
      LINK
    </Button>
  </Box>
);

export const raised = () => (
  <Box display="flex" m="20px">
    <Box>
      <Button variant="raised">
        DEFAULT
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="raised" color='primary'>
        PRIMARY
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="raised" color='accent'>
        ACCENT
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="raised" disabled>
        DISABLED
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="raised" href="/" color='primary'>
        LINK
      </Button>
    </Box>
  </Box>
);

export const flat = () => (
  <Box display="flex" m="20px">
    <Button variant="flat">
      DEFAULT
    </Button>

    <Box ml="10px">
      <Button variant="flat" color='primary'>
        PRIMARY
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="flat" color='accent'>
        ACCENT
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="flat" disabled>
        DISABLED
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="flat" href="/" color='primary'>
        LINK
      </Button>
    </Box>
  </Box>
);

export const outlined = () => (
  <Box display="flex" m="20px">
    <Button variant="outlined">
      DEFAULT
    </Button>

    <Box ml="10px">
      <Button variant="outlined" color='primary'>
        PRIMARY
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="outlined" color='accent'>
        ACCENT
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="outlined" disabled>
        DISABLED
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="outlined" href="/" color='primary'>
        LINK
      </Button>
    </Box>
  </Box>
);

export const underlined = () => (
  <Box display="flex" m="20px">
    <Button variant="underlined">
      DEFAULT
    </Button>

    <Box ml="10px">
      <Button variant="underlined" color='primary'>
        PRIMARY
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="underlined" color='accent'>
        ACCENT
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="underlined" disabled>
        DISABLED
      </Button>
    </Box>

    <Box ml="10px">
      <Button variant="underlined" href="/" color='primary'>
        LINK
      </Button>
    </Box>
  </Box>
);

export const sizes = () => (
  <Box mt="20px">
    <Box m="20px" display="flex">
      <Button size='small'>
        DEFAULT
      </Button>

      <Box ml="10px">
        <Button color='primary' size="small">
          PRIMARY
        </Button>
      </Box>

      <Box ml="10px">
        <Button color='accent' size="small">
          ACCENT
        </Button>
      </Box>
    </Box>

    <Box m="20px" display="flex">
      <Button variant="outlined" size="medium">
        DEFAULT
      </Button>

      <Box ml="10px">
        <Button variant="outlined" color='primary' size="medium">
          PRIMARY
        </Button>
      </Box>

      <Box ml="10px">
        <Button variant="outlined" color='accent' size="medium">
          ACCENT
        </Button>
      </Box>
    </Box>

    <Box m="20px" display="flex">
      <Button variant="flat" size="larger">
        DEFAULT
      </Button>

      <Box ml="10px">
        <Button variant="flat" color='primary' size="larger">
          PRIMARY
        </Button>
      </Box>

      <Box ml="10px">
        <Button variant="flat" color='accent' size="larger">
          ACCENT
        </Button>
      </Box>
    </Box>
  </Box>
);