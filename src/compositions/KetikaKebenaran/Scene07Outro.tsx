import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {Kicker} from '../../components/Kicker';
import {Rule} from '../../components/Rule';
import {C} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp} from '../../utils/animations';


/**
 * THE OUTRO.
 * After the closing line lands, the page flips back to paper and shrinks to a
 * signature: the account handle set as a typographic mark rather than a logo,
 * with one line of attribution beneath it. Nothing else.
 */
export const Scene07Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const in1 = Math.max(0.9, lerp(frame, 0, 20, 0, 1));
  const in2 = lerp(frame, 18, 48, 0, 1);
  const in3 = lerp(frame, 44, 76, 0, 1);
  const ruleP = lerp(frame, 62, 100, 0, 1);

  return (
    <Scene>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={0} color={C.stone} size={18}>Selesai</Kicker>
        <Kicker at={4} color={C.stone} size={18}>07 / 07</Kicker>
      </div>
      <Rule at={6} dur={40} style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      <div style={{position: 'absolute', left: M, right: M, top: 700}}>
        <div style={{opacity: in1, transform: `translateY(${(1 - in1) * 14}px)`}}>
          <Kicker at={0} color={C.signal} size={19}>Terima kasih telah menonton</Kicker>
        </div>

        <div style={{marginTop: 40, opacity: in2, transform: `translateY(${(1 - in2) * 18}px)`}}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: '-0.045em',
              color: C.ink,
            }}
          >
            @hanziip.kds
          </div>
        </div>

        <div style={{marginTop: 34, width: 200 * ruleP, height: 2, backgroundColor: C.signal}} />

        <div style={{marginTop: 34, opacity: in3, transform: `translateY(${(1 - in3) * 14}px)`}}>
          <div style={{fontFamily: F.body, fontSize: 26, lineHeight: 1.6, color: C.stone, maxWidth: 720}}>
            Ikuti untuk esai visual berikutnya.
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 96, opacity: in3}}>
        <div style={{fontFamily: F.body, fontSize: 18, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.stone}}>
          Ketika Kebenaran Terasa Asing
        </div>
      </div>
    </Scene>
  );
};
