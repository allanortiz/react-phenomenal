import React from 'react';
import Icon from './Icon';
import { Box } from '../Box';
import { mdiAccount } from '@mdi/js';

export default { title: 'Icon' };

export const basic = () => (
  <>
    <Box textAlign="center">
      <Icon path={mdiAccount} 
        title="User Profile"
        size={1} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={1} />
      
      <Icon path={mdiAccount} 
        title="User Profile"
        size={1} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={1} />
      
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2} />
        
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2} />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} 
        title="User Profile"
        size={3} />
        
      <Icon path={mdiAccount} 
        title="User Profile"
        size={3} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={3} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={3} />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="red" />
        
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="blue" />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="pink" />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="yellowgreen" />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="red"
        horizontal />
        
      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="blue"
        vertical />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="pink"
        rotate={90} />

      <Icon path={mdiAccount} 
        title="User Profile"
        size={2}
        color="yellowgreen"
        spin />
    </Box>
  </>
);