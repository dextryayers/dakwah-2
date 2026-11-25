import React, {CSSProperties} from 'react';
import {useCurrentFrame} from 'remotion';
import {C} from '../styles/colors';
import {F} from '../styles/typography';
import {lerp} from '../utils/animations';

/**
 * Arabic scripture block.
 * RTL enforced on the container. Words rise in reading order (right→left)
 * so the eye follows the script, not a generic left-to-right stagger.
 */
export const ArabicText: React.FC<{
  at: number;
  text: string;
  size?: number;
  color?: string;
  lineHeight?: number;
  align?: 'right' | 'center';
  stagger?: number;
  style?: CSSProperties;
}> = ({at, text, size = 60, color = C.ink, lineHeight = 1.9, align = 'right', stagger = 4, style}) => {
  const frame = useCurrentFrame();
  const words = text.trim().split(/\s+/);
  return (
    <div
      dir="rtl"
      lang="ar"
      style={{
        fontFamily: F.arabic,
        fontSize: size,
        lineHeight,
        color,
        textAlign: align,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        columnGap: size * 0.24,
        ...style,
      }}
    >
      {words.map((w, i) => {
        const p = lerp(frame, at + i * stagger, at + i * stagger + 24, 0, 1);
        return (
          <span
            key={`${w}-${i}`}
            style={{
              display: 'inline-block',
              opacity: p,
              transform: `translateY(${(1 - p) * size * 0.2}px)`,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
