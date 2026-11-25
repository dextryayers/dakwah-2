import React, {CSSProperties} from 'react';
import {useCurrentFrame} from 'remotion';
import {C} from '../styles/colors';
import {lerp} from '../utils/animations';

/** Hairline that draws along its own axis. */
export const Rule: React.FC<{
  at: number;
  dur?: number;
  color?: string;
  thickness?: number;
  vertical?: boolean;
  style?: CSSProperties;
}> = ({at, dur = 36, color = 'rgba(23,23,23,0.18)', thickness = 1, vertical = false, style}) => {
  const frame = useCurrentFrame();
  const p = lerp(frame, at, at + dur, 0, 1);
  return (
    <div
      style={{
        backgroundColor: color,
        width: vertical ? thickness : `${p * 100}%`,
        height: vertical ? `${p * 100}%` : thickness,
        ...style,
      }}
    />
  );
};

/** Solid signal square — the only recurring ornament, and it always marks content. */
export const SignalSquare: React.FC<{at: number; size?: number; style?: CSSProperties}> = ({
  at,
  size = 12,
  style,
}) => {
  const frame = useCurrentFrame();
  const p = lerp(frame, at, at + 18, 0, 1);
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: C.signal,
        opacity: p,
        transform: `scale(${0.3 + p * 0.7})`,
        flexShrink: 0,
        ...style,
      }}
    />
  );
};
