import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {SFX, STARTS, VO} from '../compositions/KetikaKebenaran/timeline';

/**
 * Narration + transition sound design.
 * VO is absolute-positioned from the scene-relative cue in timeline.ts so a
 * line can never drift from the layout it describes. The ambient bed is
 * side-chained in spirit (fixed low level) so speech always sits on top.
 */
export const AudioTrack: React.FC = () => (
  <AbsoluteFill>
    <Audio src={staticFile('ambient-bed.wav')} volume={0.18} />

    {VO.map((v, i) => (
      <Sequence key={`vo-${i}`} from={STARTS[v.scene - 1] + v.at} layout="none">
        <Audio src={staticFile(`vo/${v.file}`)} volume={1} />
      </Sequence>
    ))}

    {SFX.map((s, i) => (
      <Sequence key={`sfx-${i}`} from={s.at} layout="none">
        <Audio src={staticFile(`sfx/${s.file}`)} volume={s.volume} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
