import {Easing, interpolate, spring} from 'remotion';

export const CLAMP = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** Long, decelerating ease — the house curve for editorial motion. */
export const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
export const EASE_IN_OUT = Easing.bezier(0.65, 0, 0.35, 1);

export const lerp = (
  frame: number,
  from: number,
  to: number,
  a = 0,
  b = 1,
  easing = EASE_OUT,
) => interpolate(frame, [from, to], [a, b], {...CLAMP, easing});

export const fade = (frame: number, at: number, dur = 24) =>
  lerp(frame, at, at + dur, 0, 1);

/** Settled spring: no bounce, slight settle. */
export const springAt = (
  frame: number,
  fps: number,
  at: number,
  config: {damping?: number; stiffness?: number; mass?: number} = {},
) =>
  spring({
    frame: Math.max(0, frame - at),
    fps,
    config: {damping: 200, stiffness: 110, mass: 0.8, ...config},
  });
