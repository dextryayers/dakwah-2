import React, {CSSProperties} from 'react';
import {AbsoluteFill} from 'remotion';
import {C} from '../styles/colors';

/**
 * Scene canvas.
 * Cuts are hard by design: each scene opens on its own field of colour, so no
 * cross-fade is needed (and a fade would flash the parent background).
 */
export const Scene: React.FC<{
  bg?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}> = ({bg = C.paper, children, style}) => (
  <AbsoluteFill style={{backgroundColor: bg, overflow: 'hidden', ...style}}>
    {children}
  </AbsoluteFill>
);
