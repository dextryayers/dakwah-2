import React from 'react';
import {Composition} from 'remotion';
import {MainVideo, TOTAL_DURATION} from './compositions/KetikaKebenaran/MainVideo';
import {W, H} from './styles/layout';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="KetikaKebenaran"
      component={MainVideo}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={W}
      height={H}
    />
  );
};
