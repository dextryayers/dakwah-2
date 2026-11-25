import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import '../../fonts';
import {C} from '../../styles/colors';
import {Scene01Hook, SCENE_01_DURATION} from './Scene01Hook';
import {Scene02Conflict, SCENE_02_DURATION} from './Scene02Conflict';
import {Scene03Hadith, SCENE_03_DURATION} from './Scene03Hadith';
import {Scene04Understanding, SCENE_04_DURATION} from './Scene04Understanding';
import {Scene05Reflection, SCENE_05_DURATION} from './Scene05Reflection';
import {Scene06Closing, SCENE_06_DURATION} from './Scene06Closing';

const S = [
  {c: Scene01Hook, d: SCENE_01_DURATION},
  {c: Scene02Conflict, d: SCENE_02_DURATION},
  {c: Scene03Hadith, d: SCENE_03_DURATION},
  {c: Scene04Understanding, d: SCENE_04_DURATION},
  {c: Scene05Reflection, d: SCENE_05_DURATION},
  {c: Scene06Closing, d: SCENE_06_DURATION},
] as const;

export const TOTAL_DURATION = S.reduce((a, s) => a + s.d, 0);

export const MainVideo: React.FC = () => {
  let from = 0;
  return (
    <AbsoluteFill style={{backgroundColor: C.paper}}>
      {S.map((s, i) => {
        const Component = s.c;
        const start = from;
        from += s.d;
        return (
          <Sequence key={i} from={start} durationInFrames={s.d} name={`Scene 0${i + 1}`}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
