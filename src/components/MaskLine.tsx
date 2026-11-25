import React, {CSSProperties} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, EASE_OUT} from '../utils/animations';

/**
 * Masked line reveal: the line is uncovered upward from its own baseline.
 * This is the video's primary typographic gesture — used for every
 * headline-weight line so the motion language stays consistent.
 */
export const MaskLine: React.FC<{
  at: number;
  dur?: number;
  children: React.ReactNode;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
}> = ({at, dur = 30, children, style, innerStyle}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [at, at + dur], [0, 1], {...CLAMP, easing: EASE_OUT});
  return (
    <div style={{overflow: 'hidden', ...style}}>
      <div
        style={{
          clipPath: `inset(${(1 - p) * 100}% 0 0 0)`,
          transform: `translateY(${(1 - p) * 14}%)`,
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};
