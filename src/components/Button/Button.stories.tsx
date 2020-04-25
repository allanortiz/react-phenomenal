import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const basic = () => (
  <div>
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
  </div>
);

export const raised = () => (
  <div>
    <Button variant="raised">
      DEFAULT
    </Button>

    <Button variant="raised" color='primary'>
      PRIMARY
    </Button>

    <Button variant="raised" color='accent'>
      ACCENT
    </Button>

    <Button variant="raised" disabled>
      DISABLED
    </Button>

    <Button variant="raised" href="/" color='primary'>
      LINK
    </Button>
  </div>
);

export const flat = () => (
  <div>
    <Button variant="flat">
      DEFAULT
    </Button>

    <Button variant="flat" color='primary'>
      PRIMARY
    </Button>

    <Button variant="flat" color='accent'>
      ACCENT
    </Button>

    <Button variant="flat" disabled>
      DISABLED
    </Button>

    <Button variant="flat" href="/" color='primary'>
      LINK
    </Button>
  </div>
);

export const outlined = () => (
  <div>
    <Button variant="outlined">
      DEFAULT
    </Button>

    <Button variant="outlined" color='primary'>
      PRIMARY
    </Button>

    <Button variant="outlined" color='accent'>
      ACCENT
    </Button>

    <Button variant="outlined" disabled>
      DISABLED
    </Button>

    <Button variant="outlined" href="/" color='primary'>
      LINK
    </Button>
  </div>
);

export const underlined = () => (
  <div>
    <Button variant="underlined">
      DEFAULT
    </Button>

    <Button variant="underlined" color='primary'>
      PRIMARY
    </Button>

    <Button variant="underlined" color='accent'>
      ACCENT
    </Button>

    <Button variant="underlined" disabled>
      DISABLED
    </Button>

    <Button variant="underlined" href="/" color='primary'>
      LINK
    </Button>
  </div>
);

export const sizes = () => (
  <div>
    <div>
      <Button size='small'>
        DEFAULT
      </Button>

      <Button color='primary' size="small">
        PRIMARY
      </Button>

      <Button color='accent' size="small">
        ACCENT
      </Button>
    </div>

    <div>
      <Button variant="outlined" size="medium">
        DEFAULT
      </Button>

      <Button variant="outlined" color='primary' size="medium">
        PRIMARY
      </Button>

      <Button variant="outlined" color='accent' size="medium">
        ACCENT
      </Button>
    </div>

    <div>
      <Button variant="flat" size="larger">
        DEFAULT
      </Button>

      <Button variant="flat" color='primary' size="larger">
        PRIMARY
      </Button>

      <Button variant="flat" color='accent' size="larger">
        ACCENT
      </Button>
    </div>
  </div>
);