import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import '../../fonts';
import {AudioTrack} from '../../components/AudioTrack';
import {C} from '../../styles/colors';
import {Scene01Hook} from './Scene01Hook';
import {Scene02Conflict} from './Scene02Conflict';
import {Scene03Hadith} from './Scene03Hadith';
import {Scene04Understanding} from './Scene04Understanding';
import {Scene05Reflection} from './Scene05Reflection';
import {Scene06Closing} from './Scene06Closing';
import {Scene07Outro} from './Scene07Outro';
import {SCENES, STARTS, TOTAL} from './timeline';

export const TOTAL_DURATION = TOTAL;

const COMPONENTS = [
  Scene01Hook,
  Scene02Conflict,
  Scene03Hadith,
  Scene04Understanding,
  Scene05Reflection,
  Scene06Closing,
  Scene07Outro,
];

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: C.paper}}>
    <AudioTrack />
    {SCENES.map((s, i) => {
      const Component = COMPONENTS[i];
      return (
        <Sequence key={s.id} from={STARTS[i]} durationInFrames={s.duration} name={`Scene ${s.id}`}>
          <Component />
        </Sequence>
      );
    })}
  </AbsoluteFill>
);
