import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Scene} from '../../components/Scene';
import {MaskLine} from '../../components/MaskLine';
import {Kicker} from '../../components/Kicker';
import {SignalSquare, Rule} from '../../components/Rule';
import {C} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp, springAt} from '../../utils/animations';

export const SCENE_01_DURATION = 210; // 0–7s

/**
 * THE HOOK.
 * One gigantic ASING, clipped into existence, bleeding toward both margins.
 * The question is printed small above it; the payoff line sits below.
 * As the payoff arrives the word nudges left and the page rebalances —
 * the recomposition is the transition, there is no second layout.
 */
export const Scene01Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // ASING is uncovered upward, then settles very slightly in scale.
  const wordP = springAt(frame, fps, 12, {damping: 190, stiffness: 90});
  const scale = lerp(frame, 12, 200, 1.04, 1.0);
  const shiftX = lerp(frame, 118, 158, 0, -30);

  const pre = lerp(frame, 2, 20, 0, 1);
  const preOut = lerp(frame, 34, 46, 1, 0);

  const meta = lerp(frame, 66, 92, 0, 1);
  const turnIn = lerp(frame, 112, 146, 0, 1);

  return (
    <Scene>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={0} color={C.ink}>Editorial Dakwah</Kicker>
        <Kicker at={6} color={C.stone}>01 / 06</Kicker>
      </div>
      <Rule at={8} dur={40} style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      {/* the question, set small */}
      <div
        style={{
          position: 'absolute',
          left: M,
          top: 286,
          fontFamily: F.body,
          fontSize: 40,
          fontWeight: 400,
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
          color: C.ink,
          opacity: pre * preOut,
          transform: `translateY(${(1 - pre) * 16}px)`,
        }}
      >
        Bagaimana jika suatu hari —
      </div>

      {/* THE WORD */}
      <div
        style={{
          position: 'absolute',
          left: M - 28,
          right: M - 28,
          top: 470,
          transform: `translateX(${shiftX}px) scale(${scale})`,
          transformOrigin: 'left 55%',
        }}
      >
        <div style={{overflow: 'hidden'}}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 380,
              lineHeight: 0.8,
              letterSpacing: '-0.055em',
              color: C.ink,
              clipPath: `inset(${(1 - wordP) * 100}% 0 0 0)`,
              transform: `translateY(${(1 - wordP) * 14}%)`,
              whiteSpace: 'nowrap',
            }}
          >
            ASING
          </div>
        </div>
        <Rule at={40} dur={30} color={C.signal} thickness={10} style={{marginTop: 22, width: 200}} />
      </div>

      {/* meta row */}
      <div style={{position: 'absolute', left: M, top: 930, width: CONTENT, opacity: meta}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
          <Kicker at={66} color={C.stone} size={18}>Ghurbah — keterasingan</Kicker>
          <span style={{fontFamily: F.body, fontSize: 18, letterSpacing: '0.22em', color: C.stone, textTransform: 'uppercase'}}>
            9:16 · 2026
          </span>
        </div>
      </div>
      <Rule at={70} dur={40} style={{position: 'absolute', left: M, top: 976, width: CONTENT}} />

      {/* the turn */}
      <div style={{position: 'absolute', left: M, right: M, top: 1100, opacity: turnIn, transform: `translateY(${(1 - turnIn) * 26}px)`}}>
        <MaskLine at={118} dur={36}>
          <div
            style={{
              fontFamily: F.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 104,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: C.ink,
            }}
          >
            kebenaran justru
          </div>
        </MaskLine>
        <MaskLine at={128} dur={36}>
          <div
            style={{
              fontFamily: F.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 104,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: C.ink,
            }}
          >
            membuatmu merasa
            <span style={{color: C.signal}}> asing?</span>
          </div>
        </MaskLine>

        <div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 52, opacity: lerp(frame, 148, 176, 0, 1)}}>
          <SignalSquare at={148} size={11} />
          <span style={{fontFamily: F.body, fontSize: 24, letterSpacing: '0.03em', color: C.stone}}>
            Sebuah esai visual tentang berpegang pada kebenaran
          </span>
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 96, display: 'flex', justifyContent: 'space-between', opacity: meta}}>
        <Kicker at={78} color={C.stone} size={17}>Kebenaran · Ilmu · Istiqamah</Kicker>
        <Kicker at={84} color={C.stone} size={17}>↓</Kicker>
      </div>
    </Scene>
  );
};
