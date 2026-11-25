import React, {CSSProperties} from 'react';
import {C} from '../styles/colors';
import {F} from '../styles/typography';
import {lerp} from '../utils/animations';
import {useCurrentFrame} from 'remotion';

/** Small tracked caps label — the editorial running-head voice. */
export const Kicker: React.FC<{
  at: number;
  children: React.ReactNode;
  color?: string;
  size?: number;
  style?: CSSProperties;
}> = ({at, children, color = C.stone, size = 20, style}) => {
  const frame = useCurrentFrame();
  const p = lerp(frame, at, at + 26, 0, 1);
  return (
    <div
      style={{
        fontFamily: F.body,
        fontSize: size,
        fontWeight: 500,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color,
        opacity: p,
        transform: `translateY(${(1 - p) * 10}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Printed-page folio: scene number, rule, section name. */
export const Folio: React.FC<{
  at: number;
  n: string;
  label: string;
  color?: string;
  style?: CSSProperties;
}> = ({at, n, label, color = C.stone, style}) => {
  const frame = useCurrentFrame();
  const p = lerp(frame, at, at + 30, 0, 1);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        opacity: p,
        fontFamily: F.body,
        fontSize: 19,
        fontWeight: 500,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      <span style={{fontVariantNumeric: 'tabular-nums', color: C.signal}}>{n}</span>
      <span style={{height: 1, width: 40 * p, backgroundColor: 'currentColor', opacity: 0.4}} />
      <span>{label}</span>
    </div>
  );
};
