import React, { useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import MediaPlayer, { Plugin } from './MediaPlayer';
import styled from 'styled-components';

export default { title: 'MediaPlayer' };

const source = 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4';

const ButtonsContainer = styled(Box)`
  & > * {
    margin: 0 10px;
  }
`;

export const basic = () => (
  <Box width="700px" height="450px">
    <MediaPlayer controls source={source} />;
  </Box>
);

export const autoPlayAndLoop = () => (
  <Box width="700px" height="450px">
    <MediaPlayer autoplay loop source={source} />
  </Box>
);

export const CustomControls = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);

  return (
    <Box width="700px" height="450px">
      <MediaPlayer
        source={source}
        played={play}
        muted={mute}
        controlsSlot={() => (
          <ButtonsContainer
            position="absolute"
            display="flex"
            flexDirection="row"
            bottom="15px"
            left="0"
          >
            <Button
              color="primary"
              variant="raised"
              onClick={() => setPlay(true)}
            >
              Play
            </Button>
            <Button
              color="primary"
              variant="raised"
              onClick={() => setPlay(false)}
            >
              Pause
            </Button>
            <Button
              color="primary"
              variant="raised"
              onClick={() => setMute(true)}
            >
              Mute
            </Button>
            <Button
              color="primary"
              variant="raised"
              onClick={() => setMute(false)}
            >
              Unmute
            </Button>
          </ButtonsContainer>
        )}
      />
    </Box>
  );
};
