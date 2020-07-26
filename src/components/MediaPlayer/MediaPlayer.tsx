import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import styled from 'styled-components';

export type Plugin = {
  run: () => void;
};

type MediaPlayerProps = {
  autoplay?: boolean;
  controls?: boolean;
  controlsSlot?: () => React.ReactElement;
  loop?: boolean;
  muted?: boolean;
  played?: boolean;
  plugins?: Plugin[];
  source?: string;
  volume?: number;
};

const MediaPlayer: React.FC<MediaPlayerProps> = ({
  autoplay,
  controls,
  controlsSlot,
  loop,
  muted,
  played,
  plugins = [],
  source,
  volume = 1,
}) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  let videoRef = useRef<HTMLVideoElement>(null);

  const mute = () => {
    video!.muted = true;
  };

  const unmute = () => {
    video!.muted = false;
  };

  const pause = () => {
    video!.pause();
  };

  const play = () => {
    video!.play();
  };

  const togglePlay = () => {
    if (!video) return;

    if (video.paused) {
      play();

      return;
    }

    pause();
  };

  useEffect(() => {
    if (!videoRef.current) return;

    setVideo(videoRef.current);
  }, [videoRef]);

  useEffect(() => {
    if (!video) return;

    if (autoplay) {
      mute();
      play();
    }
  }, [video]);

  useEffect(() => {
    plugins.forEach((plugin: Plugin) => plugin.run());
  }, [plugins]);

  if (video) {
    muted ? mute() : unmute();
    played ? play() : pause();
  }

  return (
    <Box position="relative">
      <video
        ref={videoRef}
        controls={controls}
        loop={loop}
        volume={volume}
        width="100%"
        height="100%"
      >
        <source src={source} />
      </video>

      {controlsSlot && controlsSlot()}
    </Box>
  );
};

export default MediaPlayer;
