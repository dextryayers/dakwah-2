import React, {CSSProperties} from 'react';
import {C} from '../styles/colors';
import {F} from '../styles/typography';

/**
 * The salawat ligature (U+FDFA) needs Amiri and enough size to stay legible;
 * in a Latin font it falls back to a dense system glyph that reads as noise.
 */
export const Salawat: React.FC<{style?: CSSProperties}> = ({style}) => (
  <span
    style={{
      fontFamily: F.arabic,
      fontSize: '0.95em',
      lineHeight: 1,
      letterSpacing: 0,
      color: C.signal,
      padding: '0 0.04em',
      whiteSpace: 'nowrap',
      ...style,
    }}
  >
    ﷺ
  </span>
);
