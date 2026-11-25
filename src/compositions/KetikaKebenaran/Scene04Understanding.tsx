import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Scene} from '../../components/Scene';
import {MaskLine} from '../../components/MaskLine';
import {ArabicText} from '../../components/ArabicText';
import {ReferenceLabel} from '../../components/ReferenceLabel';
import {Kicker, Folio} from '../../components/Kicker';
import {Rule, SignalSquare} from '../../components/Rule';
import {Salawat} from '../../components/Salawat';
import {C, INK_12} from '../../styles/colors';
import {F} from '../../styles/typography';
import {M, CONTENT} from '../../styles/layout';
import {lerp} from '../../utils/animations';


/**
 * THE UNDERSTANDING.
 * The one scene that makes an explicit argument, so it is the one scene built
 * as information design: a numbered index of three criteria, then the ayah
 * set in a framed block beneath. Numbering here is functional, not ornamental.
 */
export const Scene04Understanding: React.FC = () => {
  const frame = useCurrentFrame();

  const headIn = Math.max(0.9, lerp(frame, 0, 22, 0, 1));
  const ayahIn = lerp(frame, 452, 492, 0, 1);
  const negIn = Math.max(0.8, lerp(frame, 160, 186, 0, 1));
  const negOut = lerp(frame, 360, 392, 0, 1);

  const items: Array<{n: string; at: number; title: React.ReactNode; sub: string}> = [
    {n: '01', at: 392, title: 'Petunjuk Allah', sub: 'bukan suara mayoritas'},
    {n: '02', at: 414, title: 'Ilmu yang benar', sub: 'bukan sekadar perasaan'},
    {
      n: '03',
      at: 436,
      title: (
        <>
          Tuntunan Rasulullah <Salawat />
        </>
      ),
      sub: 'bukan tradisi tanpa dalil',
    },
  ];

  return (
    <Scene>
      <div style={{position: 'absolute', left: M, top: 92, right: M, display: 'flex', justifyContent: 'space-between'}}>
        <Folio at={4} n="04" label="The Understanding" />
        <Kicker at={10} color={C.stone} size={18}>Ukuran Kebenaran</Kicker>
      </div>
      <Rule at={10} dur={40} style={{position: 'absolute', left: M, top: 132, width: CONTENT}} />

      {/* the correction */}
      <div style={{position: 'absolute', left: M, right: M, top: 206, opacity: headIn}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32}}>
          <SignalSquare at={8} size={12} />
          <Kicker at={10} color={C.signal} size={19}>Namun perlu dicatat</Kicker>
        </div>
        <MaskLine at={14} dur={36}>
          <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 80, lineHeight: 1.13, letterSpacing: '-0.02em', color: C.ink}}>
            Merasa berbeda bukan
          </div>
        </MaskLine>
        <MaskLine at={24} dur={36}>
          <div style={{fontFamily: F.serif, fontWeight: 300, fontSize: 80, lineHeight: 1.13, letterSpacing: '-0.02em', color: C.ink}}>
            berarti otomatis
          </div>
        </MaskLine>
        <MaskLine at={34} dur={36}>
          <div style={{fontFamily: F.serif, fontWeight: 600, fontSize: 80, lineHeight: 1.13, letterSpacing: '-0.02em', color: C.signal}}>
            berada di atas kebenaran.
          </div>
        </MaskLine>
      </div>


      {/* the negative list — what the measure is NOT (spoken by u2) */}
      <div
        style={{
          position: 'absolute',
          left: M,
          right: M,
          top: 690,
          opacity: negIn * (1 - negOut),
          transform: `translateY(${(1 - negIn) * 18}px)`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 26}}>
          <Kicker at={170} color={C.stone} size={17}>Ukurannya bukan</Kicker>
          <div style={{flex: 1, height: 1, backgroundColor: INK_12}} />
        </div>
        {[
          {at: 178, t: 'Perasaan'},
          {at: 200, t: 'Popularitas'},
          {at: 222, t: 'Banyaknya pengikut'},
        ].map((it) => {
          const p2 = lerp(frame, it.at, it.at + 30, 0, 1);
          const strike = lerp(frame, it.at + 22, it.at + 54, 0, 1);
          return (
            <div
              key={it.t}
              style={{
                padding: '22px 0',
                opacity: p2,
                transform: `translateX(${(1 - p2) * -16}px)`,
                borderBottom: `1px solid ${INK_12}`,
              }}
            >
              <span style={{position: 'relative', display: 'inline-block'}}>
                <span
                  style={{
                    fontFamily: F.display,
                    fontSize: 62,
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    color: C.stone,
                  }}
                >
                  {it.t}
                </span>
                {/* the rule is the argument: these are struck out as measures */}
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '54%',
                    height: 3,
                    width: `${strike * 100}%`,
                    backgroundColor: C.signal,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>

      {/* criteria index */}
      <div style={{position: 'absolute', left: M, right: M, top: 700}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22, opacity: lerp(frame, 380, 404, 0, 1)}}>
          <Kicker at={380} color={C.stone} size={17}>Ukurannya adalah</Kicker>
          <div style={{flex: 1, height: 1, backgroundColor: INK_12}} />
        </div>

        {items.map((it) => {
          const p = lerp(frame, it.at, it.at + 32, 0, 1);
          return (
            <div key={it.n} style={{opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
              <div style={{display: 'flex', alignItems: 'baseline', gap: 28, paddingTop: 20, paddingBottom: 18}}>
                <span
                  style={{
                    fontFamily: F.body,
                    fontSize: 21,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: C.signal,
                    fontVariantNumeric: 'tabular-nums',
                    width: 40,
                    flexShrink: 0,
                  }}
                >
                  {it.n}
                </span>
                <div style={{flex: 1}}>
                  <div
                    style={{
                      fontFamily: F.display,
                      fontSize: 50,
                      fontWeight: 500,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.15,
                      color: C.ink,
                    }}
                  >
                    {it.title}
                  </div>
                  <div style={{fontFamily: F.body, fontSize: 21, color: C.stone, marginTop: 8, letterSpacing: '0.01em'}}>
                    {it.sub}
                  </div>
                </div>
              </div>
              <div style={{height: 1, backgroundColor: INK_12}} />
            </div>
          );
        })}
      </div>

      {/* AYAH */}
      <div
        style={{
          position: 'absolute',
          left: M,
          right: M,
          top: 1218,
          opacity: ayahIn,
          transform: `translateY(${(1 - ayahIn) * 24}px)`,
        }}
      >
        <div style={{backgroundColor: C.white, borderLeft: `8px solid ${C.signal}`, padding: '38px 44px 34px'}}>
          <ArabicText at={462} size={46} lineHeight={1.85} stagger={4} text="وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهٖ عِلْمٌ" />
          <div style={{marginTop: 22, fontFamily: F.serif, fontStyle: 'italic', fontSize: 34, lineHeight: 1.4, color: C.ink}}>
            “Janganlah engkau mengikuti sesuatu yang tidak kauketahui.”
          </div>
          <div style={{marginTop: 24}}>
            <ReferenceLabel at={500} source="QS. Al-Isra: 36" color={C.ink} mutedColor={C.stone} />
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: M, right: M, bottom: 90, display: 'flex', justifyContent: 'space-between'}}>
        <Kicker at={270} color={C.stone} size={17}>Ilmu sebelum amal</Kicker>
        <Kicker at={276} color={C.stone} size={17}>04</Kicker>
      </div>
    </Scene>
  );
};
