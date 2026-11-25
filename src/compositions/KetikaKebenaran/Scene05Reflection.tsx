import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {MaskLine} from '../../components/MaskLine';
import {Kicker, Folio} from '../../components/Kicker';
import {Rule} from '../../components/Rule';
import {C} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp} from '../../utils/animations';


/**
 * THE REFLECTION.
 * Deliberate decompression: one idea per line, wide leading, the only scene
 * with no data furniture. Motion slows by design — the edit's pace mirrors
 * the pace of the instruction.
 */
export const Scene05Reflection: React.FC = () => {
  const frame = useCurrentFrame();

  const steps = [
    {at: 132, n: '01', t: 'Periksa ilmunya.'},
    {at: 178, n: '02', t: 'Pahami dalilnya.'},
    {at: 250, n: '03', t: 'Ikuti petunjuk Rasulullah ﷺ.'},
  ];

  return (
    <Scene>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Folio at={4} n="05" label="The Reflection" />
        <Kicker at={10} color={C.stone} size={18}>Istiqamah</Kicker>
      </div>
      <Rule at={10} dur={44} style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      {/* opening couplet */}
      <div style={{position: 'absolute', left: M, right: M, top: 330}}>
        <MaskLine at={18} dur={40} style={{marginBottom: 14}}>
          <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 92, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.ink}}>
            Maka jangan berhenti
          </div>
        </MaskLine>
        <MaskLine at={30} dur={40} style={{marginBottom: 14}}>
          <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 92, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.ink}}>
            belajar hanya karena
          </div>
        </MaskLine>
        <MaskLine at={42} dur={40}>
          <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 92, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.stone}}>
            merasa berbeda.
          </div>
        </MaskLine>
      </div>

      {/* the three instructions */}
      <div style={{position: 'absolute', left: M, right: M, top: 830}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 40, opacity: lerp(frame, 112, 142, 0, 1)}}>
          <Kicker at={112} color={C.stone} size={17}>Langkahnya</Kicker>
          <div style={{flex: 1, height: 1, backgroundColor: 'rgba(23,23,23,0.12)'}} />
        </div>
        {steps.map((s) => {
          const p = lerp(frame, s.at, s.at + 34, 0, 1);
          return (
            <div
              key={s.n}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 32,
                padding: '22px 0',
                opacity: p,
                transform: `translateX(${(1 - p) * -20}px)`,
              }}
            >
              <span style={{fontFamily: F.body, fontSize: 20, letterSpacing: '0.14em', color: C.signal, fontVariantNumeric: 'tabular-nums'}}>
                {s.n}
              </span>
              <span style={{fontFamily: F.display, fontSize: 56, fontWeight: 400, letterSpacing: '-0.025em', color: C.ink}}>
                {s.t}
              </span>
            </div>
          );
        })}
      </div>

      {/* closing petition — the only centred block in the film */}
      <div style={{position: 'absolute', left: M, right: M, bottom: 270, textAlign: 'center'}}>
        <div style={{opacity: lerp(frame, 340, 386, 0, 1)}}>
          <div style={{fontFamily: F.body, fontSize: 21, letterSpacing: '0.26em', textTransform: 'uppercase', color: C.stone}}>
            Dan mintalah kepada Allah
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: F.serif,
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 62,
              lineHeight: 1.32,
              color: C.ink,
            }}
          >
            agar senantiasa diteguhkan
            <br />
            di atas kebenaran.
          </div>
          <div style={{width: 64, height: 2, backgroundColor: C.signal, margin: '38px auto 0'}} />
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 90, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={420} color={C.stone} size={17}>Belajar · Memahami · Mengikuti</Kicker>
        <Kicker at={426} color={C.stone} size={17}>05</Kicker>
      </div>
    </Scene>
  );
};
