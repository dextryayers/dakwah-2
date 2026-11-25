import React, {CSSProperties} from 'react';
import {useCurrentFrame} from 'remotion';
import {C} from '../styles/colors';
import {F} from '../styles/typography';
import {lerp} from '../utils/animations';

/**
 * Qur'an / hadith attribution. Always fully legible — the reference is
 * part of the argument, not a footnote to hide.
 */
export const ReferenceLabel: React.FC<{
  at: number;
  source: string;
  detail?: string;
  color?: string;
  mutedColor?: string;
  size?: number;
  style?: CSSProperties;
}> = ({at, source, detail, color = C.ink, mutedColor = C.stone, size = 23, style}) => {
  const frame = useCurrentFrame();
  const p = lerp(frame, at, at + 30, 0, 1);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 13,
        opacity: p,
        transform: `translateY(${(1 - p) * 8}px)`,
        ...style,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          backgroundColor: C.signal,
          display: 'inline-block',
          transform: 'translateY(-3px)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: F.body,
          fontSize: size,
          fontWeight: 500,
          letterSpacing: '0.06em',
          color,
          whiteSpace: 'nowrap',
        }}
      >
        {source}
      </span>
      {detail ? (
        <span
          style={{
            fontFamily: F.body,
            fontSize: size - 2,
            letterSpacing: '0.01em',
            color: mutedColor,
          }}
        >
          {detail}
        </span>
      ) : null}
    </div>
  );
};
