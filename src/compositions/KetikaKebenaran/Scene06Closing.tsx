import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {Kicker} from '../../components/Kicker';
import {Rule} from '../../components/Rule';
import {ReferenceLabel} from '../../components/ReferenceLabel';
import {C} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp} from '../../utils/animations';

export const SCENE_06_DURATION = 300; // 55–65s

/**
 * THE CLOSING.
 * The largest type in the film, held. Two statements stacked on the left
 * margin; the second carries the accent. Everything else is stripped away so
 * the last held frame is the message itself.
 */
export const Scene06Closing: React.FC = () => {
  const frame = useCurrentFrame();

  const in1 = lerp(frame, 4, 36, 0, 1);
  const in2 = lerp(frame, 30, 62, 0, 1);
  const ruleP = lerp(frame, 80, 116, 0, 1);
  const footIn = lerp(frame, 118, 152, 0, 1);

  return (
    <Scene bg={C.ink}>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={0} color={C.stone} size={18}>Penutup</Kicker>
        <Kicker at={4} color={C.stone} size={18}>06 / 06</Kicker>
      </div>
      <Rule at={6} dur={44} color="rgba(242,240,232,0.18)" style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      <div style={{position: 'absolute', left: M, right: M, top: 400}}>
        <div style={{opacity: in1, transform: `translateY(${(1 - in1) * 18}px)`}}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 100,
              lineHeight: 1.0,
              letterSpacing: '-0.05em',
              color: C.stone,
            }}
          >
            JANGAN MENCARI
            <br />
            PENGAKUAN
            <br />
            MANUSIA.
          </div>
        </div>

        <div style={{marginTop: 96, opacity: in2, transform: `translateY(${(1 - in2) * 18}px)`}}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 100,
              lineHeight: 1.0,
              letterSpacing: '-0.05em',
              color: C.paper,
            }}
          >
            CARILAH
            <br />
            <span style={{color: C.signal}}>RIDHA ALLAH.</span>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, top: 1230, opacity: ruleP}}>
        <div style={{width: 220, height: 2, backgroundColor: C.signal}} />
      </div>

      {/* final reference block — quiet, complete, verifiable */}
      <div style={{position: 'absolute', left: M, right: M, bottom: 300, opacity: footIn}}>
        <div style={{fontFamily: F.body, fontSize: 18, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.stone, marginBottom: 24}}>
          Rujukan
        </div>
        <ReferenceLabel at={122} source="QS. Al-Isra: 36" detail="larangan mengikuti tanpa ilmu" color={C.paper} mutedColor={C.stone} size={22} />
        <div style={{height: 14}} />
        <ReferenceLabel at={132} source="HR. Muslim no. 145" detail="Kitab al-Īmān" color={C.paper} mutedColor={C.stone} size={22} />
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 120, display: 'flex', justifyContent: 'space-between', opacity: footIn}}>
        <Kicker at={140} color={C.stone} size={17}>Ketika Kebenaran Terasa Asing</Kicker>
        <Kicker at={146} color={C.stone} size={17}>Selesai</Kicker>
      </div>
    </Scene>
  );
};
