import React from 'react';
import Icon from './Icon';
import IconStack from './IconStack';
import { Box } from '../Box';
import {
  mdiAccount,
  mdiAccountOutline,
  mdiAccountSearch,
  mdiHeart,
  mdiLoading,
  mdiSmoking,
  mdiBlockHelper,
  mdiFormatColorFill,
  mdiColorHelper,
} from '@mdi/js';

export default { title: 'Icon' };

export const basic = () => (
  <Box>
    <Icon path={mdiAccount} />
    <Icon path={mdiAccountOutline} />
    <Icon path={mdiAccountSearch} />
  </Box>
);

export const size = () => (
  <>
    <Box textAlign="center">
      <Icon path={mdiAccount} title="User Profile" size={1} />

      <Icon path={mdiAccount} title="User Profile" size={1} />

      <Icon path={mdiAccount} title="User Profile" size={1} />

      <Icon path={mdiAccount} title="User Profile" size={1} />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} title="User Profile" size={2} />

      <Icon path={mdiAccount} title="User Profile" size={2} />

      <Icon path={mdiAccount} title="User Profile" size={2} />

      <Icon path={mdiAccount} title="User Profile" size={2} />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} title="User Profile" size={3} />

      <Icon path={mdiAccount} title="User Profile" size={3} />

      <Icon path={mdiAccount} title="User Profile" size={3} />

      <Icon path={mdiAccount} title="User Profile" size={3} />
    </Box>
    <Box textAlign="center">
      <Icon path={mdiAccount} title="User Profile" size={'90px'} />

      <Icon path={mdiAccount} title="User Profile" size={'90px'} />

      <Icon path={mdiAccount} title="User Profile" size={'90px'} />

      <Icon path={mdiAccount} title="User Profile" size={'90px'} />

      <Icon path={mdiAccount} title="User Profile" size={'90px'} />
    </Box>
  </>
);

export const color = () => (
  <Box>
    <Icon path={mdiHeart} title="Heart" size={2} color="red" />

    <Icon path={mdiHeart} title="Heart" size={2} color="blue" />

    <Icon path={mdiHeart} title="Heart" size={2} color="pink" />

    <Icon path={mdiHeart} title="Heart" size={2} color="yellowgreen" />
  </Box>
);

export const rotate = () => (
  <Box>
    <Icon path={mdiAccountSearch} rotate={0} />
    <Icon path={mdiAccountSearch} rotate={45} />
    <Icon path={mdiAccountSearch} rotate={90} />
  </Box>
);

export const position = () => (
  <Box>
    <Icon path={mdiAccountSearch} horizontal />
    <Icon path={mdiAccountSearch} vertical />
    <Icon path={mdiAccountSearch} horizontal rotate={90} spin/>
  </Box>
);

export const spin = () => (
  <>
    <Icon path={mdiLoading} spin />
    <Icon path={mdiLoading} spin={false} />
    <Icon path={mdiLoading} spin={true} />
    <Icon path={mdiLoading} spin={1} />
    <Icon path={mdiLoading} spin={5} />
    <Icon path={mdiLoading} spin={-2} />
    <Icon path={mdiLoading} spin={-5} />
  </>
);

export const stack = () => (
  <Box ml="10px">
    <Box>
      <h4>Basic</h4>
      <IconStack size={1}>
        <Icon path={mdiSmoking} />
        <Icon path={mdiBlockHelper} color="red" />
      </IconStack>
    </Box>

    <Box>
      <h4>Color Helper</h4>
      <IconStack size={2}>
        <Icon path={mdiFormatColorFill}/>
        <Icon path={mdiColorHelper} color="blue"/>
      </IconStack>
    </Box>

    <Box>
      <h4>Scaling</h4>
      <IconStack size={2}>
        <Icon path={mdiSmoking} color="#444" size={1}/>
        <Icon path={mdiBlockHelper} color="red"/>
      </IconStack>
      <IconStack size={2}>
        <Icon path={mdiAccountSearch} color="#444" size={1.5}/>
        <Icon path={mdiBlockHelper} color="red"/>
      </IconStack>
      <IconStack size={2} spin>
        <Icon path={mdiSmoking} color="#444" size={1}/>
        <Icon path={mdiBlockHelper} color="red"/>
      </IconStack>
      <IconStack size={2}>
        <Icon path={mdiSmoking} color="#444" size={1} spin={5} />
        <Icon path={mdiBlockHelper} color="red" spin/>
      </IconStack>
    </Box>
  </Box>
);
